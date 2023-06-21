import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import "./post.scss";
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    return ( 
        <div className="post">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                            <span>{post.name}</span>
                        </Link>
                    </div>
                </div>
                <MoreVertOutlinedIcon />
            </div>
            <div className="content"></div>
            <div className="info"></div>
        </div>
     );
}
 
export default Post;