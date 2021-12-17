import React from "react";
import "./Newpost.css";
import axios from "axios";
import getApi from '../../../API';
const API=getApi();

function Newpost({post_id,user_id,user_pro_pic,user_name,caption,post_img,post_likes,post_comments,post_date}) {
  
 let lks=post_likes.length;
 let cmnts=post_comments.length;


   const addLike=(uid,p_id)=>{

     console.log(p_id)   
     let user_id=localStorage.getItem('user');
     
     axios.post(API+'/add-like',{uid,p_id}).then((res=>{

       if(res){
          console.log("liked")
       }
     }))
   }



  return (
    <div>
      <div className="each_post">
        <div className="div_1">
          <div className="pr-pic">
            <img src={user_pro_pic}></img>
          </div>
          <div className="name_follow">
            <p className="name">{user_name}</p>
            <p className="about">React js Developer</p>
            <p className="time">{post_date}</p>
          </div>
          <div className="follow_now">
            <p className="follow_text">+ Follow</p>
          </div>
        </div>
        <div className="div_2">
          <p className="title">
            {caption}{" "}
          </p>
        </div>
        <div className="div_3">
          <img src={post_img} />
        </div>
        <div className="div_4">
            <span className="likes_comments">{lks} Likes .  {cmnts} Comments</span>
            
        </div>
        <div className="div_5">
            <div className="div_like"> 
               <i className="material-icons " onClick={()=>{addLike(user_id,post_id)}} >favorite_border</i>
               {/* style={{color:'red'}} */}
               
               <span>Like</span>
               </div>
            <div className="div_comment">
                <i className="material-icons">comment</i> 
                <span>Comment</span>
                </div>
            <div className="div_share">
                <i className="material-icons">share</i>
                <span>Share</span>
                </div>
            <div className="div_send">
                <i className="material-icons">send</i>
                <span>Send</span>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Newpost;
