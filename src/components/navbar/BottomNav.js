import React, { useEffect } from "react";
import { BiChat } from "react-icons/bi";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";
import { VscAccount, VscOrganization } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.css";
import { useDispatch } from "react-redux";

const NavItem = ({ Icon, activeIndex, to, text }) => {
  return (
    <Link className={activeIndex ? "activeButton" : "btn"} to={to}>
      {activeIndex}
      <Icon color={activeIndex ? "#0078ff" : "#4f5662"} size={20} />
      {activeIndex && <p>{text}</p>}
    </Link>
  );
};

export default function BottomNav() {
  const userStore = useSelector((store) => store.userStore);
  const dispatch = useDispatch();
  const navState = useSelector((store) => store.navState);
  const location = useLocation();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const initNavStateHandler = async () => {
    await sleep(500);
    if (location.pathname === "/") {
      let navState = {
        getHelp: true,
        provideHelp: false,
        oganization: false,
        chat: false,
        profile: false,
      };

      dispatch({
        type: "UPDATE_NAV",
        payload: navState,
      });
    } else if (location.pathname === "/provide-help") {
      let navState = {
        getHelp: false,
        provideHelp: true,
        oganization: false,
        chat: false,
        profile: false,
      };

      dispatch({
        type: "UPDATE_NAV",
        payload: navState,
      });
    } else if (location.pathname === "/organization") {
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: true,
        chat: false,
        profile: false,
      };

      dispatch({
        type: "UPDATE_NAV",
        payload: navState,
      });
    } else if (location.pathname === "/chat") {
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: false,
        chat: true,
        profile: false,
      };

      dispatch({
        type: "UPDATE_NAV",
        payload: navState,
      });
    } else if (location.pathname === "/profile") {
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: false,
        chat: false,
        profile: true,
      };

      dispatch({
        type: "UPDATE_NAV",
        payload: navState,
      });
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      let navState = {
        getHelp: true,
        provideHelp: false,
        oganization: false,
        chat: false,
        profile: false,
      };

      dispatch({
        type: "UPDATE_NAV",
        payload: navState,
      });
    } else if (location.pathname === "/provide-help") {
      let navState = {
        getHelp: false,
        provideHelp: true,
        oganization: false,
        chat: false,
        profile: false,
      };

      dispatch({
        type: "UPDATE_NAV",
        payload: navState,
      });
    } else if (location.pathname === "/organization") {
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: true,
        chat: false,
        profile: false,
      };

      dispatch({
        type: "UPDATE_NAV",
        payload: navState,
      });
    } else if (location.pathname === "/chat") {
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: false,
        chat: true,
        profile: false,
      };

      dispatch({
        type: "UPDATE_NAV",
        payload: navState,
      });
    } else if (location.pathname === "/profile") {
      let navState = {
        getHelp: false,
        provideHelp: false,
        oganization: false,
        chat: false,
        profile: true,
      };

      dispatch({
        type: "UPDATE_NAV",
        payload: navState,
      });
    }
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    initNavStateHandler();
  }, []);

  const items = [
    {
      icon: FaHandsHelping,
      index: 0,
      to: "/",
      text: "Get help",
      activeValue: navState.getHelp,
    },
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
    {
      icon: BiChat,
      index: 3,
      to: "/chat",
      text: "Chat",
      activeValue: navState.chat,
    },
    {
      icon: VscAccount,
      index: 4,
      to: "/profile",
      text: "Profile",
      activeValue: navState.profile,
    },
  ];

  const unAuthItems = [
    {
      icon: FaHandsHelping,
      index: 0,
      to: "/",
      text: "Get help",
      activeValue: navState.getHelp,
    },
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

  function handleClick() {
    console.log("hi");
  }

  return (
    <div className="bottom-nav">
      {userStore.token ? (
        <div className="bottom-nav-grid">
          {items.map((item) => (
            <NavItem
              key={item.index}
              to={item.to}
              text={item.text}
              Icon={item.icon}
              activeIndex={item.activeValue}
              onClick={handleClick}
            />
          ))}
        </div>
      ) : (
        <div className="bottom-nav-grid-unAuth">
          {unAuthItems.map((item) => (
            <NavItem
              key={item.index}
              to={item.to}
              text={item.text}
              Icon={item.icon}
              activeIndex={item.activeValue}
              onClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
