import { React } from "react";

const GenreList = (props) => {
  const availableGenres = () => {
    let genres = props.matches.filter((element) => {
      return element.matches > 0;
    });
    return genres;
  };

  const emojis = {
    punk: "⛓️",
    jazz: "🎷",
    classical: "🎻",
    rock: "🎸",
    alt: "👽",
    reggae: "🪘",
    ambient: "🌌",
    folk: "🧑‍🤝‍🧑",
    pop: "💃",
    metal: "🤘",
    hop: "",
    electro: "",
    religious: "",
    blues: "",
    country: "",
    soul: "",
  };

  const list = availableGenres().map((element) => (
    <div className="genre-element">
      {emojis[element.genre]} {element.genre}: {element.matches}
    </div>
  ));

  return (
    <div id="genre-list">
      <h2>Your favourite genres:</h2>
      <div id="list">{list}</div>
    </div>
  );
};

export default GenreList;
