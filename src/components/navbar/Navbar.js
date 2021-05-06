import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Text, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaHandHoldingHeart,
  FaHandsHelping,
  VscOrganization,
} from "react-icons/all";
import { Link } from "react-router-dom";
import "./index.css";

import Logo from '../../assets/images/logo192.png'

const Navbar = () => {
  const [auth, setauth] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState();
  const { colorMode, toggleColorMode } = useColorMode();

  const NavbarButton = (props) => {
    return (
      <Link onClick={() => setSelectedMenu(props.number)} to={props.to}>
        <Button
          size="md"
          colorScheme={selectedMenu === props.number ? "messenger" : "gray"}
          m={2}
          h={"4rem"}
          w={"8rem"}
          _hover={{ bg: "#2d88ff" }}
        >
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            m={2}
          >
            <props.icon size={"1.5rem"} />
            <Text>{props.name}</Text>
          </Flex>
        </Button>
      </Link>
    );
  };

  return (
    <div className="navbar">
      <Flex
        h="88"
        bg="whiteAlpha.800"
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
        p={4}
        color="black"
      >
        <Flex flex="1">
          <img
            onClick={toggleColorMode}
            alt="logo"
            style={{height: 60}}
            src={Logo}
          />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          flex={["1", "2", "2"]}
          w={["100%"]}
          maxW="700px"
        >
          <NavbarButton
            icon={FaHandsHelping}
            number="0"
            name="Find Help"
            to="/help"
          />
          <NavbarButton
            icon={FaHandHoldingHeart}
            number="1"
            name="Provide Help"
            to="/provide-help"
          />
          <NavbarButton
            icon={VscOrganization}
            number="2"
            name="Organizations"
            to="/organization"
          />

          {/* <Button
            m={2}
            onClick={() => {
              setauth(!auth);
            }}
            colorScheme="green"
          >
            
            Test Auths

          </Button> */}
        </Flex>

        <Flex flex="1" flexDir="row-reverse">
          {auth && (
            <>
              <Link to="/register">
                <Button m={2}>Register</Button>
              </Link>
              <Link to="/login">
                <Button m={2}>Login</Button>
              </Link>
            </>
          )}
          {!auth && <Button m={2}>Logout</Button>}
          {/* <Link to="/new-post">
            <Button
              m={2}
              onClick={() => {
                setauth(!auth);
              }}
              colorScheme="green"
            >
              New Post
            </Button>
          </Link> */}
        </Flex>
      </Flex>
    </div>
  );
};
export default Navbar;
