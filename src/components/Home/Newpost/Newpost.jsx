import React from "react";
import "./Newpost.css";
function Newpost() {
  return (
    <div>
      <div className="each_post">
        <div className="div_1">
          <div className="pr-pic">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQGWplKH2yokIA/profile-displayphoto-shrink_200_200/0/1627312019874?e=1636588800&v=beta&t=CvA16l_eWwm9QQEPaxH4UftF2Tqk9EmFQ75ljLElDzs"></img>
          </div>
          <div className="name_follow">
            <p className="name">Ramjith</p>
            <p className="about">React js Developer</p>
            <p className="time">45m</p>
          </div>
          <div className="follow_now">
            <p className="follow_text">+ Follow</p>
          </div>
        </div>
        <div className="div_2">
          <p className="title">
            If you’re a talented professional or innovator in agritech,
            Australia is the best place to grow your business and career. Find
            out if you’re eligible for our fast track visa through our
            Expression of Interest for Individuals at{" "}
          </p>
        </div>
        <div className="div_3">
          <img src="https://media-exp1.licdn.com/dms/image/sync/D4E18AQHf4ngLnTMwlA/companyUpdate-article-image-shrink_627_1200/0/1630370564645?e=1634169600&v=beta&t=bvpPDL3aWjX8zMd_-LkSzys_6Wd5sp6Q8iIwy1hEJZA" />
        </div>
        <div className="div_4">
            <span className="likes_comments">50 Likes .  13 Comments</span>
            
        </div>
        <div className="div_5">
            <div className="div_like"> 
               <i className="material-icons">favorite_border</i>
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
