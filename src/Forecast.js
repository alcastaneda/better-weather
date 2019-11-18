import React from "react";
import { Link } from "@reach/router";

const Forecast = props => {
  const { date, maxTemp, minTemp, description, icon, wind } = props;

  const hero = `https://www.metaweather.com/static/img/weather/${icon}.svg`;

  return (
    <div className="daily-forecast">
      <div className="image-container">
        <img src={hero} alt="Weather Icon" />
      </div>
      <div className="info">
        <h3>{date}</h3>
        <p>{description}</p>
        <p>Max Temp: {maxTemp}</p>
        <p>Min Temp: {minTemp}</p>
        <p>Wind: {wind}</p>
      </div>
    </div>
  );
};

export default Forecast;
