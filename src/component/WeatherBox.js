import React from "react";
import "../App.css";

const WeatherBox = ({ weather }) => {
  // console.log(weather.weather[0].description, "wea");
  return (
    <div className="WeatherBox">
      <div>{weather && weather.name}</div>
      <div>{weather?.name}</div>
      <h2>
        섭씨 {weather?.main.temp} 도 / 화씨 {weather?.main.temp * 1.8 + 32} 도
      </h2>
      {/* (섭씨 *1.8 +32) = 화씨 */}
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
