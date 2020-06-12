import React from "react";
import { F_KELVIN_TO_CELCIUS } from "../constants/global";

function Cloud({ currentWeather }) {
  console.log(currentWeather);

  // const temp = F_KELVIN_TO_CELCIUS(currentWeather.main.temp);
  const condition = currentWeather.weather[0].main;
  const location = currentWeather.name;
  const temp = currentWeather.main.temp;
  const wind = currentWeather.wind.deg;

  /**
   * Documentation:
   * https://openweathermap.org/weather-conditions
   *  */

  console.log(condition);

  return (
    <div className="weather-info_wrapper">
      <div className="weather-info_conditions" condition={condition}>
        <div className="weather-info_conditions-icon"></div>
      </div>
      <div className="weather-info_city">{location}</div>
      <div className="weather-info_temp-wind">
        <div className="weather-info_current-temp">{temp}°C</div>
        <div className="weather-info_current-wind" wind-deg={wind}></div>
      </div>
    </div>
  );
}

export default Cloud;
