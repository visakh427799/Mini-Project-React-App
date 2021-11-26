import React from "react";
import "./Header.css";
import LeftBar from "../LeftBar/LeftBar";
import Post from "../Posts/Post";
function Header({user}) {
  return (
    <div>
      <div className="nav">
        <h3 className="icn-1">
          <div className="logo">in</div>
        </h3>
        <input type="text" placeholder="    Search" className="icn-2" />
        <div className="icn-3">
          <i className="material-icons">home</i>
          <span style={{ color: "red" }}></span>
        </div>
        <div className="icn-3">
          <i className="material-icons">group_add</i>
        </div>
        <div className="icn-3">
          <i className="material-icons">work</i>
        </div>
        <div className="icn-3">
          <i className="material-icons">chat</i>
        </div>
        <div className="icn-3">
          <i className="material-icons">notifications</i>
        </div>
        <div className="icn-3">
          <i className="material-icons">account_circle</i>
        </div>
        <div className="icn-3">
          <i className="material-icons">widgets</i>
        </div>
      </div>
      <div className="content">
        <LeftBar user={user} />
        <Post />
      </div>
    </div>
  );
}

export default Header;
