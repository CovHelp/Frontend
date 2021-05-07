import { FormLabel } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
// import csc from "country-state-city";
import { useEffect, useState } from "react";
import { getAllCitiesByStateCode, getAllStates } from "../../api/misc";


export default function StateCitySelctor({onSelected}) {
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [selectedState, setSelectedState] = useState("None");
  const [selectedCity, setSelectedCity] = useState("None");


  const fetchStates = async () => {
    try{
      const states = await getAllStates()
      setAllStates(states);
    }catch(e){
    }
  }

  useEffect(() => {
    fetchStates()
  }, []);

  const handleSetSelectedState = async ({ target }) => {
    const state = allStates.filter((state) => state.name === target.value);
    setSelectedState(state[0]);
    const cityList = await getAllCitiesByStateCode(state[0].isoCode);
    setAllCities(cityList);
  };

  const handleSetSelectedCity = ({ target }) => {
    const city = allCities.filter((city) => city.name === target.value);
    setSelectedCity(city[0]);
    onSelected(city[0], selectedState);
  };

  return (
    <>
      <FormLabel>Select State</FormLabel>

      <Select border={'2px'} my="10px" onChange={handleSetSelectedState}>
        {allStates.length > 0 &&
          allStates.map((v, index) => (
            <option key={index} value={v.name}>
              {" "}
              {v.name}{" "}
            </option>
          ))}
      </Select>

      <FormLabel>Select City</FormLabel>

      <Select border={'2px'} disabled={selectedState === 'None' ? true : false} placeholder={selectedState === 'None' ? "Select State first" : ''} onChange={handleSetSelectedCity}>
        {allCities.length > 0 &&
          allCities.map((v, index) => (
            <option key={index} value={v.name}>
              {" "}
              {v.name}{" "}
            </option>
          ))}
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
