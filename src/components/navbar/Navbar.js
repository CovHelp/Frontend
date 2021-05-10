import { Button } from "@chakra-ui/button";
import { Flex, Grid } from "@chakra-ui/layout";
// import { Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import {
  AiOutlineInfoCircle, BiChat, FaHandHoldingHeart,
  FaHandsHelping,
  GiHamburgerMenu,
  ImCross,

  IoLogOutOutline,

  VscAccount, VscOrganization
} from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { register } from "../../api/user";
import Logo from "../../assets/images/logo192.png";
import "./index.css";




const Navbar = ({ sideBarEvent }) => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const userStore = useSelector((store) => store.userStore);
  const navState = useSelector((store) => store.navState);

  // const [selectedMenu, setSelectedMenu] = useState();
  // const [activeIndex, setActiveIndex] = useState(0);
  const [isSidenavVIsible, setSideNavVisibility] = useState(false);

  const location = useLocation();

  useEffect(() => {
//     console.log(location.pathname);
    if(location.pathname === '/'){
      let navState = {
        getHelp: true,
        provideHelp: false,
        oganization: false,
        chat: false,
        profile: false,
      }

      dispatch({
        type: 'UPDATE_NAV',
        payload: navState
      })
    } else if(location.pathname === '/provide-help'){
      let navState = {
        getHelp: false,
        provideHelp: true,
        oganization: false,
        chat: false,
        profile: false,
      }

      dispatch({
        type: 'UPDATE_NAV',
        payload: navState
      })
    } else if(location.pathname === '/organization'){
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: true,
        chat: false,
        profile: false,
      }

      dispatch({
        type: 'UPDATE_NAV',
        payload: navState
      })
    }else if(location.pathname === '/chat'){
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: false,
        chat: true,
        profile: false,
      }

      dispatch({
        type: 'UPDATE_NAV',
        payload: navState
      })
    } else if(location.pathname === '/profile'){
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: false,
        chat: false,
        profile: true,
      }

      dispatch({
        type: 'UPDATE_NAV',
        payload: navState
      })
    }
    // eslint-disable-next-line
  }, [location, dispatch])


  useEffect(() => {
//     console.log(location.pathname);
    if(location.pathname === '/'){
      let navState = {
        getHelp: true,
        provideHelp: false,
        oganization: false,
        chat: false,
        profile: false,
      }

      dispatch({
        type: 'UPDATE_NAV',
        payload: navState
      })
    } else if(location.pathname === '/provide-help'){
      let navState = {
        getHelp: false,
        provideHelp: true,
        oganization: false,
        chat: false,
        profile: false,
      }

      dispatch({
        type: 'UPDATE_NAV',
        payload: navState
      })
    } else if(location.pathname === '/organization'){
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: true,
        chat: false,
        profile: false,
      }

      dispatch({
        type: 'UPDATE_NAV',
        payload: navState
      })
    }else if(location.pathname === '/chat'){
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: false,
        chat: true,
        profile: false,
      }

      dispatch({
        type: 'UPDATE_NAV',
        payload: navState
      })
    } else if(location.pathname === '/profile'){
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: false,
        chat: false,
        profile: true,
      }

      dispatch({
        type: 'UPDATE_NAV',
        payload: navState
      })
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
//     console.log(navState)
  }, [navState])

  const handleToggleSidebar = () => {
    setSideNavVisibility((v) => !v);
  };

  useEffect(() => {
    sideBarEvent(isSidenavVIsible);
    // eslint-disable-next-line
  }, [isSidenavVIsible, setSideNavVisibility]);

  const handleLogin = async (res) => {
    try {
      const resp = await register(res.profileObj);
      dispatch({ type: "SAVE_USER", payload: resp });
      // window.location.reload()
    } catch (e) { }
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
              // email: null,
              profile_pic: null,
            },
            token: null,
          },
        },
      });
      // window.location.reload()

    } catch (e) { }
  };

  const handleLoginFailure = (err) => {
    console.log(err);
  };

  const NavItem = ({
    Icon,
    activeIndex,
    to,
    text,
  }) => {
    return (
      <Link
        className={activeIndex ? "activeButton" : "btn"}
        to={to}
      >
        <Icon color={activeIndex ? "#0078ff" : "#4f5662"} size={24} />
        {activeIndex && <p>{text}</p>}
        {activeIndex && <div className="activeIndicator" />}
      </Link>
    );
  };

  const authedLinks = [
    { icon: FaHandsHelping, index: 0, to: "/", text: "Get help", activeValue: navState.getHelp },
    {
      icon: FaHandHoldingHeart,
      index: 1,
      to: "/provide-help",
      text: "Give help",
      activeValue: navState.provideHelp,
    },
    {
      icon: VscOrganization,
      index: 2,
      to: "/organization",
      text: "Organizations",
      activeValue: navState.oganization,
    },
    { icon: BiChat, index: 3, to: "/chat", text: "Chat", activeValue: navState.chat },
    {
      icon: VscAccount,
      index: 4,
      to: "/profile",
      text: "Profile",
      activeValue: navState.profile,
    },
  ];

  const unAuthedLinks = [
    { icon: FaHandsHelping, index: 0, to: "/", text: "Get help", activeValue: navState.getHelp },
    {
      icon: FaHandHoldingHeart,
      index: 1,
      to: "/provide-help",
      text: "Give help",
      activeValue: navState.provideHelp,
    },
    {
      icon: VscOrganization,
      index: 2,
      to: "/organization",
      text: "Organizations",
      activeValue: navState.organization,
    },
  ];

  return (
    <div className="navwrapper">
      <div className="navbar">
        <Flex
          h="60px"
          bg="whiteAlpha.800"
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w="100%"
          px={4}
          color="black"
        >
          <Flex flex="1">
            <img alt="logo" style={{ height: 50 }} src={Logo} />
          </Flex>
          <Flex h="100%" flex={["1", "2", "2"]} w="100%" maxW="680px">
            {!userStore.token ? (
              <Grid w="100%" templateColumns="repeat(3, 1fr)">
                {unAuthedLinks.map((item) => (
                  <NavItem
                    key={item.index}
                    to={item.to}
                    text={item.text}
                    Icon={item.icon}
                    activeIndex={item.activeValue}
                  />
                ))}
              </Grid>
            ) : (
              <Grid w="100%" templateColumns="repeat(5, 1fr)">
                {authedLinks.map((item) => (
                  <NavItem
                    key={item.index}
                    to={item.to}
                    text={item.text}
                    Icon={item.icon}
                    activeIndex={item.activeValue}
                  />
                ))}
              </Grid>
            )}
          </Flex>

          <Flex alignItems="center" flex="1" flexDir="row-reverse">
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
              <Button leftIcon={<IoLogOutOutline size="28px" />} onClick={handleLogout} m={["5", "2"]}>
                Logout
              </Button>
            )}
            <Link to="/about">
              <Button leftIcon={<AiOutlineInfoCircle size="25px" />} m={["5", "2"]} bg="whatsapp.500" color="white">
                About us
              </Button>
            </Link>
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
            <Link to="/about">
              <Button mr={1} bg="whatsapp.500" color="white" w={"50px"}>
                <AiOutlineInfoCircle size="20px" />
              </Button>
            </Link>
            {userStore.token ? (
              <Button onClick={handleLogout} w={"50px"}>
                <IoLogOutOutline size="25px" />
              </Button>
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
