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
      <img id="album-cover" src={element.cover} />
      <p className="album-track">{element.name}</p>
      <h3 className="album-title">{element.album}</h3>
      <p className="album-artist">{element.artist}</p>
    </div>
  ));

  return <div id="album-gallery">{gallery}</div>;
};

export default YourThingSongs;
