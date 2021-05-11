import { Avatar, Box, Divider, Flex, Link, Text } from "@chakra-ui/react";
import React from 'react';
import {
    AiOutlineHome,

    AiOutlineLock, BiEdit
} from "react-icons/all";
import CardBox from '../Cards/CardBox';
import './Profile.css';

function ProfileSetting() {
    return (
        <Box
            w="100%"
            p={3}
            pt={[1, 3]}
            d="flex"
            flexDir={"column"}
            alignItems={"center"}
            background="#f0f2f5"
        >

            <CardBox>
                <Box background="white" border={"1px"} borderColor="white">
                    <Box m={[4, 8]} >

                        <Avatar height="5rem" w="5rem" src="https://bit.ly/broken-link" />
                    </Box>
                    <Flex px={[4, 8]} w="100%" flexDir="column">
                        <Flex pl="0px" my="16px" alignItems="center" justifyContent="space-between">
                            <Flex >

                                <AiOutlineHome size="24px" />
                                <Link to="">
                                    <Text fontSize="md" ml="24px" fontWeight="500">
                                        Account preview
                         </Text>
                                </Link>
                            </Flex>
                            <Box class="arrow__container" pr={2}>
                                <svg w="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="black" stroke-w="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Box>
                        </Flex>
                        <Divider />
                        <Flex pl="0px" my="16px" alignItems="center" justifyContent="space-between">
                            <Flex >

                                <BiEdit size="24px" />
                                <Link to="">

                                    <Text fontSize="md" ml="24px" fontWeight="500">
                                        Edit Profile
                         </Text>
                                </Link>
                            </Flex>
                            <Box class="arrow__container" pr={2}>
                                <svg w="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="black" stroke-w="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Box>
                        </Flex>
                        <Divider />
                        <Flex pl="0px" my="16px" alignItems="center" justifyContent="space-between">
                            <Flex >

                                <AiOutlineLock size="24px" />
                                <Link to="">

                                    <Text fontSize="md" ml="24px" fontWeight="500">
                                        Change Password
                         </Text>
                                </Link>
                            </Flex>
                            <Box class="arrow__container" pr={2}>
                                <svg w="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="black" stroke-w="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Box>
                        </Flex>
                        <Divider mb={[5, 10]} />
                    </Flex>
                </Box>
            </CardBox>

        </Box>
    )
}

export default ProfileSetting

 // eslint-disable-next-line
{/* <Box  pl="0px" my="16px" display="flex" alignItems="center" justifyContent="space-between">
    <Box display="flex">

    <AiOutlineBell size="24px"/>
    <Link to="">

    <Text fontSize="md" ml="24px" fontWeight="500">
        Notification Settings
        </Text>
    </Link>
    </Box>
    <Box class="arrow__container"  pr="16px">
    <svg w="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 18L15 12L9 6" stroke="black" stroke-w="2" stroke-linecap="round" stroke-linejoin="round"/> 
  </svg>
    </Box>
</Box>
<DividerComponent/>
<Box  pl="0px" my="16px" display="flex" alignItems="center" justifyContent="space-between">
    <Box display="flex">

    <GrShieldSecurity size="24px"/>
    <Link to ="">
    <Text fontSize="md" ml="24px" fontWeight="500">
       Privacy Settings
        </Text>
        </Link>
</Box>
<Box  class="arrow__container" pr="16px">
    <svg w="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 18L15 12L9 6" stroke="black" stroke-w="2" stroke-linecap="round" stroke-linejoin="round"/> 
  </svg>
    </Box>
    </Box>
<DividerComponent/> */}