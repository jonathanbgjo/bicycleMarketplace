   const mongoose = require("mongoose")
const User = mongoose.model("User")
const Bike = mongoose.model("Bike")
//const users = [{name: "olivier", createdAt: new Date()}, {name: "kendra" , createdAt: new Date()}]
module.exports = {
	
	register: (req,res) => {
		User.findOne({email: req.body.email})
			.then(user => {
				if (user){
					res.status(400)
					res.json(false)
				}else {
					let new_user = new User(req.body)
					new_user.save()
					.then(()=> {
						res.json(true)
					})
					.catch( err => {
						console.log("Login error",err)
						res.status(500).json(err)
					})
				}
			})
			.catch(err => {
				res.status(400)
				res.json(false)
			})
		},
	login: (req,res) => {
		User.findOne({email: req.body.email})
			.then(user => {
				if (user.password == req.body.password){
					req.session.user = user
					res.json(true)
				}
				else{
					res.status(400)
					res.json(false)
				}
			})
			.catch( err => {
						console.log("Login error",err)
						res.status(500).json(err)
			})
		},

	logout: (req,res) => {
		req.session.destroy()
		res.redirect("/")
	},
	create:( req,res) => {
		User.findOne({email:req.session.user.email})
			.then(user => {
				var bike = new Bike(req.body)
				bike._user = user._id
				
				user.bikes.push(bike)
				bike.save(function(err){
					user.save(function(err){
						if(err){ res.json(false)}
							else{ res.json(true)}
					})
				})
			})
			.catch(err=>{
				console.log("Create error",err)
				res.status(500).json(err)
			})
			
		
	},
	get_one: (req,res) => {
		User.find({email: req.session.user.email}).populate('bikes').exec(function(err,user){
		})
			.then(user => {
				res.json(user)
			})
			.catch(err => {
				console.log("User.find error", err)
				res.status(500).json(err)
			})
	},
	get_all: (req,res) => {
		Bike.find({})
			.then(bikes => res.json(bikes))
			.catch(err => {
				console.log("userS.find error", err)
				res.status(500).json(err)
			})
	},

	update:(req,res)=>{
		Bike.findOne({_id: req.body._id})
			.then(bike => {
				bike.title = req.body.title
				bike.description = req.body.description
				bike.price = req.body.price
				bike.location = req.body.location
				bike.save(function(err){
					if(err){ res.json(false)}
						else{ res.json(true)}
				})
			})

			.catch(err=>{
				console.log("Create error",err)
				res.status(500).json(err)
			})
			
		
	},

	delete:(req,res)=>{
		console.log(req.params.id, 'HEhE')
		Bike.remove({_id: req.params.id}, function(error, bike){
			if(error){
				res.json()
			}else{
				res.json(true)
			}
		})
	},

	logged: function(req, res){
	    if(req.session.user){
	      res.json(req.session.user)
	    }else{
	      res.status(401).json(false)
	    }
	  },
}
