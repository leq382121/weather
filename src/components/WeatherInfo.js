import React from "react";
import { F_KELVIN_TO_CELCIUS } from "../constants/global";

function Cloud({ currentWeather }) {
  console.log(currentWeather);

  // const temp = F_KELVIN_TO_CELCIUS(currentWeather.main.temp);
  const temp = currentWeather.main.temp;
  const location = currentWeather.name;

  return (
    <div className="weather-info_wrapper">
      <div className="weather-info_city">{location}</div>
      <div className="weather-info_current-temp">{temp}°C</div>
    </div>
  );
}

export default Cloud;
