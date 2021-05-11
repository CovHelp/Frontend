import { Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
const AddOrganizationCard = () => {
    return (
        <>
            <Flex p={3} bgColor="white" borderRadius="xl" h={"400px"} border="3px dashed">
                <Flex alignItems="center" justifyContent="center" flexDir="column" _dark=" true" w="100%" minH="400px" maxH="700px" textAlign="center"
                    _hover={{
                        transform: "scale(1.2)"
                    }}>

                    <BsPlusCircle fontSize="60px" />

                    <br /><br />
                    <Heading as={"h3"} fontSize="lg">Add a new Organization</Heading>
                </Flex>
            </Flex>
        </>
    )
}

export default AddOrganizationCard
