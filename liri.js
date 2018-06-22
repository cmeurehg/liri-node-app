require("dotenv").config();
var keys = require ("./keys.js");

var r = require ("request");
var urlHit = "http://www.omdbapi.com/?t=Jaws&y=&plot=full&tomatoes=true&apikey=trilogy";

r (urlHit, function (error, response, body){
    var arrange = JSON.parse(body);
    console.log (arrange.Title);
    console.log (arrange.Year);
    console.log (arrange.Plot);
});
