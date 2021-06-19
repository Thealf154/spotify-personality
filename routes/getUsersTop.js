//Dependencies
var SpotifyWebApi = require("spotify-web-api-node");
var express = require("express");
var cookieParser = require("cookie-parser");
var getUsersTop = express.Router();
var cors = require('cors');

var spotifyApi = new SpotifyWebApi();

getUsersTop.use(cors())

getUsersTop.post("/getTopArtists", (req, res, next) => {
  console.log(req.body.accessToken);
  spotifyApi.setAccessToken(req.body.accessToken);
  spotifyApi.getMyTopArtists().then(
    function (data) {
      let topArtists = data.body.items;
      console.log(topArtists);
      return res.status(200).json(data.body.items)
    },
    function (err) {
      console.log("Something went wrong!", err);
      return res.status(500).json({code: 500, message: err});
    }
  );
});

getUsersTop.post("/getTopSongs", (req,res,next) => {
  spotifyApi.setAccessToken(req.body.accessToken);
  spotifyApi.getMyTopTracks().then(
    function (data) {
      let topTracks = data.body.items;
      console.log(topTracks);
      return res.status(200).json(data.body.items)
    },
    function (err) {
      console.log("Something went wrong!", err);
      return res.status(500).json({code: 500, message: err});
    }
  );
});

module.exports = getUsersTop;
