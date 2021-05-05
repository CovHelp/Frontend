import { Box } from '@chakra-ui/layout';
import React from 'react';
import NeedHelpCard from '../../components/Cards/NeedHelpCard/NeedHelpCard';

const NeedHelp = () => {

    return (
        <>
            <Box p={3} d="flex" flexDir={'column'} alignItems={'center'} background="#f0f2f5">
                <h1>Need Help</h1>
                <NeedHelpCard />
                <NeedHelpCard />

                <NeedHelpCard />
                <NeedHelpCard />

                <NeedHelpCard />
                <NeedHelpCard />
                <NeedHelpCard />
                <NeedHelpCard />
                <NeedHelpCard />
            </Box>

        </>
    )
}

export default NeedHelp
