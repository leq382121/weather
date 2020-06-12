import { channels } from "../shared/constants";
import React, { useState, useEffect } from "react";
import { V_API_URL } from "./constants/global";
import LocationSelect from "./components/LocationSelect";
import Cloud from "./components/WeatherInfo";
import Header from "./components/Header";
import "./App.scss";

const { ipcRenderer } = window;
// const { ipcRenderer } = window;

// chosen city hook to be used as prop
// if city shown, hide select

function App() {
  const [isLocationSelected] = useState(true); //future of the app
  const [isWeatherLoaded, setIsWeatherLoaded] = useState(false);
  // const [isPlace, setIsPlace] = useState("vilnius");
  const [isWeather, setIsWeather] = useState({});
  const [isAppName, setIsAppName] = useState({ appName: "", appVersion: "" });

  ipcRenderer.send(channels.APP_INFO);
  ipcRenderer.on(channels.APP_INFO, (event, arg) => {
    ipcRenderer.removeAllListeners(channels.APP_INFO);
    const { appName, appVersion } = arg;
    setIsAppName({ appName, appVersion });
    console.log(isAppName);
  });

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
      <p>
        {isAppName.appName} {isAppName.appVersion}
      </p>
    </div>
  );
}

export default App;
