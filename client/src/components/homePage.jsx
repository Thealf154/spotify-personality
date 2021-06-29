// Dependencies
import { React, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Popup from "reactjs-popup";

import "../css/homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";

const HomePage = (props) => {
  return (
    <div id="log-in-container">
      <h1 id="title">Spotify Personality</h1>
      <p id="warning-text">
        This is not a real personality test, don't take it seriously!
      </p>
      <p id="author">This project was made by: Alfredo Vanegas Arcega</p>
      <Button
        variant="primary"
        id="log-in-button"
        onClick={() => {
          props.onLogIn(true);
        }}
      >
        Log in with Spotify
      </Button>
    </div>
  );
};

export default HomePage;
