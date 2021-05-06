import { Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

const NotFound = () => {
    return (
        <Flex h='100vh' w="100%" left={0} top={0} position='fixed' zIndex={200} backgroundColor='white' justifyContent="center" flexDir="column" alignItems="center" color="blackAlpha.800" userSelect="none">
            <Text fontSize="8xl">😷</Text>
            <Heading size="4xl" my="2">404</Heading>
            <Text fontSize="3xl" fontWeight='bold' my="1"> Not found</Text>
            <Text fontSize={["sm", "lg"]} w={["50%", "50%", "100%"]} textAlign="center">The resource request could not be found in this server!</Text>
        </Flex>

    )
}

export default NotFound
