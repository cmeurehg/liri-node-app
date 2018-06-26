require("dotenv").config();
var keys = require ("./keys.js");
var Twitter = require ("twitter");
var Spotify = require ("node-spotify-api");

var r = require ("request");

var spotify = new Spotify (keys.spotify);
var client = new Twitter (keys.twitter);


var command = process.argv[2];

    switch (command) {
    
        case "my-tweets":
            client.get ("statuses/user_timeline", {
                screen_name: process.argv[3] || "busyrich"
            }, function (err, tweets, response) {
                for (var i = 0; i < tweets.length; i++) {
                    console.log (tweets[i].text);
                    console.log (tweets[i].created_at);
                }
                     
            
            } )
        

        break;

        case "spotify-this-song":
            spotify.search({
                type: "track",
                query: process.argv[3]
            }, function (error, data) {
                if (error) {
                    console.log (error);
                    return;
                } 
                var songs = data.tracks.items;
                for (var s = 0; s < songs.length; s++) {
                    console.log (song[i].name);
                    console.log (song[i].album.name);
                }
            })
            



        break;

        case "movie-this":
            var urlHit = "http://www.omdbapi.com/?t="+ process.argv[3] +"&y=&plot=full&tomatoes=true&apikey=trilogy";

                r (urlHit, function (error, response, body){
                var arrange = JSON.parse(body);
                console.log (arrange.Title);
                console.log (arrange.Year);
                console.log (arrange.Plot);
            });
        
    
        break;

        case "do-what-it-says":
        //random.txt file and run command 
        //create functions for those commands, which is one of these
    
    };



