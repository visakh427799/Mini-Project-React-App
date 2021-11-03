import React from "react";
import "./LeftBar.css";

function LeftBar() {
  return (
    <div className="LftBar">
      <div className="box">
        <div className="bar"></div>
        <div className="profile-pic">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQG1fW8-nk86gA/profile-displayphoto-shrink_100_100/0/1628783984676?e=1636588800&v=beta&t=rJm2x5hFLDnZLsnE6ZIlwAUX1jeQ64WtMwwdRBUVdzs"></img>
        </div>
        <p className="user-name">Visakh T.S</p>
        <p className="about">
          MERN Stack |AWS| DevOps Enthusiast| Node js | React js | Express js |
          Mongodb|Python|sql
        </p>
        <p className="pro-view">
          Who viewed your profile <span>598</span>
        </p>
        <p className="pro-view">
          Views of your post <span>598</span>
        </p>
      </div>
    </div>
  );
}

export default LeftBar;
