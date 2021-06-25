// Dependencies
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";

// Components
import HomePage from "./components/homePage";
import PersonalityPage from "./components/personalityPage";

const App = () => {
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  const handleLogIn = (logStatus) => {
    if (logStatus) {
      window.location =
        "https://boiling-reaches-39573.herokuapp.com/auth/login";
    }
  };

  const cookieParser = (cookiename) => {
    var cookiestring = RegExp(cookiename + "=[^;]+").exec(document.cookie);
    if (cookiestring) {
      cookiestring = cookiestring[0].replace(cookiename + "=", "");
      return cookiestring;
    } else return false;
  };

  const setCookieFromUrl = () => {
    let value = document.location.hash;
    var cookiestring = RegExp("access_token" + "=[a-zA-Z0-9_-]*");
    let match = value.match(cookiestring);
    if (match) {
      let cookie = value.match(cookiestring)[0].replace("access_token=", "");
      const cookies = new Cookies();
      cookies.set("accessToken", cookie, { path: "/" });
      window.location = "https://thealf154.github.io/spotify-personality/";
    }
  };

  useEffect(() => {
    //setCookieFromUrl();
    let token = cookieParser("accessToken");
    setToken(token);
    // Use API to get information if the token is available
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");

      return fetch("https://boiling-reaches-39573.herokuapp.com/auth/callback", {
        method: "GET",
        mode: "same-origin",
        redirect: "follow",
        credentials: "include", // Don't forget to specify this if you need cookies
        headers: headers,
      });
    }
  }, []);

  const FirstPage = (props) => {
    if (props.isLoggedIn) {
      return <PersonalityPage token={token} />;
    } else {
      return <HomePage onLogIn={handleLogIn} />;
    }
  };

  return <FirstPage isLoggedIn={isLoggedIn} />;
};

export default App;
