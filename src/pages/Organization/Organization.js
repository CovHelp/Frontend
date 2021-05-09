
import { Grid } from '@chakra-ui/layout'
import React from 'react'
import OrganizationCard from '../../components/Cards/OrganizationCard/OrganizationCard'

const Organization = () => {
    return (

        <Grid
            w="100%"
            justifyContent="center"
            columnGap={4}
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

    )
}

export default Organization
