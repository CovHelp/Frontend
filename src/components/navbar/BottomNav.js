import React, { useState } from "react";
import { BiChat } from "react-icons/bi";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";
import { VscAccount, VscOrganization } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.css";

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
      <Icon color={activeIndex === index ? "#0078ff" : "#4f5662"} size={20} />
      {activeIndex === index && <p>{text}</p>}
    </Link>
  );
};

export default function BottomNav() {
  const userStore = useSelector((store) => store.userStore);

  const items = [
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
    { icon: BiChat, index: 3, to: "/chat", text: "Chat" },
    {
      icon: VscAccount,
      index: 4,
      to: "/profile",
      text: "Profile",
      onClick: { handleClick },
    },
  ];

  const unAuthItems = [
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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavIndex = (index) => {
    setActiveIndex(index);
  };

  function handleClick() {
    console.log("hi");
  }

  return (
    <div className="bottom-nav">
      {userStore.token ? (
        <div className="bottom-nav-grid">
          {items.map((item, index) => (
            <NavItem
              key={index}
              to={item.to}
              text={item.text}
              Icon={item.icon}
              index={item.index}
              activeIndex={activeIndex}
              handleIndexCallback={handleNavIndex}
              onClick={handleClick}
            />
          ))}
        </div>
      ) : (
        <div className="bottom-nav-grid-unAuth">
          {unAuthItems.map((item, index) => (
            <NavItem
              key={index}
              to={item.to}
              text={item.text}
              Icon={item.icon}
              index={item.index}
              activeIndex={activeIndex}
              handleIndexCallback={handleNavIndex}
              onClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
