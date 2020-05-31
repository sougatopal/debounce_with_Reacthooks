import React from "react";
import "./styles.css";
import { citiesArr } from "./data";

function debounce(fn, time) {
  let debounceTimer;
  return function(args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fn.call("", args);
    }, time);
  };
}

export default function App() {
  const [cities, useCities] = React.useState([]);
  const [inputCities, useinputCities] = React.useState("");

  const updateCityList = React.useRef(
    debounce(city => {
      if (!city) {
        useCities([]);
      } else {
        let updartedCities = citiesArr.filter((elem, index) => {
          return elem.toLowerCase().includes(city.toLowerCase());
        });
        useCities(updartedCities);
      }
    }, 2000)
  );
  React.useEffect(() => {
    updateCityList.current(inputCities);
  }, [inputCities]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        value={inputCities}
        onChange={e => useinputCities(e.target.value)}
      />

      <div className="wrapper">
        {cities.map((citi, index) => {
          return <p key={index}>{citi}</p>;
        })}
      </div>
    </div>
  );
}
