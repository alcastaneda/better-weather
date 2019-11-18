import React from "react";
import Forecast from "./Forecast";

const Results = ({ forecast }) => {
  return (
    <div className="results">
      {!forecast.length ? (
        <h1>No Forecast To Show</h1>
      ) : (
        forecast.map(dayForecast => {
          return (
            <Forecast
              key={dayForecast.id}
              date={dayForecast.applicable_date}
              maxTemp={dayForecast.max_temp.toFixed(2)}
              minTemp={dayForecast.min_temp.toFixed(2)}
              description={dayForecast.weather_state_name}
              icon={dayForecast.weather_state_abbr}
              wind={`${dayForecast.wind_speed.toFixed(2)} MPH, ${
                dayForecast.wind_direction_compass
              }`}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
