import { Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import CardBox from '../../components/Cards/CardBox'

const AboutUs = () => {
    return (
        <Flex>
            <CardBox>

                <Heading as="h1" size="4xl">
                    About Us
                </Heading>
                <Heading as="h3"></Heading>
            </CardBox>
        </Flex>
    )
}

export default AboutUs
