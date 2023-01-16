import React from "react";
import "../App.css";

const WeatherBox = ({ weather }) => {
  // console.log(weather?.sys.country);
  // console.log(weather.weather[0].description, "wea");
  return (
    <div className="WeatherBox">
      {/* <div className="location">{weather && weather.name}</div> */}
      <div className="location">
        {weather?.sys.country} / {weather?.name}
      </div>
      <h2>
        섭씨 {weather?.main.temp.toFixed(1)} 도 / 화씨{" "}
        {(weather?.main.temp * 1.8 + 32).toFixed(1)} 도
      </h2>
      {/* (섭씨 *1.8 +32) = 화씨 */}
      <h3>
        날씨 : {weather?.weather[0].description} / 풍속 : {weather?.wind.speed}
      </h3>
    </div>
  );
};

export default WeatherBox;
