import React, { useState, useEffect } from "react";
import Results from "./Results";
import regeneratorRuntime from "regenerator-runtime/runtime";
import Autocomplete from "react-google-autocomplete";

const SearchParams = () => {
  const [forecast, setForecast] = useState([]);

  async function getData(url) {
    const result = fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        return data;
      });
    return result;
  }

  async function getWeather(lat, lng) {
    const metaweatherLocationSearch = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`;
    const location = await getData(metaweatherLocationSearch);
    const weatherUrl = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${location[0].woeid}/`;
    const weather = await getData(weatherUrl);
    setForecast(weather.consolidated_weather || []);
  }

  return (
    <div className="search-params">
      <Autocomplete
        style={{ width: "90%" }}
        onPlaceSelected={place => {
          console.log(place);
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          getWeather(lat, lng);
        }}
        types={["(cities)"]}
      />
      <Results forecast={forecast} />
    </div>
  );
};

export default SearchParams;
