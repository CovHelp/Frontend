import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
const AddOrganizationCard = () => {
    return (
        <>
            <Flex p={["4", "8"]} bgColor="white" borderRadius="xl" h={"400px"}>
                <Flex alignItems="center" justifyContent="center" flexDir="column" _dark=" true" w="100%" minH="400px" maxH="700px">

                    <BsPlusCircle fontSize="60px" />


                </Flex>
            </Flex>
        </>
    )
}

export default AddOrganizationCard
