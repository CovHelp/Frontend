import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
import './index.css'

function Filtersidebar({ visibility }) {

  return (
    <div className="sidenav-wrapper">
      <DesktopSidebar />
      <MobileSidebar isVisible={visibility} />
    </div>
  );
}

export default Filtersidebar;
