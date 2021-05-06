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
        <Stack  display="flex" flexDirection="column"  spacing={8} alignItems="flexstart">
             
             <Box pl="16px"  mb="8px" mt="16px">

             <Avatar  height="5rem" width="5rem" src="https://bit.ly/broken-link" />
             </Box>
        <Box pl="16px" width="100%"  display="flex" flexDirection="column"  >
                 <Box pl="0px" my="16px" display="flex" alignItems="center">
                     <AiOutlineHome size="24px"/>
                     <Link to="">
                     <Text fontSize="md" ml="24px" fontWeight="500">
                         Account preview
                         </Text>
                     </Link>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center">
                     <BiEdit size="24px"/>
                     <Link to="">

                     <Text fontSize="md" ml="24px" fontWeight="500">
                        Edit Profile
                         </Text>
                     </Link>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center">
                     <AiOutlineLock size="24px"/>
                     <Link to="">

                     <Text fontSize="md" ml="24px" fontWeight="500">
                         Change Password
                         </Text>
                     </Link>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center">
                     <AiOutlineBell size="24px"/>
                     <Link to="">

                     <Text fontSize="md" ml="24px" fontWeight="500">
                         Notification Settings
                         </Text>
                     </Link>
                 </Box>
                 <Divider/>
                 <Box  pl="0px" my="16px" display="flex" alignItems="center">
                     <GrShieldSecurity size="24px"/>
                     <Link to ="">
                     <Text fontSize="md" ml="24px" fontWeight="500">
                        Privacy Settings
                         </Text>
                         </Link>
                 </Box>
                 <Divider/>
                 
                 
                
                 


             </Box>
             </Stack>
    )
}

export default ProfileSetting
