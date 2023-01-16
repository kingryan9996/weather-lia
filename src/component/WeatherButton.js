import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

const WeatherButton = ({
  cities,
  setWeather,
  getCurrentLocation,
  setLoading,
  elIdx,
  setElIdx,
}) => {
  // console.log(elIdx, "최초값");
  const weatherChange = async (e) => {
    setLoading(true);
    // console.log(e);
    let city = e;
    if (city == "current location") {
      getCurrentLocation();
    } else {
      let APIkey = "f07758540fae0603dbb22c2388dd2bdd";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);
      setWeather(data);
      setLoading(false);
    }
  };
  const active = (idx) => {
    // console.log(idx, "타겟")
    // console.log(elIdx);
    setElIdx(idx);
  };
  return (
    <div className="locationBtn">
      {cities?.map((obj, key) => {
        // console.log(key, elIdx, "key와 idx");
        if (key == elIdx) {
          return (
            <Button
              variant="warning"
              id={obj}
              onClick={() => {
                weatherChange(obj);
                active(key);
              }}
              className="active"
            >
              {obj}
            </Button>
          );
        } else {
          return (
            <Button
              variant="warning"
              id={obj}
              onClick={() => {
                weatherChange(obj);
                active(key);
              }}
            >
              {obj}
            </Button>
          );
        }
      })}
    </div>
  );
};

export default WeatherButton;
