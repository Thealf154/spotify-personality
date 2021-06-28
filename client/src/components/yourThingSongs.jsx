import { React } from "react";

const YourThingSongs = (props) => {
  const topSongs = () => {
    let topSongs = [];
    props.songs.data.every((element, index) => {
      if (index === 5) {
        return false;
      } else {
        let song = {};
        song["name"] = element.name;
        song["artist"] = element.artists[0].name;
        song["album"] = element.album.name;
        song["cover"] = element.album.images[0].url;
        topSongs.push(song);
        return true;
      }
    });

    return topSongs;
  };

  const gallery = topSongs().map((element) => (
    <div className="album-card">
      <img className="album-cover" src={element.cover} width="150" />
      <p className="album-track">{element.name}</p>
      <p className="album-title">{element.album}</p>
    </div>
  ));

  return (
    <div id="your-thing-songs">
      <h2>Your favourite songs:</h2>
      <div id="album-gallery">{gallery}</div>
    </div>
  );
};

export default YourThingSongs;
