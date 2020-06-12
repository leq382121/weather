import React, { useState, useEffect } from "react";
import "../App.scss";
import { V_API_URL } from "../constants/global";
import LocationSelect from "../components/LocationSelect";
import Cloud from "../components/WeatherInfo";
import Header from "../components/Header";

// chosen city hook to be used as prop
// if city shown, hide select

function App() {
  const [isLocationSelected] = useState(true); //future of the app
  const [isWeatherLoaded, setIsWeatherLoaded] = useState(false);
  // const [isPlace, setIsPlace] = useState("vilnius");
  const [isWeather, setIsWeather] = useState({});

  useEffect(() => {
    const getWeather = async () => {
      const weatherInfo = await fetch(V_API_URL)
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch(console.log);

      setIsWeather(weatherInfo);
      setIsWeatherLoaded(true);
    };
    getWeather();
  }, []);

  return (
    <div className="main">
      {isLocationSelected ? (
        isWeatherLoaded ? (
          ((<Header location={isWeather.name} />),
          (<Cloud currentWeather={isWeather} />))
        ) : (
          <p>loading weather ... </p>
        )
      ) : (
        <LocationSelect />
      )}
    </div>
  );
}

export default App;
