import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Flex } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [auth, setauth] = useState(false)
    return (
        <>
            <Flex boxShadow={"xl"} bg="whiteAlpha.200" flexDir={'row'} alignItems={'center'} justifyContent={'space-between'} w="100%" p={4} color="black">
                <Flex flex="1">
                    <Avatar ml={2} name="Logo" src="https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg" />
                </Flex>
                <Flex justifyContent={'center'} flex="1">
                    <Link to='/help'><Button m={2}> Find Help</Button> </Link>
                    <Link exact to='/'><Button m={2}> Provide Help</Button ></Link>
                    <Link to='/organization'><Button m={2}>  Organizations</Button></Link>
                    <Button m={2} onClick={() => { setauth(!auth) }} colorScheme="green"> Test Auths</Button>
                </Flex>

                <Flex flex="1" flexDir="row-reverse">
                    {auth &&
                        <>
                            <Link to='/register'><Button m={2}>Register</Button> </Link>
                            <Link to='/login'><Button m={2}>Login</Button></Link>
                        </>
                    }
                    {!auth &&
                        <Button m={2}>Logout</Button >
                    }

                </Flex>

            </Flex>
        </>

    )
}
export default Navbar;
