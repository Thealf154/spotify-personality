import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

const SpiderGraph = (props) => {
  const makeAnalysis = (artists, songs, audioAnalysis) => {
    let genres = artists.map(artist => {
      return artist.genres;
    })
    let data = [];
    return data;
  };

  const data = [
    {
      data: {
        extraversion: 0.7,
        agreableaness: 0.8,
        conscientiousness: 0.9,
        emotionalStability: 0.67,
        openessToExp: 0.8,
      },
      meta: { color: "blue" },
    },
  ];

  const captions = {
    // columns
    extraversion: "Extraversion",
    agreableaness: "Agreableaness",
    conscientiousness: "Conscientiousness",
    emotionalStability: "Emotional Stability",
    openessToExp: "Openess ",
  };

  return (
    <div>
      <RadarChart
        captions={captions}
        data={makeAnalysis(
          props.topArtists.data,
          props.topSongs.data,
          props.audioAnalysis.data
        )}
        size={500}
      />
    </div>
  );
};

export default SpiderGraph;
