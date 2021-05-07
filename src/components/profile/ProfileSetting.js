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
import React from 'react'

function ProfileSetting() {
    return (
        <Stack  display="flex" flexDirection="column"  spacing={4} alignItems="flexstart">
             
             <Box pl="16px"  mb="8px" mt="16px">

             <Avatar  height="5rem" width="5rem" src="https://bit.ly/broken-link" />
             </Box>
        <Box pl="16px" width="100%"  display="flex" flexDirection="column"  >
                 <Box pl="0px" my="16px" display="flex" alignItems="center" justifyContent="space-between">
                     <Box display="flex" >

                     <AiOutlineHome size="24px"/>
                     <Link to="">
                     <Text fontSize="md" ml="24px" fontWeight="500">
                         Account preview
                         </Text>
                     </Link>
                     </Box>
                     <Box pr="16px">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                   </svg>
                     </Box>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center"  justifyContent="space-between">
                     <Box display="flex">

                     <BiEdit size="24px"/>
                     <Link to="">

                     <Text fontSize="md" ml="24px" fontWeight="500">
                        Edit Profile
                         </Text>
                     </Link>
                     </Box>
                     <Box pr="16px">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                   </svg>
                     </Box>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center" justifyContent="space-between">
                     <Box display="flex">

                     <AiOutlineLock size="24px"/>
                     <Link to="">

                     <Text fontSize="md" ml="24px" fontWeight="500">
                         Change Password
                         </Text>
                     </Link>
                     </Box>
                     <Box pr="16px">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                   </svg>
                     </Box>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center" justifyContent="space-between">
                     <Box display="flex">

                     <AiOutlineBell size="24px"/>
                     <Link to="">

                     <Text fontSize="md" ml="24px" fontWeight="500">
                         Notification Settings
                         </Text>
                     </Link>
                     </Box>
                     <Box pr="16px">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                   </svg>
                     </Box>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center" justifyContent="space-between">
                     <Box display="flex">

                     <GrShieldSecurity size="24px"/>
                     <Link to ="">
                     <Text fontSize="md" ml="24px" fontWeight="500">
                        Privacy Settings
                         </Text>
                         </Link>
                 </Box>
                 <Box pr="16px">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
                   </svg>
                     </Box>
                     </Box>
                 <Divider/>
                 
                 
                
                 


             </Box>
             </Stack>
    )
}

export default ProfileSetting
