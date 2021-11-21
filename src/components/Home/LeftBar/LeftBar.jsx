import axios from "axios";
import React from "react";
import "./LeftBar.css";
import getApi from '../../../API';
const API=getApi();

function LeftBar() {
  const [user,setUsr]=React.useState({})
  React.useEffect(()=>{
    let usr=localStorage.getItem('user');
    console.log(usr);
    if(usr){
     axios.post(API+'/getUser',{usr}).then((dat)=>{
        console.log(dat.data);
        setUsr(dat)
        
        
         
      }).catch(()=>{

      })
       
    }
  },[])
  return (
    <div className="LftBar">
      <div className="box">
        <div className="bar"></div>
        <div className="profile-pic">
          <img src="https://avatars.githubusercontent.com/u/60034460?v=4"></img>
        </div>
        <p className="user-name"></p>
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
