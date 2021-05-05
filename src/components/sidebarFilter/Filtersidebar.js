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

function Filtersidebar() {
  return (
    <Stack
      borderRadius="5px"
      boxShadow="lg"
      bg="whiteAlpha.400"
      direction={["column"]}
      spacing="32px"
      // p="32px"
      my="16px"
    >
      <Box p="16px">
        <Heading as="h5" size="md">
          Filter by cateogry
        </Heading>
      </Box>
      <Stack direction={["column"]} spacing="32px">
        <Box px="8" display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <AiFillMedicineBox size="30px" />
            <Link to="">
              <Text fontSize="md" ml="8px">
                Oxygen
              </Text>
            </Link>
          </Box>

          <Checkbox size="lg" colorScheme="gray"></Checkbox>
        </Box>

        <Divider />

        <Box px="8" display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <FaAmbulance size="30px" />
            <Link to="">
              <Text fontSize="md" ml="8px">
                Ambulance
              </Text>
            </Link>
          </Box>
          <Checkbox size="lg" colorScheme="gray"></Checkbox>
        </Box>

        <Divider />

        <Box px="8" display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <FaHospitalAlt size="30px" />
            <Link>
              <Text fontSize="md" ml="8px">
                Medicine
              </Text>
            </Link>
          </Box>
          <Checkbox size="lg" colorScheme="gray"></Checkbox>
        </Box>

        <Divider />

        <Box px="8" display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <GrAidOption size="30px" />
            <Link to="">
              <Text fontSize="md" ml="8px">
                Hospital Beds
              </Text>
            </Link>
          </Box>
          <Checkbox size="lg" colorScheme="gray"></Checkbox>
        </Box>

        <Divider />

        <Box px="8" display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <GiLoveInjection size="30px" />
            <Link to="">
              <Text fontSize="md" ml="8px">
                Plasma
              </Text>
            </Link>
          </Box>
          <Checkbox size="lg" colorScheme="gray"></Checkbox>
        </Box>

        <Divider m={4}/>

        <Box px="8" display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <GiOpenedFoodCan size="30px" />
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
  );
}

export default Filtersidebar;
