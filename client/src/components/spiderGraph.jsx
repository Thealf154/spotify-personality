import { React, useEffect, useState } from "react";
import RadarChart from "react-svg-radar-chart";
import Loading from "./loading";
import "react-svg-radar-chart/build/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/spiderGraph.css";

const SpiderGraph = (props) => {
  const [personalityType, setPersonaliltyType] = useState();
  const [data, setData] = useState();
  const [rawData, setRawData] = useState();
  const [captions, setCaptions] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    captionMargin: 30,
    scales: 4,
    captionProps: () => ({
      className: "caption",
      textAnchor: "middle",
      fontSize: 15,
      fontFamily: "sans-serif",
    }),
  };
  // What type of people love this genre?
  const genresPersonality = {
    punk: "ISTP",
    jazz: "ENFJ",
    classical: "ENTJ",
    rock: "INTP",
    alt: "INFP",
    reggae: "ISFP",
    ambient: "ISFP",
    folk: "INFJ",
    pop: "ENFP",
    metal: "INTJ",
    hop: "ESTJ",
    electro: "ESTP",
    religious: "ISFJ",
    blues: "ENFP",
    country: "ESFJ",
    soul: "ESFP",
  };

  const genres = [
    "punk",
    "jazz",
    "classical",
    "rock",
    "alt",
    "reggae",
    "ambient",
    "folk",
    "pop",
    "metal",
    "hop",
    "electro",
    "religious",
    "blues",
    "country",
    "soul",
  ];

  const example = [
    {
      data: {
        mind: 18,
        energy: 14,
        nature: 12,
        tactics: 24,
      },
      meta: { color: "blue" },
    },
  ];

  const getGenres = (artists) => {
    let genresCount = [];
    let usersGenres = artists.map((artist) => {
      return artist.genres;
    });

    genres.forEach((genre) => {
      let matches = 0;
      usersGenres.forEach((genreList) => {
        // Avoid multiple matches for every list
        // This gets a more accurate result
        genreList.every((element) => {
          let pattern = new RegExp(genre);
          let match = pattern.test(element);
          if (match) {
            matches++;
            return false;
          } else {
            return true;
          }
        });
      });

      let result = {
        genre: genre,
        matches: matches,
      };
      genresCount.push(result);
    });

    return genresCount;
  };

  const getExplicitAverage = (songs) => {
    let quantityOfSongs = 0;
    let explicitSum = 0;
    songs.forEach((element) => {
      let explicitValue = element.explicit ? 1 : 0;
      explicitSum += explicitValue;
      quantityOfSongs++;
    });
    let explicitAverage = explicitSum / quantityOfSongs;
    return explicitAverage;
  };

  const getAverageAnalysis = (audioAnalysis) => {
    let averageAnalysis = {
      danceabilityAverage: 0,
      energyAverage: 0,
      loudnessAverage: 0,
      valenceAverage: 0,
      modeAverage: 0,
    };

    // Get the sum of all values
    audioAnalysis.forEach((element) => {
      averageAnalysis.danceabilityAverage += element.danceability;
      averageAnalysis.energyAverage += element.energy;
      averageAnalysis.loudnessAverage += element.loudness;
      averageAnalysis.valenceAverage += element.valence;
      averageAnalysis.modeAverage += element.mode;
    });

    //Get the actual average
    audioAnalysis.map((element) => {
      return element / audioAnalysis.length;
    });

    return averageAnalysis;
  };

  const getData = (genresCount) => {
    let personalityMatches = {};
    let mind = 0;
    let energy = 0;
    let nature = 0;
    let tactics = 0;

    genresCount.forEach((element) => {
      let personality = genresPersonality[element.genre];
      if (personalityMatches[personality] === undefined) {
        personalityMatches[personality] = element.matches;
      } else {
        personalityMatches[personality] += element.matches;
      }
    });

    // Correct data
    Object.entries(personalityMatches).forEach((element) => {
      let personalityType = element[0];
      let points = element[1];
      let mindPoint = personalityType[0] === "E" ? points : -points;
      let energyPoint = personalityType[1] === "N" ? points : -points;
      let naturePoint = personalityType[2] === "F" ? points : -points;
      let tacticsPoint = personalityType[3] === "P" ? points : -points;

      mind += mindPoint;
      energy += energyPoint;
      nature += naturePoint;
      tactics += tacticsPoint;
    });

    let data = {
      mind: mind,
      energy: energy,
      nature: nature,
      tactics: tactics,
    };

    return data;
  };

  const getCaptions = (data, size) => {
    let half = size / 2;
    let mindCaption = data.mind > half ? "Extraversion" : "Extroversion";
    let energyCaption = data.energy > half ? "Intuitive" : "Observant";
    let natureCaption = data.nature > half ? "Feeling" : "Thinking";
    let tacticsCaption = data.tactics > half ? "Prospection" : "Judging";

    let captions = {
      mind: mindCaption,
      energy: energyCaption,
      nature: natureCaption,
      tactics: tacticsCaption,
    };

    return captions;
  };

  const getPersonalityType = (data) => {
    let personalityType = "";
    let mind = data.mind[0];
    let energy = data.energy[2] === "s" ? "S" : "N";
    let nature = data.nature[0];
    let tactics = data.tactics[0];
    personalityType += mind + energy + nature + tactics;
    return personalityType;
  };

  useEffect(() => {
    let usersData = example;

    let genresCount = getGenres(props.topArtists.data);
    let explicitAverage = getExplicitAverage(props.topSongs.data);
    let averageAnalysis = getAverageAnalysis(props.audioAnalysis.data);

    // Data values
    let rawData = getData(genresCount, averageAnalysis, explicitAverage);

    let captions = getCaptions(rawData, genresCount.length);
    setCaptions(captions);

    let personalityType = getPersonalityType(captions);
    setPersonaliltyType(personalityType);

    // Set values to positive and scale it
    Object.entries(rawData).forEach((element) => {
      let name = element[0];
      rawData[name] = Math.abs(element[1] * 1.3) / 100;
    });

    setRawData(rawData);

    usersData[0]["data"] = rawData;
    setData(usersData);

    props.onMatches(genresCount);
    props.onPersonalityType(personalityType);

    setIsLoading(false);
  }, [props.topArtists]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div id="analysis-container">
          <RadarChart
            captions={captions}
            data={data}
            size={500}
            options={options}
          />
          <p id="personality-type">Personality: {personalityType}</p>
          <p id>Mind: {parseFloat(rawData.mind).toFixed(3)}</p>
          <p id>Energy: {parseFloat(rawData.energy).toFixed(3)}</p>
          <p id>Nature: {parseFloat(rawData.nature).toFixed(3)}</p>
          <p id>Tactics: {parseFloat(rawData.tactics).toFixed(3)}</p>
        </div>
      )}
    </div>
  );
};

export default SpiderGraph;
