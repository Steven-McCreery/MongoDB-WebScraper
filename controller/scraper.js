var express = require("express");

var router = express.Router();

var scrape = require("../model")

router.get("/", function(req, res) {
	scrape.all(function(data) {
		var hbsObject = {
			articles: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	})
})


module.exports = router;
