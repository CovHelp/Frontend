import { Box } from '@chakra-ui/layout'
import React from 'react'
import GiveHelpCard from '../../components/Cards/GiveHelpCard/GiveHelpCard'


const GiveHelp = () => {
    
    return (
        <Box p={3} d="flex" flexDir={'column'} alignItems={'center'} background="#f0f2f5">
            
            <h1>GIVE HELP</h1>
            <GiveHelpCard/>

        </Box>
    )
}

export default GiveHelp
