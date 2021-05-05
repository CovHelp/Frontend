import React from 'react'
import { Box } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon ,  } from '@chakra-ui/icons'

function Filtersidebar() {
    return (
        // <Stack spacing="24px" w="20%" h="100%">

        // <Box w="40px" h="40px" bg="gray.100">
        //     this is filter sidebar
        // </Box>
        // </Stack>
        <Stack boxShadow="dark-lg" bg={'gray.200'}  direction={["column"]} spacing="24px" w="16%" p="10px" h="100%" >
  <Box>
  <Heading as="h5" size="lg" >
    Filters
  </Heading>

  </Box>
  <Stack direction={["column"]} spacing="32px">
  <Box display="flex" alignItems="center" >
      <PhoneIcon mr="4px"/>
    Medicine
  </Box>
  <Box >
    Hospital Beds
  </Box>
  <Box >
    Oxygen Plasma
  </Box>
  <Box >
    Plasma
  </Box>
  <Box >
    Food and Tiffin
  </Box>

  <Box>
      Ambulance
  </Box>
  </Stack>
</Stack>
    )
}

export default Filtersidebar
