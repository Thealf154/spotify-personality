//Dependencies
var SpotifyWebApi = require("spotify-web-api-node");
var express = require("express");
var cookieParser = require("cookie-parser");
var getUsersTop = express.Router();
getUsersTop.use(cookieParser());
//Node ENV
const { clientId, clientSecret, redirectUri} = require("../config");

var spotifyApi = new SpotifyWebApi();

getUsersTop.get("/getTopArtists", (req, res, next) => {
  let cookies = JSON.parse(JSON.stringify(req.cookies));
  spotifyApi.setAccessToken(cookies.accessToken);
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

getUsersTop.get("/getTopSongs", () => {
  let cookies = JSON.parse(JSON.stringify(req.cookies));
  spotifyApi.setAccessToken(cookies.accessToken);
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
