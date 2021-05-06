import { FormLabel } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
// import csc from "country-state-city";
import { useEffect, useState } from "react";


export default function StateCitySelctor() {
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [selectedState, setSelectedState] = useState("None");
  const [selectedCity, setSelectedCity] = useState("None");

  useEffect(() => {
    // const states = csc.getStatesOfCountry("IN");
    // setAllStates(states);
  }, []);

  const handleSetSelectedState = ({ target }) => {
    // const state = allStates.filter((state) => state.name === target.value);
    // setSelectedState(state[0]);
    // const cityList = csc.getCitiesOfState("IN", state[0].isoCode);
    // setAllCities(cityList);
  };

  const handleSetSelectedCity = ({ target }) => {
    // console.log(target.value);
    // const city = allCities.filter((city) => city.name === target.value);
    // setSelectedCity(city[0]);
  };

  return (
    <>
      <FormLabel>Select State</FormLabel>

      <Select my="10px" onChange={handleSetSelectedState}>
        {/* {allStates.length > 0 &&
          allStates.map((v, index) => (
            <option key={index} value={v.name}>
              {" "}
              {v.name}{" "}
            </option>
          ))} */}
      </Select>

      <FormLabel>Select City</FormLabel>

      <Select disabled={selectedState === 'None' ? true : false} placeholder={selectedState === 'None' ? "Select State first" : ''} onChange={handleSetSelectedCity}>
        {/* {allCities.length > 0 &&
          allCities.map((v, index) => (
            <option key={index} value={v.name}>
              {" "}
              {v.name}{" "}
            </option>
          ))} */}
      </Select>

      {/* <h1>
        Selected State with code: {selectedState.name} | {selectedState.isoCode} | {selectedState.latitude}, {selectedState.longitude}
      </h1>
      <h2>
        Selected City {selectedCity.name} = {selectedCity.latitude}, {selectedCity.longitude}
      </h2> */}
    </>
  );
}
