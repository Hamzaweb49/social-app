import React from "react";
import "./profile.scss";
import {
  FacebookTwoTone,
  LinkedIn,
  Instagram,
  Pinterest,
  Twitter,
  Place,
  Language,
  EmailOutlined,
  MoreVert,
  Email,
} from "@mui/icons-material";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/share";


const Profile = () => {
  return <div className="profile">
    <div className="images">
      <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="cover" />
      <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="profilePic" />
    </div>
    <div className="profileContainer">
      <div className="uInfo">
        <div className="left">
          <a href="https://facebook.com">
            <FacebookTwoTone className="socialIcon" />
          </a>
          <a href="https://linkedin.com">
            <LinkedIn className="socialIcon" />
          </a>
          <a href="https://instagram.com">
            <Instagram className="socialIcon" />
          </a>
          <a href="https://twitter.com">
            <Twitter className="socialIcon" />
          </a>
          <a href="https://pinterest.com">
            <Pinterest className="socialIcon" />
          </a>
        </div>
        <div className="center">
          <span>Hamza Azam</span>
          <div className="info">
            <div className="item">
              <Place />
              <span>Pakistan</span>
            </div>
            <div className="item">
              <Language />
              <span>solwhiz.com</span>
            </div>
          </div>
          <button>Follow</button>
        </div>
        <div className="right">
          <EmailOutlined />
          <MoreVert />
        </div>
      </div>
      <Share />
      <Posts />
    </div>
  </div>;
};

export default Profile;
