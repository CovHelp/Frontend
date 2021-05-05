import React from "react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { AiFillMedicineBox } from "react-icons/all";
import { GiOpenedFoodCan } from "react-icons/all";
import { GrAidOption } from "react-icons/all";
import { GiLoveInjection } from "react-icons/all";
import { Checkbox, Divider } from "@chakra-ui/react";
import { FaAmbulance } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import "./index.css";

function Filtersidebar() {
  return (
    <div class="sidenav">
      <Stack
        borderRadius="5px"
        boxShadow="lg"
        bg="whiteAlpha.400"
        direction={["column"]}
        spacing="32px"
        // p="32px"
        my="16px"
      >
        <Box p="20px">
          <Text fontSize="4xl" fontWeight="600" color="gray.700">
            Filters
          </Text>
          <Text fontSize="sm" color="gray.400">
            Choose the categories in which you can provide help or want to seek
            help.
          </Text>
        </Box>
        <Divider colorScheme="telegram" />

        <Stack direction={["column"]} spacing="32px">
          <Box
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AiFillMedicineBox mx="4" size="30px" />
              <Box w="4" />
              <Link to="">
                <Text fontSize="md" ml="8px">
                  Oxygen
                </Text>
              </Link>
            </Box>

            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <Divider />

          <Box
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <FaAmbulance size="30px" />
              <Box w="4" />

              <Link to="">
                <Text fontSize="md" ml="8px">
                  Ambulance
                </Text>
              </Link>
            </Box>
            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <Divider />

          <Box
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <FaHospitalAlt size="30px" />
              <Box w="4" />

              <Link>
                <Text fontSize="md" ml="8px">
                  Medicine
                </Text>
              </Link>
            </Box>
            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <Divider />

          <Box
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <GrAidOption size="30px" />
              <Box w="4" />

              <Link to="">
                <Text fontSize="md" ml="8px">
                  Hospital Beds
                </Text>
              </Link>
            </Box>
            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <Divider />

          <Box
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <GiLoveInjection size="30px" />
              <Box w="4" />

              <Link to="">
                <Text fontSize="md" ml="8px">
                  Plasma
                </Text>
              </Link>
            </Box>
            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <Divider m={4} />

          <Box
            px="8"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <GiOpenedFoodCan size="30px" />
              <Box w="4" />

              <Link to="">
                <Text fontSize="md" ml="8px">
                  Food and Tiffin
                </Text>
              </Link>
            </Box>
            <Checkbox size="lg" colorScheme="gray"></Checkbox>
          </Box>

          <Divider />
        </Stack>
      </Stack>
    </div>
  );
}

export default Filtersidebar;
