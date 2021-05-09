
import { Box, Grid } from '@chakra-ui/layout'
import React from 'react'
import OrganizationCard from '../../components/Cards/OrganizationCard/OrganizationCard'

const Organization = () => {
    return (
        <>
            <Box pt={3} p={["4", "8"]} background="#f0f2f5" >
                <Grid
                    
                    w="100%"
                    justifyContent="center"
                    rowGap={3}
                    columnGap={[0,3]}
                    templateColumns="repeat(auto-fill,minmax(auto,350px))"
                    background="#f0f2f5"
                >
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />
                    <OrganizationCard />

                </Grid>
            </Box>
        </>
    )
}

export default Organization
