// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require("express-session")
const PORT = 8000
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(session({
	secret: "really really secret",
	resave: false,
	saveUninitialized: true
}))
require("./server/config/mongoose.js")
require("./server/config/routes.js")(app)

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
