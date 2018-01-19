var express = require("express");

var router = express.Router();

var scrape = require("../model")

router.get("/", function(req, res) {

	res.render("index");

	// scrape.all(function(data) {
	// 	var hbsObject = {
	// 		articles: data
	// 	};
	// 	console.log(hbsObject);
	// 	res.render("index", hbsObject);
	// })
})


module.exports = router;
