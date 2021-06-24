// Dependencies
import { React } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12" id="title-container">
          <h1 id="title">Spotify Personality</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <div id="log-in-container">
            <Button
              variant="primary"
              id="log-in-button"
              onClick={() => {
                props.onLogIn(true);
              }}
            >
              Log in with Spotify
            </Button>
            <div id="warning">
              <p id="warning-text">
                This is not a real Personality test, don't take it seriously!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xs-12" id="image-container">
          <img id="spider-grid-example" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
