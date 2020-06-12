import React, { useState, useEffect } from "react";
import "../App.css";
import { API_URL } from "../constants/global";
import LocationSelect from "../components/LocationSelect";

// chosen city hook to be used as prop
// if city shown, hide select

// getStuff

function App() {
  const [isLocationSelected, setIsLocationSelected] = useState(false);
  const [isPlace, setIsPlace] = useState({});

  useEffect(() => {
    fetch(API_URL + "/places", {
      method: "GET",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsPlace({ data });
        console.log("settinu nauja state is METEO (jei pavyks zinoma)");
      })
      .catch(console.log);
  });

  return (
    <div className="main">
      {isLocationSelected ? <span></span> : <LocationSelect />}
    </div>
  );
}

export default App;
