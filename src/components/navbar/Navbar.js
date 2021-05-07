import { Button } from "@chakra-ui/button";
import { Flex, Grid } from "@chakra-ui/layout";
import { Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FaHandHoldingHeart,
  FaHandsHelping,
  GiHamburgerMenu,
  ImCross,
  VscOrganization,
  VscAccount,
  BiChat,
} from "react-icons/all";

import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../../assets/images/logo192.png";
import "./index.css";
import { register } from "../../api/user";

import "./index.css";

const Navbar = ({ sideBarEvent }) => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const userStore = useSelector((store) => store.userStore);
  const [selectedMenu, setSelectedMenu] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidenavVIsible, setSideNavVisibility] = useState(false);

  const handleToggleSidebar = () => {
    setSideNavVisibility((v) => !v);
  };

  useEffect(() => {
    sideBarEvent(isSidenavVIsible);
  }, [isSidenavVIsible, setSideNavVisibility]);

  const handleLogin = async (res) => {
    try {
      const resp = await register(res.profileObj);
      dispatch({ type: "SAVE_USER", payload: resp });
      // window.location.reload()
    } catch (e) {}
  };

  const handleLogout = async (res) => {
    try {
      dispatch({
        type: "SAVE_USER",
        payload: {
          userStore: {
            user: {
              email: null,
              firstName: null,
              lastName: null,
              email: null,
              profile_pic: null,
            },
            token: null,
          },
        },
      });
      // window.location.reload()

    } catch (e) {}
  };

  const handleLoginFailure = (err) => {
    console.log(err);
  };

  const NavItem = ({
    Icon,
    index,
    activeIndex,
    handleIndexCallback,
    to,
    text,
  }) => {
    return (
      <Link
        className={index === activeIndex ? "activeButton" : "btn"}
        to={to}
        onClick={() => handleIndexCallback(index)}
      >
        <Icon color={activeIndex === index ? "#0078ff" : "#4f5662"} size={24} />
        {activeIndex === index && <p>{text}</p>}
        {activeIndex === index && <div className="activeIndicator" />}
      </Link>
    );
  };

  const authedLinks = [
    { icon: FaHandsHelping, index: 0, to: "/", text: "Get help" },
    {
      icon: FaHandHoldingHeart,
      index: 1,
      to: "/provide-help",
      text: "Give help",
    },
    {
      icon: VscOrganization,
      index: 2,
      to: "/organization",
      text: "Organizations",
    },
    { icon: BiChat, index: 3, to: "/", text: "Chat" },
    {
      icon: VscAccount,
      index: 4,
      to: "/profile",
      text: "Profile",
    },
  ];

  const unAuthedLinks = [
    { icon: FaHandsHelping, index: 0, to: "/", text: "Get help" },
    {
      icon: FaHandHoldingHeart,
      index: 1,
      to: "/provide-help",
      text: "Give help",
    },
    {
      icon: VscOrganization,
      index: 2,
      to: "/organization",
      text: "Organizations",
    },
  ];

  const handleNavIndex = (index) => {
    setActiveIndex(index);
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
          px={4}
          color="black"
        >
          <Flex flex="1">
            <img alt="logo" style={{ height: 60 }} src={Logo} />
          </Flex>
          <Flex h="100%" flex={["1", "2", "2"]} w="100%" maxW="680px">
            {!userStore.token ? (
              <Grid w="100%" templateColumns="repeat(3, 1fr)">
                {unAuthedLinks.map((item, index) => (
                  <NavItem
                    key={index}
                    to={item.to}
                    text={item.text}
                    Icon={item.icon}
                    index={item.index}
                    activeIndex={activeIndex}
                    handleIndexCallback={handleNavIndex}
                  />
                ))}
              </Grid>
            ) : (
              <Grid w="100%" templateColumns="repeat(5, 1fr)">
                {authedLinks.map((item, index) => (
                  <NavItem
                    key={index}
                    to={item.to}
                    text={item.text}
                    Icon={item.icon}
                    index={item.index}
                    activeIndex={activeIndex}
                    handleIndexCallback={handleNavIndex}
                  />
                ))}
              </Grid>
            )}
          </Flex>

          <Flex flex="1" flexDir="row-reverse">
            {!userStore.token && (
              <>
                <GoogleLogin
                  clientId="1027672846288-1cplsl3m6pl2p3ngjn1k1msqr07s4at7.apps.googleusercontent.com"
                  buttonText="Login"
                  render={(renderProps) => (
                    <Button
                      w={100}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login
                    </Button>
                  )}
                  uxMode="popup"
                  redirectUri="https://mechaadii.web.app"
                  onSuccess={handleLogin}
                  onFailure={handleLoginFailure}
                  cookiePolicy={"single_host_origin"}
                />
              </>
            )}
            {userStore.token && (
              <Button onClick={handleLogout} m={2}>
                Logout
              </Button>
            )}
          </Flex>
        </Flex>
      </div>
      <div className="navmobile">
        <div className="navmobile-row">
          <div className="navmobile-col-left">
            <div onClick={handleToggleSidebar}>
              {isSidenavVIsible ? (
                <ImCross color="#909fb8" stroke={0.5} size={16} />
              ) : (
                <GiHamburgerMenu color="#909fb8" stroke={1} size={20} />
              )}
            </div>
          </div>
          <div className="navmobile-col-center">
            <img
              // onClick={toggleColorMode}
              alt="logo"
              style={{ height: 50 }}
              src={Logo}
            />
          </div>
          <div className="navmobile-col-right">
            {userStore.token ? (
              <Button onClick={handleLogout}>LOGOUT</Button>
            ) : (
              <GoogleLogin
                clientId="1027672846288-1cplsl3m6pl2p3ngjn1k1msqr07s4at7.apps.googleusercontent.com"
                buttonText="Login"
                render={(renderProps) => (
                  <Button
                    w={100}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Login
                  </Button>
                )}
                uxMode="popup"
                redirectUri="https://mechaadii.web.app"
                onSuccess={handleLogin}
                onFailure={handleLoginFailure}
                cookiePolicy={"single_host_origin"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
