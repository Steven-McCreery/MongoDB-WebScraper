
// loading dependencies
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import axios from "axios";
import cheerio from "cheerio";
import db from "./models";

// setting up port
const PORT = 3000;

// setting up express
const app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));

// setting up mongoose and mongoose with ecma2015 promises
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost")



