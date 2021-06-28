import { React, Fragment } from "react";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Loading = () => {
  return (
    <Fragment>
      <div id="row" >
        <Spinner animation="grow" variant="success"/>
        <p>Loading...</p>
        <p>Wait until the API responds</p>
      </div>
    </Fragment>
  );
};

export default Loading;
