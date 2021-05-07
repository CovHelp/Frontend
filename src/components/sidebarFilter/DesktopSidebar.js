import React from "react";
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
import { useSelector } from "react-redux";

export default function DesktopSidebar() {
  const needHelpPostStore = useSelector(store => store.needHelpPostStore);
  
  const handleFilter = (index) => {
    
  }
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

            <Checkbox size="lg" colorScheme="linkedin"></Checkbox>
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
            <Checkbox size="lg" colorScheme="linkedin"></Checkbox>
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
            <Checkbox size="lg" colorScheme="linkedin"></Checkbox>
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
            <Checkbox size="lg" colorScheme="linkedin"></Checkbox>
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
            <Checkbox size="lg" colorScheme="linkedin"></Checkbox>
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
            <Checkbox size="lg" colorScheme="linkedin"></Checkbox>
          </Box>

          <DividerComponent />
        </Stack>
      </Stack>
    </div>
  );
}
