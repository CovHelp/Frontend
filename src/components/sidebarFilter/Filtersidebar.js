import { Box, Checkbox, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillMedicineBox, BiFilterAlt, GiLoveInjection, GiOpenedFoodCan, GrAidOption } from "react-icons/all";
import { FaAmbulance, FaHospitalAlt } from "react-icons/fa";
import { DividerComponent } from "../divider/DividerComponent";
import "./index.css";

function Filtersidebar() {
  return (
    <div class="sidenav">
      <Stack
        borderRadius="5px"
        boxShadow="lg"
        bg="whiteAlpha"
        direction={["column"]}
        spacing="32px"
        // p="32px"
        my="16px"
      >
        <Box py="16px" px="20px">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Text fontSize="4xl" fontWeight="600" color="gray.600">
              Filters
            </Text>
            <BiFilterAlt size="24px" color="gray.50"/>
          </Box>
          <Text fontSize="sm" color="gray.400">
            Choose the categories in which you can provide help or want to seek
            help.
          </Text>
        </Box>
        <DividerComponent colorScheme="telegram" />

        <Stack direction={["column"]} spacing="32px">
          <Box
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

            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <DividerComponent />

          <Box
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
            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <DividerComponent />

          <Box
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
            <Checkbox size="lg" colorScheme="#2d88ff"></Checkbox>
          </Box>

          <DividerComponent />

          <Box
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
            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <DividerComponent />

          <Box
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
            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <DividerComponent m={4} />

          <Box
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
            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <DividerComponent />
        </Stack>
      </Stack>
    </div>
  );
}

export default Filtersidebar;
