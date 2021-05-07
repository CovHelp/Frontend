import React, { useState, useEffect, useRef } from "react";
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

export default function MobileSidebar({ isVisible }) {
  const location = useLocation();

  const mobileSidebarRef = useRef();
  const dispatch = useDispatch();
  const needHelpPostStore = useSelector((store) => store.needHelpPostStore);
  const provideHelpPostStore = useSelector((store) => store.provideHelpPostStore);
  
  const [needHelpPosts, setNeedHelpPosts] = useState([]);
  const [provideHelpPosts, setProvideHelpPosts] = useState([]);

  const [oxygen, setOxygen] = useState(false);
  const [ambulance, setAmbulance] = useState(false);
  const [medicine, setMedicine] = useState(false);
  const [hospitalbeds, setHospitalbeds] = useState(false);
  const [plasma, setPlasma] = useState(false);
  const [food, setFood] = useState(false);

  const [filteredInitiated, setFilterInitated] = useState(false);

  useEffect(() => {
    if (isVisible) mobileSidebarRef.current.style.transform = "translate(0px)";
    else mobileSidebarRef.current.style.transform = "translate(-300px)";
  }, [isVisible]);


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
      if (oxygen) {
        var l = provideHelpPostStore.filter((post) => post.category == 1);
        localFilteredList = [...localFilteredList, ...l];
      }
      if (ambulance) {
        var l = provideHelpPostStore.filter((post) => post.category == 2);
        localFilteredList = [...localFilteredList, ...l];
      }
      if (medicine) {
        var l = provideHelpPostStore.filter((post) => post.category == 3);
        localFilteredList = [...localFilteredList, ...l];
      }
      if (hospitalbeds) {
        var l = provideHelpPostStore.filter((post) => post.category == 4);
        localFilteredList = [...localFilteredList, ...l];
      }
      if (plasma) {
        var l = provideHelpPostStore.filter((post) => post.category == 5);
        localFilteredList = [...localFilteredList, ...l];
      }
      if (food) {
        var l = provideHelpPostStore.filter((post) => post.category == 6);
        localFilteredList = [...localFilteredList, ...l];
      }
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
      if (oxygen) {
        var l = needHelpPostStore.filter((post) => post.category == 1);
        localFilteredList = [...localFilteredList, ...l];
      }
      if (ambulance) {
        var l = needHelpPostStore.filter((post) => post.category == 2);
        localFilteredList = [...localFilteredList, ...l];
      }
      if (medicine) {
        var l = needHelpPostStore.filter((post) => post.category == 3);
        localFilteredList = [...localFilteredList, ...l];
      }
      if (hospitalbeds) {
        var l = needHelpPostStore.filter((post) => post.category == 4);
        localFilteredList = [...localFilteredList, ...l];
      }
      if (plasma) {
        var l = needHelpPostStore.filter((post) => post.category == 5);
        localFilteredList = [...localFilteredList, ...l];
      }
      if (food) {
        var l = needHelpPostStore.filter((post) => post.category == 6);
        localFilteredList = [...localFilteredList, ...l];
      }
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
    <div ref={mobileSidebarRef} class="sidenav-mobile">
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
          <StateCitySelctor />
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
              }}
            ></Checkbox>
          </Box>

          <DividerComponent />
        </Stack>
      </Stack>
    </div>
  );
}
