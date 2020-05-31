import React from "react";
import "./styles.css";
import Child from "./Child";
import { citiesArr } from "./data";

function debounce(fn, time) {
  let debounceTimer;
  return function s(args) {
    //console.log("timer", debounceTimer, "args", args);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      //console.log("args called", args);
      fn.call("", args);
    }, time);
    //console.log("timer set", debounceTimer);
  };
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cities:[],
      inputCities:""
    }

  }
  useCities(){

  }
  useinputCities(){

  }
  updateCityList(){
    if (!city) {
      useCities([]);
    } else {
      let updartedCities = citiesArr.filter((elem, index) => {
        return elem.toLowerCase().includes(city.toLowerCase());
      });
      useCities(updartedCities);
    }
  }
  
  React.useEffect(() => {
    console.log("inputcity", inputCities);
    updateCityList(inputCities);
  }, [inputCities]);

  function changeHandler(e) {
    let testChar = e.target.value;
    useinputCities(testChar);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Child />
      <h2>Start editing to see some magic happen!</h2>
      <input value={inputCities} onChange={e => changeHandler(e)} />

      <div className="wrapper">
        {cities.map((citi, index) => {
          return <p key={index}>{citi}</p>;
        })}
      </div>
    </div>
  );
}
