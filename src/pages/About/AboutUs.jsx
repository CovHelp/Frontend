import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

const AboutUs = () => {
    return (
        <Flex direction="column" p={["4", "8"]} w="100%" h="auto" minW="auto" background="#f0f2f5" justifyContent="start" alignItems="center" textAlign="center" color="gray.800">

            <Box borderRadius="xl" minH="50vh" p={["4", "8"]} bgColor="white">

                <Heading as="h1" fontSize={["lg", "3xl", "4xl"]} mb={[2, 4]}>
                    About Us
                </Heading>

                <Heading mb={[4, 8]} fontSize={["md", "null", "xl"]}>
                    Let's get Familiar
                </Heading>

                <Text as="p" textAlign="left" fontSize={["md", "lg", "xl"]}>
                    CovHelp is made with a vision of creating a centralized information source for requesting and providing help. Sharing on social media sites could delay propagating the information or outdated information might be circulating. On our platform, we make sure a user can update information instantly whether he got help or no longer requires it, whether the person providing help is out of stock or resources.  Also, we provide a chat option to the user of the post which facilitates easy contact. We believe that the best way to come across this pandemic crisis is by helping each other. <b>The platform is free and without any hidden charges.</b>
                    <br/><br/>
                    You can reach us directly :  <a href="mailto:covhelp.online@gmail.com" style={{color:"blue"}}>covhelp.online@gmail.com</a>
                </Text>


            </Box>
        </Flex>
    )
}

export default AboutUs
