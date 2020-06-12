import React from "react";
import { F_KELVIN_TO_CELCIUS } from "../constants/global";

function Cloud({ currentWeather }) {
  const temp = F_KELVIN_TO_CELCIUS(currentWeather.temp);

  return <div className="weather-info_current-temp">{temp}</div>;
}

export default Cloud;
