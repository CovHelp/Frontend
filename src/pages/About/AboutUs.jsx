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
                    <br /><br />
                    You can reach us directly :  <a href="mailto:covhelp.online@gmail.com" style={{ color: "blue" }}>covhelp.online@gmail.com</a>

                    <br />
                    <br />
                    <br />
                    <h1> <b>
                        Disclaimer
                        </b>
                    </h1>
                    <br />
                    To the maximum extent permitted by  applicable law, the CovHelp entities shall not be liable for any indirect, incidental, special, consequential or punitive damages, or loss of profits for revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill or other intangible losses that might result from  <br /> <br /><b>1.</b> Access to or use of or inability to access or use the services. <br /><b> 2.</b> Any conduct or content of any third party on the services, including without limitation, any defamatory, offensive or illegal conduct of other users or third parties.<br /> <b>3.</b> Any content obtained from the services.  or unauthorized access, use or alteration of your transmissions or content. In no event shall the CovHelp be held liable.

                </Text>


            </Box>
        </Flex>
    )
}

export default AboutUs
