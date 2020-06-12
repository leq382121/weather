import React from "react";

function Cloud({ currentWeather }) {
  const condition = currentWeather.weather[0].main;
  const location = currentWeather.name;
  const temp = currentWeather.main.temp;
  const wind = currentWeather.wind.deg;

  /**
   * Documentation:
   * https://openweathermap.org/weather-conditions
   *  */

  return (
    <div className="weather-info_wrapper">
      <div className="weather-info_location">{location}</div>
      <div className="weather-info_conditions" condition={condition}>
        <div className="icon"></div>
      </div>
      <div className="weather-info_temp-wind">
        <div className="weather-info_current-temp">{temp}°</div>
        <div className="weather-info_current-wind" wind-deg={wind}></div>
      </div>
    </div>
  );
}

export default Cloud;
