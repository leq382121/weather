// Variables
// const V_API_URL = "http://localhost:3010/orai";
const API_KEY = "x";
const V_API_URL =
  "http://api.openweathermap.org/data/2.5/weather?q=vilnius&appid=" +
  API_KEY +
  "&lang=lt&units=metric";

// Functions
const F_KELVIN_TO_CELCIUS = (k) => {
  return k - 273.15;
};

export { V_API_URL, F_KELVIN_TO_CELCIUS };
