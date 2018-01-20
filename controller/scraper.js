
var express = require("express");
var app = express();
var router = express.Router();

var mongoose = require("mongoose");
mongoose.Promise = Promise;
var db = require("../model");
var axios = require("axios");
var cheerio = require("cheerio");

router.get("/", function(req, res) {

	res.render("index");

})

app.get("/scrape", (req, res) => {

	axios.get(" ").then(response => {

		var $ = cheerio.load(response.data);

		$(" ").each((i, element) => {

			var result = {};

			result.title = $(this).children("a").text();
			
			result.link = $(this).children("a").attr("href");

			db.Article.create(result)

			.then(dbArticle => console.log(dbArticle))

			.catch(err => res.json(err))

		});

		res.send("Scraped!");
	});
});

app.get("/articles", (req, res) => {
	
	db.Article.find({}).then(dbArticle => res.json(dbArticle))
	
	.catch(err => res.json(err))
});

app.get("/articles/:id", (req, res) => {

	db.Article.findOne({ _id: req.params.id }).populate("note")

	.then(dbArticle => res.json(dbArticle))

	.catch(err => res.json(err))
});

app.post("/articles/:id", (req, res) => {

	db.Note.create(req.body)

	.then(dbNote => db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true }))

	.then(dbArticle => res.json(dbArticle))

	.catch(err => res.json(err))
});






module.exports = router;
