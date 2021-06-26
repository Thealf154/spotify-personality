// Dependencies
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useEffect, useState, Fragment } from "react";
import axios from "axios";
import qs from "qs";

//CSS
import "../css/bootstrapOverule.css";
import "../css/styles.css"

// Components
import Loading from "./loading";
import SpiderGraph from "./spiderGraph";
import Description from "./description";
import GenreList from "./genresList";

const PersonalityPage = (props) => {
  const [topSongs, setTopSongs] = useState();
  const [topArtists, setTopArtists] = useState();
  const [audioAnalysis, setAudioAnalysis] = useState();
  const [userInformation, setUserInformation] = useState();
  const [matches, setMatches] = useState([{genre: "punk", matches: 1}]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [personality, setPersonality] = useState("ISTJ");

  useEffect(() => {
    apiRequest();
  }, [props.token]);

  const apiRequest = () => {
    const params = new URLSearchParams();
    params.append("accessToken", props.token);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    // Get User's infomation
    axios
      .post(
        "https://boiling-reaches-39573.herokuapp.com/getMe/",
        params,
        config
      )
      .then((result) => {
        setUserInformation(result);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });

    // Get top Artists
    axios
      .post(
        "https://boiling-reaches-39573.herokuapp.com/getUsersTop/getTopArtists/",
        params,
        config
      )
      .then((result) => {
        setTopArtists(result);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });

    //Get Top Songs
    axios
      .post(
        "https://boiling-reaches-39573.herokuapp.com/getUsersTop/getTopSongs/",
        params,
        config
      )
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
          url: "https://boiling-reaches-39573.herokuapp.com/getUsersTop/getAudioAnalysis/",
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
        console.log("Error: ", err);
        setIsError(true);
        console.log(err);
      });
  };

  const handleMatches = (data) => {
    setMatches(data);
  };

  const personalityType = (personality) => {
    setPersonality(personality);
  };

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row">
          <div className="col-xl-4">
            <SpiderGraph
              topArtists={topArtists}
              topSongs={topSongs}
              audioAnalysis={audioAnalysis}
              userInformation={userInformation}
              onMatches={handleMatches}
              onPersonalityType={personalityType}
            />
          </div>
          <div className="col-xl-8">
            <Description personality={personality}/>
            <GenreList matches={matches}/>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PersonalityPage;
