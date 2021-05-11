import { FormLabel } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
// import csc from "country-state-city";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getAllCitiesByStateCode, getAllStates } from "../../api/misc";


export default function StateCitySelctor({onSelected, parent="default"}) {
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [selectedState, setSelectedState] = useState("None");
  const [selectedCity, setSelectedCity] = useState("None");
  const [stateState, setStateState] = useState();
  const [cityState, setCityState] = useState();
  const location = useLocation();
  

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

  useEffect(() => {
    setSelectedCity("None")
    setSelectedState("None")
  }, [location])

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
    if(parent === 'provideHelp'){
      try{
      selectedCity("None");
      selectedState("None");
      setStateState("");
      setCityState("");
      }catch(e){}
    }
  };

  return (
    <>
      <FormLabel>Select State</FormLabel>

      <Select value={selectedState === 'None' ? "Select State first" : stateState} border={'2px'} my="10px" placeholder={selectedState === 'None' ? "Select State first" : ''} onChange={handleSetSelectedState}>
        {allStates.length > 0 &&
          allStates.map((v, index) => (
            <option key={index} value={v.name}>
              {" "}
              {v.name}{" "}
            </option>
          ))}
      </Select>

      <FormLabel>Select City</FormLabel>

      <Select value={selectedState === 'None' ? "Select State first" : cityState} border={'2px'} disabled={selectedState === 'None' ? true : false} placeholder={selectedState === 'None' ? "Select State first" : ''} onChange={handleSetSelectedCity}>
        <option>Select a city</option>
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
