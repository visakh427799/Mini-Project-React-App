import React from 'react'
import './Post.css'
import Newpost from '../Newpost/Newpost'
function Post() {
    return (
<div className="outer">
        <div className="posts">
            <div className="Post_header">
                <div className="Post_top">
                    <div className="Post_profile_pic">
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQG1fW8-nk86gA/profile-displayphoto-shrink_100_100/0/1628783984676?e=1636588800&v=beta&t=rJm2x5hFLDnZLsnE6ZIlwAUX1jeQ64WtMwwdRBUVdzs"></img>
                    </div>
                    <div className="Post_start_post">
                        <button>Start a post</button>
                    </div>
                </div>
                <div className="Post_bottom">
                    <div className="Post_item-1">
                    <i className="material-icons" >insert_photo</i><span className="span1">photo</span>
                    </div>
                    <div className="Post_item-2">
                    <i className="material-icons" >ondemand_video</i><span className="span2">video</span>
                    </div>
                    <div className="Post_item-3">
                    <i className="material-icons" >date_range</i><span className="span3">event</span>
                    </div>
                    <div className="Post_item-4">
                    <i className="material-icons" >article</i><span className="span4">article</span>
                    </div>
                   
                </div>

            </div>
           
        </div>
        <div className="all_posts">
        <Newpost/>
        <Newpost/>
        <Newpost/>


            </div>
        </div>
    )
}

export default Post
