const logger = require("morgan");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");

//require models
const db = require("./models");
const PORT = process.env.PORT || 3000;

const express = require("express");
var app = express();

app.use(logger("dev"));
app.use(
    bodyParser.urlencoded({ 
        extended: true
    })
);

app.use(express.static(proces.cwd() + "/public"));


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
    console.log("Connected to Mongoose!");
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Listening on Port" + port);
});



