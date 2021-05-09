
import { Box, Grid } from '@chakra-ui/layout'
import React from 'react'
import OrganizationCard from '../../components/Cards/OrganizationCard/OrganizationCard'

const Organization = () => {
    return (

        <Grid
            w="100%"
            border="4px"
            p={4}
            justifyContent="center"
            gap={[2,4,6,8]}
            templateColumns="repeat(auto-fill,minmax(240px,350px))"
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

    )
}

export default Organization
