import React from "react";
import "./TopBar.css";
function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">Alaadin</span>
        </div>
        <div className="topright">
          <div className="topbBarIconContainer">
            In
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
