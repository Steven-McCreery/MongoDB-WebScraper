
// loading dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var exphbs = require("express-handlebars");
var db = require("./model");
var $ = require("jquery");

// setting up port
const PORT = 3000;

// setting up express
const app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended:false }));
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting up mongoose and mongoose with ecma2015 promises
mongoose.connect("mongodb://localhost:27017");
mongoose.Promise = Promise;

// setting up routes
var routes = require("./controller/scraper.js");
app.use("/", routes);

// starting up server and listening to port
app.listen(PORT, () => console.log(`Scraper running on port: ${PORT}, Mongo Time!`));
