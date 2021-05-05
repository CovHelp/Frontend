import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHandHoldingHeart } from "react-icons/all";
import { VscOrganization } from "react-icons/all";
import { FaHandsHelping } from "react-icons/all";
import "./index.css";

const Navbar = () => {
  const [auth, setauth] = useState(false);
  return (
    <div class="navbar">
      <Flex
        bg="whiteAlpha.200"
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
        p={4}
        color="black"
      >
        <Flex flex="1">
          <Avatar
            ml={2}
            name="Logo"
            src="https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg"
          />
        </Flex>
        <Flex justifyContent={"center"} flex="1">
          <Link to="/help">
            <Button m={2}>
              {" "}
              <FaHandsHelping />
              <Text ml={2}> </Text>Find Help
            </Button>{" "}
          </Link>
          <Link exact to="/">
            <Button m={2}>
              {" "}
              <FaHandHoldingHeart /> <Text ml={2}></Text>Provide Help
            </Button>
          </Link>
          <Link to="/organization">
            <Button m={2}>
              {" "}
              <VscOrganization />
              <Text ml={2}></Text> Organizations
            </Button>
          </Link>
          <Button
            m={2}
            onClick={() => {
              setauth(!auth);
            }}
            colorScheme="green"
          >
            {" "}
            Test Auths
          </Button>
        </Flex>

        <Flex flex="1" flexDir="row-reverse">
          {auth && (
            <>
              <Link to="/register">
                <Button m={2}>Register</Button>{" "}
              </Link>
              <Link to="/login">
                <Button m={2}>Login</Button>
              </Link>
            </>
          )}
          {!auth && <Button m={2}>Logout</Button>}
          <Link to="/new-post">
            <Button
              m={2}
              onClick={() => {
                setauth(!auth);
              }}
              colorScheme="green"
            >
              New Post
            </Button>
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};
export default Navbar;
