// Dependencies
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import HomePage from "./components/homePage";
import PersonalityPage from "./components/personalityPage";

const App = () => {
  const [token, setToken] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  const handleLogIn = (logStatus) => {
    if (logStatus) {
      window.location = "http://localhost:3000/auth/login";
    } else {
      document.cookie =
        "accessToken=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
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
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const FirstPage = (props) => {
    if(props.isLoggedIn) {
      return <PersonalityPage token={token}/>
    } else {
      return <HomePage onLogIn={handleLogIn}/>
    }
  }


  return(<FirstPage isLoggedIn={isLoggedIn}/>);
};

export default App;
