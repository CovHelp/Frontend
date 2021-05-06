import React from 'react'
import { Box, Checkbox, Link, Stack, Text } from "@chakra-ui/react";
import { Avatar} from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import {
  
    AiOutlineHome,
    BiEdit,
    AiOutlineLock,
    AiOutlineBell,
    GrShieldSecurity,
   
    MdRedeem
  } from "react-icons/all";
function Profile() {
    return (
        <div>
            <Stack pl="16px" display="flex" flexDirection="column"  spacing={8} alignItems="flexstart">
             <Box mb="8px" mt="16px">
             <Avatar  height="4.5rem" width="4.5rem" src="https://bit.ly/broken-link" />  
             </Box>

             <Box width="100%"  display="flex" flexDirection="column"  >
                 <Box pl="0px" my="16px" display="flex" alignItems="center">
                     <AiOutlineHome size="24px"/>
                     <Text fontSize="md" ml="24px" fontWeight="500">
                         Account preview
                         </Text>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center">
                     <BiEdit size="24px"/>
                     <Text fontSize="md" ml="24px" fontWeight="500">
                        Edit Profile
                         </Text>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center">
                     <AiOutlineLock size="24px"/>
                     <Text fontSize="md" ml="24px" fontWeight="500">
                         Change Password
                         </Text>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center">
                     <AiOutlineBell size="24px"/>
                     <Text fontSize="md" ml="24px" fontWeight="500">
                         Notification Settings
                         </Text>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center">
                     <GrShieldSecurity size="24px"/>
                     <Text fontSize="md" ml="24px" fontWeight="500">
                        Privacy Settings
                         </Text>
                 </Box>
                 <Divider/>
                 
                 
                
                 


             </Box>
             
             


            </Stack>
        </div>
    )
}

export default Profile
