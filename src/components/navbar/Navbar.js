import { Button } from '@chakra-ui/button'
import { Text } from "@chakra-ui/react"
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import {FaHandHoldingHeart} from "react-icons/all"
import {VscOrganization} from "react-icons/all"
import {FaHandsHelping} from "react-icons/all"
const Navbar = () => {
    return (
        <>
            <Flex boxShadow={"xl"} bg="whiteAlpha.200" flexDir={'row'} alignItems={'center'} justifyContent={'center'} w="100%" p={4} color="black">
                <Link to='/help'><Button m={2}>  <FaHandsHelping/><Text ml={2}>Find Help</Text></Button > </Link>
                <Link exact to='/'><Button m={2}> <FaHandHoldingHeart /> <Text ml={2}>Provide Help</Text></Button ></Link>
                <Link to='/organization'><Button m={2}>  <VscOrganization/><Text ml={2}>Organisations</Text></Button></Link>
            </Flex >
        </>

    )
}
export default Navbar;
