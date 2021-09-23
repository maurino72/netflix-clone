import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const bannerData = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        bannerData.data.results[
          Math.floor(Math.random() * bannerData.data.results.length - 1)
        ]
      );

      return bannerData;
    }

    fetchData();
  }, []);

  const truncateDescription = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie?.backdrop_path}")`
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncateDescription(`${movie?.overview}`, 150)}
        </h1>
      </div>

      <div className="banner--fadeButton" />
    </header>
  );
}

export default Banner;
