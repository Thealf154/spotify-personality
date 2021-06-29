// Dependencies
import { React, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import "../css/homePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = (props) => {
  const [isActive, setIsActive] = useState();

  return (
    <div id="log-in-container">
      <div id="information-container" style={{ display: isActive }}>
        <X
          color="#292929"
          size={50}
          id="close"
          onClick={() => setIsActive("none")}
          style={{ alignSelf: "flex-end" }}
        />
        <h2 className="section">Privacy</h2>
        <p className="section-text">
          Altough this client conects to another server, I do not collect any
          data of you. I store a cookie to be able to conect to the Spotify API,
          but eventually it expires.
        </p>
        <h2 className="section">How do you guess my personality?</h2>
        <p className="section-text">
          I use this study below as basis for the whole analysis. For every
          genre mentioned, I asign that genre to the type of personality with
          the highest percentage. For example: punk would belong to the INTP
          personality, and so on. Then the algorithm reads your top 50 songs of
          all time, and see what genre it belongs, and asign a point to the
          personality type that matches. And finally, substract the points for
          every letter of the personality type that contradicts itself (ex:
          Extroversion and Extraversion)
        </p>
        <a
          href="https://www.16personalities.com/articles/music-preferences-by-personality-type"
          id="source-link"
        >
          https://www.16personalities.com/articles/music-preferences-by-personality-type
        </a>
      </div>
      <h1 id="title">Spotify Personality</h1>
      <p id="warning-text">
        This is not a real personality test, don't take it seriously!
      </p>
      <p id="author">This project was made by: Alfredo Vanegas Arcega</p>
      <a href="" id="learn" onClick={() => setIsActive("flex")}>
        Want to learn more about this? Click me!
      </a>
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
