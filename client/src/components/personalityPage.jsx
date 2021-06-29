// Dependencies
import { React, useEffect, useState, Fragment } from "react";
import { Github } from "react-bootstrap-icons";

import { X } from "react-bootstrap-icons";
import axios from "axios";
import qs from "qs";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/bootstrapOverule.css";
import "../css/styles.css";
import "reactjs-popup/dist/index.css";

// Components
import Loading from "./loading";
import SpiderGraph from "./spiderGraph";
import Description from "./description";
import GenreList from "./genresList";
import YourThingSongs from "./yourThingSongs";

const PersonalityPage = (props) => {
  const [topSongs, setTopSongs] = useState([
    {
      album: {
        album_type: "SINGLE",
        artists: [
          {
            href: "https://api.spotify.com/v1/artists/5RR0MLwcjc87wjSw2JYdwx",
            id: "5RR0MLwcjc87wjSw2JYdwx",
            name: "MOMOLAND",
            type: "artist",
            uri: "spotify:artist:5RR0MLwcjc87wjSw2JYdwx",
          },
        ],
      },
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a5bb4ef1ca42f4378d815c7c",
          width: 640,
        },
      ],
      name: "BBoom BBoom",
    },
  ]);
  const [topFiveSongs, setTopFiveSongs] = useState([
    {
      album: {
        album_type: "SINGLE",
        artists: [
          {
            href: "https://api.spotify.com/v1/artists/5RR0MLwcjc87wjSw2JYdwx",
            id: "5RR0MLwcjc87wjSw2JYdwx",
            name: "MOMOLAND",
            type: "artist",
            uri: "spotify:artist:5RR0MLwcjc87wjSw2JYdwx",
          },
        ],
      },
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273a5bb4ef1ca42f4378d815c7c",
          width: 640,
        },
      ],
      name: "BBoom BBoom",
    },
  ]);
  const [topArtists, setTopArtists] = useState();
  const [audioAnalysis, setAudioAnalysis] = useState();
  const [userInformation, setUserInformation] = useState();
  const [matches, setMatches] = useState([{ genre: "punk", matches: 1 }]);
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

    // Get top 5 Songs
    params.append("number", 5);
    axios
      .post(
        "https://boiling-reaches-39573.herokuapp.com/getUsersTop/getTopSongs/",
        params,
        config
      )
      .then((songs) => {
        setTopFiveSongs(songs);
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
        document.cookie =
          "username=accessToken; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
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
        <Fragment>
          <div className="row">
            <div className="col-xl-4" id="spider-graph">
              <SpiderGraph
                topArtists={topArtists}
                topSongs={topSongs}
                audioAnalysis={audioAnalysis}
                userInformation={userInformation}
                onMatches={handleMatches}
                onPersonalityType={personalityType}
              />
            </div>
            <div className="col-xl-8" id="users-results">
              <Description personality={personality} />
              <div className="container" className="information-container">
                <h2 className="section">How do you guess my personality?</h2>
                <p className="section-text">
                  I use this study below as basis for the whole analysis. For
                  every genre mentioned, I asign that genre to the type of
                  personality with the highest percentage. For example: punk
                  would belong to the INTP personality, and so on. Then the
                  algorithm reads your top 50 songs of all time, and see what
                  genre it belongs, and asign a point to the personality type
                  that matches. And finally, substract the points for every
                  letter of the personality type that contradicts itself (ex:
                  Extroversion and Extraversion)
                </p>
                <p>
                  Source:
                  <a
                    href="https://www.16personalities.com/articles/music-preferences-by-personality-type"
                    id="source-link"
                  >
                    https://www.16personalities.com/articles/music-preferences-by-personality-type
                  </a>
                </p>
              </div>
              <GenreList matches={matches} />
              <YourThingSongs songs={topFiveSongs} />
              <a
                href="https://github.com/Thealf154/spotify-personality"
                style={{ color: "white" }}
              >
                <Github size={30} color="white" id="git-logo" />
                See this project on Github
              </a>

              <div className="container" className="information-container">
                <h2 className="section">Privacy</h2>
                <p className="section-text">
                  Altough this client conects to another server, I do not
                  collect any data of you. I store a cookie to be able to conect
                  to the Spotify API, but eventually it expires.
                </p>
              </div>
            </div>
          </div>
          );
        </Fragment>
      )}
    </Fragment>
  );
};

export default PersonalityPage;
