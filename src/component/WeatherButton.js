import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

const WeatherButton = ({
  cities,
  setWeather,
  getCurrentLocation,
  setLoading,
}) => {
  const weatherChange = async (e) => {
    let city = e.target.id;
    if (city == "current location") {
      getCurrentLocation();
    } else {
      let APIkey = "f07758540fae0603dbb22c2388dd2bdd";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);
      setWeather(data);
      setLoading(false);
      console.log(e.target, "25");
    }
    active(e);
  };
  const active = (e) => {
    console.log(e.target, "타겟");
    e.target.classList.toggle("active");
  };
  return (
    <div className="locationBtn">
      {cities?.map((obj, key) => {
        return (
          <Button
            variant="warning"
            id={obj}
            onClick={weatherChange}
            className="location-btn"
          >
            {obj}
          </Button>
        );
      })}
    </div>
  );
};

export default WeatherButton;
