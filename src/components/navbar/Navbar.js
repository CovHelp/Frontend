import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FaHandHoldingHeart,
  FaHandsHelping,
  GiHamburgerMenu,
  ImCross,
  VscOrganization
} from "react-icons/all";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo192.png";
import "./index.css";


const Navbar = ({sideBarEvent}) => {
  const [auth, setauth] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState();
  const { colorMode, toggleColorMode } = useColorMode();

  const [isSidenavVIsible, setSideNavVisibility] = useState(false);


  const handleToggleSidebar = () => {
    setSideNavVisibility((v) => !v);
  }

  useEffect(() => {
    sideBarEvent(isSidenavVIsible);
  }, [isSidenavVIsible, setSideNavVisibility])

  const NavbarButton = (props) => {
    return (
      <Link onClick={() => setSelectedMenu(props.number)} to={props.to}>
        <Button
          size="md"
          colorScheme={selectedMenu === props.number ? "messenger" : "gray"}
          m={2}
          h={"4rem"}
          w={"8rem"}
          _hover={{ bg: "#2d88ff", color: 'white' }}
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
    <div className="navwrapper">
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
              style={{ height: 60 }}
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
              to="/"
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
      <div className="navmobile">
        <div className="navmobile-row">
          <div className="navmobile-col-left">
            <div
              onClick={handleToggleSidebar}
            >
              {isSidenavVIsible ? (
                <ImCross color="#909fb8" stroke={0.5} size={16}/>
              ) : (
                <GiHamburgerMenu color="#909fb8" stroke={1} size={20} />
              )}
            </div>
          </div>
          <div className="navmobile-col-center">
            <img
              onClick={toggleColorMode}
              alt="logo"
              style={{ height: 50 }}
              src={Logo}
            />
          </div>
          <div className="navmobile-col-right"></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
