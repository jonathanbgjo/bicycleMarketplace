 const path = require("path")
const users = require("./../controllers/users.js")

module.exports = app => {
	//app.get("/get_all_users", users.get_all)
	app.post("/register", users.register)
	app.post("/login", users.login)
	app.get("/logout", users.logout)

	app.post("/create", users.create)
	app.get("/get_one", users.get_one)
	app.get("/get_all", users.get_all)
	app.post("/update", users.update)
	app.delete('/delete/:id', users.delete)
	app.get("/logged", users.logged)
	app.get('*', (req,res)=> res.sendFile(path.resolve('./client/dist/index.html')))


}