const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
	first_name: String,         //{{required: true, unique: true, type:string}}
	last_name: String,
	email: String,
	password: String,
	confirmPassword:String,
	bikes:[{type: mongoose.Schema.Types.ObjectId, ref: 'Bike'}]
}, {timestamps:true}) 

const BikeSchema = mongoose.Schema({
	title: String,
	description: String,
	price: Number,
	location: String,
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})





mongoose.model("User", UserSchema)
mongoose.model('Bike', BikeSchema);