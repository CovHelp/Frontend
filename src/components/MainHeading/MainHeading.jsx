import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'

const MainHeading = (props) => {
    return (
        <Box w={['100%']} d={["inline-block" , "inline-block" , "none"]} maxW="700px" textAlign="left" mt={4} mb={2}>
            <Heading as="h1" size={"xl"} color="#0078ff">{props.name}</Heading>
        </Box>
    )
}

export default MainHeading
