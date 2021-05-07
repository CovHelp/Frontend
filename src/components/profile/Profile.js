import React, { useState } from 'react'
import { Box, Button, Checkbox, Link, Stack, Text } from "@chakra-ui/react";
import { Avatar} from "@chakra-ui/react"
import {BiEdit} from 'react-icons/all'
import ProfileSetting from './ProfileSetting';
import { useSelector } from 'react-redux';

function Profile() {
    const [showSetting,setShowSetting]=useState(false);
    const userStore = useSelector(store => store.userStore);

    function handleClick(){
        setShowSetting(!showSetting);
        console.log(showSetting)
    
    }

    return (
        <div>
            <Stack  display="flex" flexDirection="column"  spacing={8} alignItems="flexstart">
             <Box pl="16px"  mb="8px" mt="16px" display="flex"  >

             <Avatar  height="5rem" width="5rem" src={userStore.token !== null ? userStore.profile_pic : "https://bit.ly/broken-link" } />  
             <Box pl="10px">

             <Text fontSize="md" fontWeight="500">{userStore.token !== null ? userStore.firstName + " " + userStore.lastName: ""}</Text>
             <Text fontSize="sm" fontWeight="400">{userStore.token !== null ? userStore.email : ""}</Text>
             <Button onClick={handleClick} size="xs" colorScheme="linkedin"><BiEdit/> <Text ml="3px">
                 Edit Profile
                 </Text>
                 </Button>
             </Box>
             </Box>
             {
               showSetting ? (
                   
                <ProfileSetting/>
               ) : (
                   <Stack >
                       <Box bg="gray.100" display="flex">
                           <Box flex="0.5"  textAlign="center" borderBottom="2px solid #2d88ff">
                               <Text fontSize="md" fontWeight="500" p={2}>Need Help</Text>
                           </Box>
                           <Box flex="0.5" textAlign="center">
                               <Text fontSize="md" fontWeight="500" p={2}>Provide Help</Text>
                           </Box>
                       </Box>

                       < >

                       </>
                       
                   </Stack>
               )
             
                 
            }
             
             


            </Stack>
        </div>
    )
}

export default Profile
