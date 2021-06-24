//Dependencies
var SpotifyWebApi = require("spotify-web-api-node");
var express = require("express");
var cookieParser = require("cookie-parser");
var getUsersTop = express.Router();
var cors = require("cors");

var spotifyApi = new SpotifyWebApi();

getUsersTop.use(cors());

getUsersTop.post("/getTopArtists", (req, res, next) => {
  console.log("Request Artists");
  spotifyApi.setAccessToken(req.body.accessToken);
  spotifyApi.getMyTopArtists().then(
    function (data) {
      return res.status(200).json(data.body.items);
    },
    function (err) {
      console.log("Something went wrong!", err);
      return res.status(500).json({ code: 500, message: err });
    }
  );
});

getUsersTop.post("/getTopSongs", (req, res, next) => {
  spotifyApi.setAccessToken(req.body.accessToken);
  spotifyApi.getMyTopTracks().then(
    function (data) {
      return res.status(200).json(data.body.items);
    },
    function (err) {
      console.log("Something went wrong!", err);
      return res.status(500).json({ code: 500, message: err });
    }
  );
});

getUsersTop.post("/getAudioAnalysis", (req, res, next) => {
  spotifyApi.setAccessToken(req.body.accessToken);
  let tracks = req.body.tracks;
  let tracksRequested = tracks.map((track) => {
    let songId = track.id;
    return songId;
  });
  spotifyApi.getAudioFeaturesForTracks(tracksRequested).then(
    function (data) {
      data.body.audio_features.forEach((analysis, index) => {
        analysis["name"] = tracks[index].name;
      });
      console.log("Audio Features");
      return res.status(200).json(data.body.audio_features);
    },
    function (err) {
      done(err);
    }
  );
});

getUsersTop.post("/getMe", (req, res, next) => {
  spotifyApi.setAccessToken(req.body.accessToken);
  spotifyApi.getMe().then(
    function (data) {
      res.status(200).json(data.body);
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

module.exports = getUsersTop;