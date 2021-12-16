import React from "react";
import "./Post.css";
import Newpost from "../Newpost/Newpost";
import posts from '../../utils/posts'
import axios from 'axios'
import Swal from 'sweetalert2'
import getApi from '../../../API';
const API=getApi();

let allPosts=posts();


function Post() {
  const [show, setShow] = React.useState(false);
  const [post,setPost]=React.useState({
     caption:"",
     img:"",
  })
  const[loader,setLoader]=React.useState(false)


const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  console.log(allPosts);


const newPost=()=>{
  
    
}
const handleChangepost=(e)=>{
  setPost({...post,[e.target.name]:e.target.value})
}
const handleSubmitpost =()=>{
  setLoader(true)
   console.log(post)
   let uid=localStorage.getItem('user');
   if(uid){
    axios.post(API+'/create-post',{uid,post}).then(()=>{
  
    }).catch(()=>{
 
    })
   }
   
}

  return (
    <div className="outer">
      <div className="posts">
        <div className="Post_header">
          <div className="Post_top">
            <div className="Post_profile_pic">
              <img src="https://avatars.githubusercontent.com/u/60034460?v=4"></img>
            </div>
            <div className="Post_start_post">
              <button onClick={handleShow}>Start a post</button>


              {
                show?<>

<div id="myModal" class="modal">


<div class="modal-content">
  <span class="close" onClick={handleClose}>&times;</span>
  <p>Create a post</p>

  <div className="p_row">
    <div className="p_1">
        
         <div className="p_img">
            <img src="https://avatars.githubusercontent.com/u/60034460?v=4"></img>

         </div> 
         {/* <h4>Visakh T.S</h4> */}
         
    </div>
    <div className="p_2">
      <textarea name="caption" onChange={handleChangepost} type="text" placeholder="What you want to tell about..?" className="input">

      </textarea>
      </div>
    {/* <div className="p_3"><a role="button" href="">Add hashtag</a></div> */}
    <div className="p_4">
       <div className="icns">
           <ul >
             <li> <i className="material-icons">insert_photo</i></li>

             <li> <i className="material-icons">ondemand_video</i>
              </li>
              <li> <i className="material-icons">ondemand_video</i>
              </li>
              <li> <i className="material-icons">ondemand_video</i>
              </li>
           
             
           </ul>
       </div>
       


    </div>
    <div className="post_btn">
         <a role="button" onClick={handleSubmitpost}>  POST </a>
       </div>
  </div>
  
</div>

</div>
                </>:""
              }

              
            </div>
          </div>
          <div className="Post_bottom">
            <div className="Post_item-1">
              <i className="material-icons">insert_photo</i>
              <span className="span1">photo</span>
            </div>
            <div className="Post_item-2">
              <i className="material-icons">ondemand_video</i>
              <span className="span2">video</span>
            </div>
            <div className="Post_item-3">
              <i className="material-icons">date_range</i>
              <span className="span3">event</span>
            </div>
            <div className="Post_item-4">
              <i className="material-icons">article</i>
              <span className="span4">article</span>
            </div>
          </div>
        </div>
      </div>
      <div className="all_posts">
        {allPosts.map((dat) => {
          let u_id = dat.user_id;
          let u_name = dat.user_name;
          let u_pro_pic = dat.user_pro_pic;
          let cap = dat.caption;
          let p_img = dat.post_img;
          let likes = dat.likes;
          let comments = dat.comments;
          let p_date = dat.post_date;
          return (
            <Newpost
              user_id={u_id}
              user_name={u_name}
              user_pro_pic={u_pro_pic}
              caption={cap}
              post_img={p_img}
              post_likes={likes}
              post_comments={comments}
              post_date={p_date}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Post;
