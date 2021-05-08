import React, { useEffect, useState } from "react";
import {
  AiFillMedicineBox,
  BiFilterAlt,
  GiLoveInjection,
  GiOpenedFoodCan,
  GrAidOption,
} from "react-icons/all";
import { FaAmbulance, FaHospitalAlt } from "react-icons/fa";
import { DividerComponent } from "../divider/DividerComponent";
import "./index.css";
import StateCitySelctor from "../newpost/StateCitySelector";

import { Box, Checkbox, Link, Stack, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom'; 


export default function DesktopSidebar() {
  const location = useLocation();

  const dispatch = useDispatch();
  const needHelpPostStore = useSelector((store) => store.needHelpPostStore);
  const provideHelpPostStore = useSelector((store) => store.provideHelpPostStore);

  const [needHelpPosts, setNeedHelpPosts] = useState([]);
  const [provideHelpPosts, setProvideHelpPosts] = useState([]);

  const [oxygen, setOxygen] = useState(true);
  const [ambulance, setAmbulance] = useState(false);
  const [medicine, setMedicine] = useState(false);
  const [hospitalbeds, setHospitalbeds] = useState(false);
  const [plasma, setPlasma] = useState(false);
  const [food, setFood] = useState(false);

  const [oxygenFilter, setOxygenFilter] = useState(-1)
  const [ambulanceFilter, setAmbulanceFilter] = useState(-1)
  const [medicineFilter, setMedicineFilter] = useState(-1)
  const [hospitalbedsFilter, setHospitalbedsFilter] = useState(-1)
  const [plasmaFilter, setPlasmaFilter] = useState(-1)
  const [foodFilter, setFoodFilter] = useState(-1)

  const [filteredInitiated, setFilterInitated] = useState(false);

  const handleProvideHelpFilter = () => {
    setFilterInitated(true);
    var localFilteredList = [];
    if (
      !oxygen &&
      !ambulance &&
      !medicine &&
      !hospitalbeds &&
      !plasma &&
      !food
    ) {
      setProvideHelpPosts(provideHelpPostStore);
    } else if (
      oxygen &&
      ambulance &&
      medicine &&
      hospitalbeds &&
      plasma &&
      food
    ) {
      setProvideHelpPosts(provideHelpPostStore);
    } else {
      var l = provideHelpPostStore.filter((post) => {
        if(post.category == oxygenFilter){
          localFilteredList = [...localFilteredList, post]
        }else if(post.category == ambulanceFilter){
          localFilteredList = [...localFilteredList, post]
        }else if(post.category == medicineFilter){
          localFilteredList = [...localFilteredList, post]
        }else if(post.category == hospitalbedsFilter){
          localFilteredList = [...localFilteredList, post]
        }else if(post.category == plasmaFilter){
          localFilteredList = [...localFilteredList, post]
        }else if(post.category == foodFilter){
          localFilteredList = [...localFilteredList, post]
        }
      })
      console.log("teh value of posts are ", localFilteredList);
      setProvideHelpPosts(localFilteredList);
    }
  };

  const handleNeedHelpFilter = () => {
    setFilterInitated(true);
    var localFilteredList = [];
    if (
      !oxygen &&
      !ambulance &&
      !medicine &&
      !hospitalbeds &&
      !plasma &&
      !food
    ) {
      setNeedHelpPosts(needHelpPostStore);
    } else if (
      oxygen &&
      ambulance &&
      medicine &&
      hospitalbeds &&
      plasma &&
      food
    ) {
      setNeedHelpPosts(needHelpPostStore);
    } else {
      var l = needHelpPostStore.filter((post) => {
        if(post.category == oxygenFilter){
          localFilteredList = [...localFilteredList, post]
        }else if(post.category == ambulanceFilter){
          localFilteredList = [...localFilteredList, post]
        }else if(post.category == medicineFilter){
          localFilteredList = [...localFilteredList, post]
        }else if(post.category == hospitalbedsFilter){
          localFilteredList = [...localFilteredList, post]
        }else if(post.category == plasmaFilter){
          localFilteredList = [...localFilteredList, post]
        }else if(post.category == foodFilter){
          localFilteredList = [...localFilteredList, post]
        }
      })
      setNeedHelpPosts(localFilteredList);
    }
  };

  useEffect(() => {
    console.log(window.location.href.split("/").length)
    if(window.location.href.includes('provide-help')){
      handleProvideHelpFilter()
    }else if(window.location.href.split("/").length === 4){
      handleNeedHelpFilter()
    }
  }, [
    oxygen,
    ambulance,
    medicine,
    hospitalbeds,
    plasma,
    food,
  ]);

  useEffect(() => {
    if (filteredInitiated)
      dispatch({
        type: "SAVE_NEED_HELP_POSTS_FILTERED",
        payload: needHelpPosts,
      });
  }, [needHelpPosts]);

  useEffect(() => {
    if (filteredInitiated)
      dispatch({
        type: "SAVE_PROVIDE_HELP_POSTS_FILTERED",
        payload: provideHelpPosts,
      });
  }, [provideHelpPosts]);

  const handleLocationSelect = (city, state) => {
    var localFilteredList = [];
    console.log("selected location", state, city)
    setFilterInitated(true);
    console.log("teh value of posts are ", localFilteredList);
    if(window.location.href.includes('provide-help')){
      var l = provideHelpPostStore.filter((post) => {
        for(let i = 0; i < post.locations.length; ++i){
          if(post.locations[i].state == state.name){
            if(post.locations[i].city == city.name){
              localFilteredList = [...localFilteredList, post]
            }
          }
        }
      })
      setProvideHelpPosts(localFilteredList);
    }else if(window.location.href.split("/").length === 4){
      var l = needHelpPostStore.filter((post) => {
        if(post.location.state == state.name){
          if(post.location.city == city.name){
            localFilteredList = [...localFilteredList, post]
          }
        }
      })
      setNeedHelpPosts(localFilteredList);
    }
  }


  useEffect(() => {
    console.log("New location")
    setOxygen(false);
    setAmbulance(false);
    setMedicine(false);
    setHospitalbeds(false);
    setPlasma(false);
    setFood(false);
  }, [location]);

  return (
    <div class="sidenav">
      <Stack
        borderRadius="5px"
        boxShadow="lg"
        bg="whiteAlpha"
        direction={["column"]}
        spacing="32px"
        overflow="scroll"
      >
        <Box py="12px" px="20px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="4xl" fontWeight="600" color="gray.600">
              Filters
            </Text>
            <BiFilterAlt size="24px" color="gray.50" />
          </Box>
          <Text fontSize="sm" color="gray.400">
            Choose the categories in which you can provide help or want to seek
            help.
          </Text>
        </Box>

        <DividerComponent colorScheme="telegram" />

        <Box py="16px" px="20px" style={{ marginTop: 0 }}>
          <StateCitySelctor onSelected={handleLocationSelect} />
        </Box>

        <DividerComponent colorScheme="telegram" />

        <Stack direction={["column"]} spacing="32px">
          <Box
            style={{ marginTop: -16 }}
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AiFillMedicineBox mx="4" size="24px" />
              <Box w="4" />
              <Link to="">
                <Text fontSize="md" ml="8px">
                  Oxygen
                </Text>
              </Link>
            </Box>

            <Checkbox
              isChecked={oxygen}
              size="lg"
              colorScheme="linkedin"
              onChange={(e) => {
                setOxygen(e.target.checked);
                if(e.target.checked){
                  setOxygenFilter(1);
                }else{
                  setOxygenFilter(-1)
                }
              }}
            ></Checkbox>
          </Box>

          <DividerComponent />

          <Box
            style={{ marginTop: 16 }}
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <FaAmbulance size="24px" />
              <Box w="4" />

              <Link to="">
                <Text fontSize="md" ml="8px">
                  Ambulance
                </Text>
              </Link>
            </Box>
            <Checkbox
              isChecked={ambulance}

              onChange={(e) => {
                setAmbulance(e.target.checked);
                if(e.target.checked) {
                  setAmbulanceFilter(2)
                }else {
                  setAmbulanceFilter(-1)
                }
              }}
              size="lg"
              colorScheme="linkedin"
            ></Checkbox>
          </Box>

          <DividerComponent />

          <Box
            style={{ marginTop: 16 }}
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <FaHospitalAlt size="24px" />
              <Box w="4" />

              <Link>
                <Text fontSize="md" ml="8px">
                  Medicine
                </Text>
              </Link>
            </Box>
            <Checkbox
              isChecked={medicine}

              size="lg"
              colorScheme="linkedin"
              onChange={(e) => {
                setMedicine(e.target.checked);
                if(e.target.checked){
                  setMedicineFilter(3)
                }else{
                  setMedicineFilter(-1)
                }
              }}
            ></Checkbox>
          </Box>

          <DividerComponent />

          <Box
            style={{ marginTop: 16 }}
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <GrAidOption size="24px" />
              <Box w="4" />

              <Link to="">
                <Text fontSize="md" ml="8px">
                  Hospital Beds
                </Text>
              </Link>
            </Box>
            <Checkbox
              isChecked={hospitalbeds}

              size="lg"
              colorScheme="linkedin"
              onChange={(e) => {
                setHospitalbeds(e.target.checked);
                if(e.target.checked){
                  setHospitalbedsFilter(4)
                }else{
                  setHospitalbedsFilter(-1)
                }
              }}
            ></Checkbox>
          </Box>

          <DividerComponent />

          <Box
            style={{ marginTop: 16 }}
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <GiLoveInjection size="24px" />
              <Box w="4" />

              <Link to="">
                <Text fontSize="md" ml="8px">
                  Plasma
                </Text>
              </Link>
            </Box>
            <Checkbox
              isChecked={plasma}

              size="lg"
              colorScheme="linkedin"
              onChange={(e) => {
                setPlasma(e.target.checked);
                if(e.target.checked){
                  setPlasmaFilter(5)
                }else{
                  setPlasmaFilter(-1)
                }
              }}
            ></Checkbox>
          </Box>

          <DividerComponent m={4} />

          <Box
            style={{ marginTop: 16 }}
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <GiOpenedFoodCan size="24px" />
              <Box w="4" />

              <Link to="">
                <Text fontSize="md" ml="8px">
                  Food and Tiffin
                </Text>
              </Link>
            </Box>
            <Checkbox
              isChecked={food}

              size="lg"
              colorScheme="linkedin"
              onChange={(e) => {
                setFood(e.target.checked);
                if(e.target.checked){
                  setFoodFilter(6)
                }else{
                  setFoodFilter(-1)
                }
              }}
            ></Checkbox>
          </Box>

          <DividerComponent />
        </Stack>
      </Stack>
    </div>
  );
}
