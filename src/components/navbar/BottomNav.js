import React, { useState } from "react";
import { BiChat } from "react-icons/bi";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";
import { VscAccount, VscOrganization } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./index.css";

const NavItem = ({ Icon, index, activeIndex, handleIndexCallback, to, text }) => {
  return (
    <Link className={index === activeIndex ? 'activeButton' : 'btn'} to={to} onClick={() => handleIndexCallback(index)}>
      <Icon color={activeIndex === index ? "#0078ff" : "#4f5662"} size={20} />
      {activeIndex === index && <p>{text}</p>}
    </Link>
  );
};

export default function BottomNav() {
  const items = [
    { icon: FaHandsHelping, index: 0, to:"/", text:"Get help" },
    { icon: FaHandHoldingHeart, index: 1, to:"/provide-help", text:"Give help" },
    { icon: VscOrganization, index: 2, to:"/organization", text:"Organizations"},
    { icon: BiChat, index: 3, to:"/", text:"Chat" },
    { icon: VscAccount, index: 4, to:"/", text:"Profile" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bottom-nav">
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
          />
        ))}
      </div>
    </div>
  );
}

{
  /* <div onClick={()=>handleNavIndex(0)}>
          <FaHandsHelping
            color={activeIndex === 0 ? "#0078ff" : "#4f5662"}
            size={24}
          />
        </div>
        <div onClick={()=>handleNavIndex(1)}>
          <FaHandHoldingHeart
            color={activeIndex === 1 ? "#0078ff" : "#4f5662"}
            size={24}
          />
        </div>
        <div onClick={()=>handleNavIndex(2)}>
          <VscOrganization
            color={activeIndex === 2 ? "#0078ff" : "#4f5662"}
            size={24}
          />
        </div>
        <div onClick={()=>handleNavIndex(3)}>
          <BiChat color={activeIndex === 3 ? "#0078ff" : "#4f5662"} size={24} />
        </div>
        <div onClick={()=>handleNavIndex(4)}>
          <VscAccount
            color={activeIndex === 4 ? "#0078ff" : "#4f5662"}
            size={24}
          />
        </div> */
}
