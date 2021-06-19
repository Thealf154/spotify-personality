// Dependencies
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import qs from "qs";

// Components
import HomePage from "./components/homePage";
import PersonalityPage from "./components/personalityPage";

const App = () => {
  const [topSongs, setTopSongs] = useState({});
  const [topArtists, setTopArtists] = useState({});
  const [token, setToken] = useState();

  const handleLogIn = (logStatus) => {
    if (logStatus) {
      window.location = "http://localhost:3000/auth/login";
    }
  };

  const cookieParser = (cookiename) => {
    var cookiestring = RegExp(cookiename + "=[^;]+").exec(document.cookie);
    if (cookiestring) {
      cookiestring = cookiestring[0].replace(cookiename + "=", "");
      return cookiestring;
    } else return false;
  };

  useEffect(() => {
    let token = cookieParser("accessToken");
    setToken(token);
    // Use API to get information if the token is available
    if (token) {
      const data = { accessToken: token };
      const optionsArtists = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        url: "http://localhost:3000/getUsersTop/getTopArtists/",
        data: qs.stringify(data),
      };
      const optionsSongs = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        url: "http://localhost:3000/getUsersTop/getTopSongs/",
        data: qs.stringify(data),
      };
      console.log(token);
      axios(optionsArtists)
        .then((result) => {
          setTopArtists(result);
        })
        .catch((err) => {
          console.log(err);
        });
      axios(optionsSongs)
        .then((result) => {
          setTopSongs(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  }, []);

  const firstPage = () => {
    if (token) {
      return <PersonalityPage topArtists={topArtists} topSongs={topSongs} />;
    } else {
      return <HomePage onLogIn={handleLogIn} />;
    }
  };

  return <div>{firstPage()}</div>;
};

export default App;
