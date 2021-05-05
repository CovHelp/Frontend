import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Flex boxShadow={"xl"} bg="whiteAlpha.200" flexDir={'row'} alignItems={'center'} justifyContent={'center'} w="100%" p={4} color="black">
                <Link to='/help'><Button m={2}> Find Help</Button > </Link>
                <Link exact to='/'><Button m={2}> Provide Help</Button ></Link>
                <Link to='/organization'><Button m={2}>  Organizations</Button></Link>
            </Flex >
        </>

    )
}
export default Navbar;
