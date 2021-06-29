import { React } from "react";
import { X } from "react-bootstrap-icons";

const Share = (isActive, hanldeIsActive) => {
  const node = document.getElementById("col-xl-4");

  const getImage = () => {
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        let target = document.querySelector("#target");
        img.src = dataUrl;
        target.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div id="share-window" style={{ display: isActive }}>
      <X
        color="#292929"
        size={50}
        id="close"
        onClick={() => hanldeIsActive("none")}
        style={{ alignSelf: "flex-end" }}
      />
      <h1>Share your results!</h1>
      <div id="target"></div>
      {getImage}
    </div>
  );
};

export default Share;
