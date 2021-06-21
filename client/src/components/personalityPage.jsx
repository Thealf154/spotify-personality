// Dependencies
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useEffect, useState, Fragment } from "react";
import axios from "axios";
import qs from "qs";

// Components
import Loading from "./loading";
import SpiderGraph from "./spiderGraph";

const PersonalityPage = (props) => {
  const [topSongs, setTopSongs] = useState();
  const [topArtists, setTopArtists] = useState();
  const [audioAnalysis, setAudioAnalysis] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userInformation, setUserInformation] = useState();

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("accessToken", props.token);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    // Get top Artists
    axios
      .post("http://localhost:3000/getUsersTop/getTopArtists/", params, config)
      .then((result) => {
        setTopArtists(result);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });

    //Get Top Songs
    axios
      .post("http://localhost:3000/getUsersTop/getTopSongs/", params, config)
      .then((songs) => {
        setTopSongs(songs);
        let request = {};
        let data = songs.data.map((song) => {
          let songID = song.id.toString();
          let songName = song.name;
          let track = {
            id: songID,
            name: songName,
          };
          return track;
        });
        request["accessToken"] = props.token;
        request["tracks"] = data;
        const options = {
          method: "POST",
          headers: { "content-type": "application/x-www-form-urlencoded" },
          data: qs.stringify(request),
          url: "http://localhost:3000/getUsersTop/getAudioAnalysis/",
        };
        axios(options)
          .then((result) => {
            setAudioAnalysis(result);
          })
          .finally(() => {
            setIsError(false);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        setIsError(true);
        document.cookie =
          "accessToken=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
        console.log(err);
      });


  }, [props.token]);

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <SpiderGraph
          topArtists={topArtists}
          topSongs={topSongs}
          audioAnalysis={audioAnalysis}
        />
      )}
    </Fragment>
  );
};

export default PersonalityPage;
