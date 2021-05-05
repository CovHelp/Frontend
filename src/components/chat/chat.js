import React from 'react'
import { Image } from '@chakra-ui/image'
import { Box, Heading, Stack, Text } from '@chakra-ui/layout'

function Chat() {
    return (
        <Stack flex="0.4" borderRadius="10px" boxShadow="lg" bg="whiteAlpha.400"  direction={["column"]} spacing="32px" w="16%" p="10px">
             <Box>
  <Heading as="h5" size="lg" >
    Chat
  </Heading>

  </Box>

  <Box display="flex" alignContent="center">
      <Image borderRadius="50%" h="40px" w="40px"  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
     <Text fontSize="md" ml="16px">Name</Text>
  </Box>
  <Box display="flex" alignContent="center">
      <Image borderRadius="50%" h="40px" w="40px"  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
     <Text fontSize="md" ml="16px">Name</Text>
  </Box>
  <Box display="flex" alignContent="center">
      <Image borderRadius="50%" h="40px" w="40px"  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
     <Text fontSize="md" ml="16px">Name</Text>
  </Box>
  <Box display="flex" alignContent="center">
      <Image borderRadius="50%" h="40px" w="40px"  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
     <Text fontSize="md" ml="16px">Name</Text>
  </Box>
  <Box display="flex" alignContent="center">
      <Image borderRadius="50%" h="40px" w="40px"  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
     <Text fontSize="md" ml="16px">Name</Text>
  </Box>
        </Stack>
    )
}

export default Chat
