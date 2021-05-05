import { useEffect, useState } from "react";

import csc from "country-state-city";

export default function StateCitySelctor() {
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [selectedState, setSelectedState] = useState("None");
  const [selectedCity, setSelectedCity] = useState("None");

  useEffect(() => {
    const states = csc.getStatesOfCountry("IN");
    setAllStates(states);
  }, []);

  const handleSetSelectedState = ({ target }) => {
    const state = allStates.filter((state) => state.name === target.value);
    setSelectedState(state[0]);
    const cityList = csc.getCitiesOfState("IN", state[0].isoCode);
    setAllCities(cityList);
  };

  const handleSetSelectedCity = ({ target }) => {
    console.log(target.value);
    const city = allCities.filter((city) => city.name === target.value);
    setSelectedCity(city[0]);
  };

  return (
    <div className="App">
      <select onChange={handleSetSelectedState}>
        {allStates.length > 0 &&
          allStates.map((v, index) => (
            <option key={index} value={v.name}>
              {" "}
              {v.name}{" "}
            </option>
          ))}
      </select>
      <select onChange={handleSetSelectedCity}>
        {allCities.length > 0 &&
          allCities.map((v, index) => (
            <option key={index} value={v.name}>
              {" "}
              {v.name}{" "}
            </option>
          ))}
      </select>

      <h1>
        Selected State with code: {selectedState.name} | {selectedState.isoCode} | {selectedState.latitude}, {selectedState.longitude}
      </h1>
      <h2>
        Selected City {selectedCity.name} = {selectedCity.latitude}, {selectedCity.longitude}
      </h2>
    </div>
  );
}
