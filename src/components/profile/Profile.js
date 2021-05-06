import React, { useState } from 'react'
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Avatar} from "@chakra-ui/react"
import {BiEdit} from 'react-icons/all'

import {Link } from 'react-router-dom'

function Profile() {
    const [showSetting,setShowSetting]=useState(false);

    function handleClick(){
        setShowSetting(!showSetting);
        console.log(showSetting)
    
    }

    return (
        <div>
            <Stack  display="flex" flexDirection="column"  spacing={8} alignItems="flexstart">
             <Box pl="16px"  mb="8px" mt="16px" display="flex"  >

             <Avatar  height="5rem" width="5rem" src="https://bit.ly/broken-link" />  
             <Box pl="10px">

             <Text fontSize="md" fontWeight="500">Shashwat</Text>
             <Text fontSize="sm" fontWeight="400">shashwat123@gmail.com</Text>
             <Link to="/settings"><Button onClick={handleClick} size="xs" colorScheme="linkedin"><BiEdit/> <Text ml="3px">
                 Edit Profile
                 </Text>
                 </Button>
                 </Link>
             </Box>
             </Box>
            
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
               
             
                 
           
             
             


            </Stack>
        </div>
    )
}

export default Profile
