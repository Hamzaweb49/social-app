import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./posts.scss";
import Post from "../post/Post";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Comments from "../comments/Comments";

const Posts = () => {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;
  const posts = [
    {
      id: 2,
      name: "Mubashir",
      userId: 1,
      userImage:
        "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      desc: "In love with nature",
      img: "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      time: "5 mins ago",
    },
  ];

  //  const handleDelete = post => {
  //     const movies = posts.filter(p => p.id !== post.id);
  //   };

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="container">
            <div className="user">
              <div className="userInfo">
                <img src={post.userImage} alt="" />
                <div className="details">
                  <Link
                    to={`/profile/${post.userId}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span className="name">{post.name}</span>
                  </Link>
                  <span className="date">{post.time}</span>
                </div>
              </div>
              <div className="icons">
                <ClearOutlinedIcon />
                <MoreVertOutlinedIcon />
              </div>
            </div>
            <div className="content">
              <p>{post.desc}</p>
              <img src={post.img} alt="" />
            </div>
            <div className="info">
              <div className="item">
                {liked ? (
                  <FavoriteOutlinedIcon />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
                12 likes
              </div>
              <div className="item">
                <TextsmsOutlinedIcon
                  onClick={() => setCommentOpen(!commentOpen)}
                />
                12 Comments
              </div>
              <div className="item">
                <ShareOutlinedIcon />
                Share
              </div>
            </div>
            {commentOpen && <Comments />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
