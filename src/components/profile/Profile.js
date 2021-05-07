import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Avatar} from "@chakra-ui/react"
import {BiEdit} from 'react-icons/all'
import {Link } from 'react-router-dom'
import NeedHelp from '../../pages/NeedHelp/NeedHelp'
import GiveHelp from '../../pages/GiveHelp/GiveHelp'


function Profile() {
    const [active,setActive]=useState(false);
    const [activeProvide,setActiveProvide]=useState(false);

    useEffect(()=>{
        setActive(!active)
    },[])

    function handleNeedHelp(){
        setActiveProvide(!activeProvide)
        setActive(!active);   
    }

    function handleProvideHelp(){
        setActive(!active)
        setActiveProvide(!activeProvide)
    }

    return (
        <div>
            <Stack  display="flex" flexDirection="column"  spacing={8} alignItems="flexstart">
             <Box pl="16px"  mb="8px" mt="16px" display="flex"  >

             <Avatar  height="5rem" width="5rem" src="https://bit.ly/broken-link" />  
             <Box pl="10px">

             <Text fontSize="md" fontWeight="500" >Shashwat</Text>
             <Text fontSize="sm" fontWeight="400" >shashwat123@gmail.com</Text>
             <Link to="/settings"><Button  size="xs" mt="6px" colorScheme="linkedin"><BiEdit/> <Text ml="3px">
                 Edit Profile
                 </Text>
                 </Button>
                 </Link>
             </Box>
             </Box>
            
                <Box >
                       <Box bg="gray.100" display="flex">
                           <Box flex="0.5" onClick={handleNeedHelp} textAlign="center" borderBottom={ active && "2px solid #2d88ff"}>
                               <Text fontSize="md" fontWeight="500"  p={2}>Need Help</Text>
                           </Box>
                           <Box  flex="0.5" textAlign="center" onClick={handleProvideHelp} borderBottom={activeProvide && "2px solid #2d88ff"}>
                               
                                   <Text fontSize="md"  fontWeight="500" p={2}>Provide Help</Text>
                                   
                           </Box>
                       </Box>

                       {/* posts */}

                       <Stack width="100vw" h="auto" p="10px">
                           {
                               active ? (
                                   

                                   <NeedHelp/>
                                  
                               ):(
                                   

                                <GiveHelp/>
                               
                               )

                           }

                       </Stack>
                       
                   </Box>
               
             
                 
           
             
             


            </Stack>
        </div>
    )
}

export default Profile
