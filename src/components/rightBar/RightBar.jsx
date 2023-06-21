import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCallOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHorizOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import Pic1 from "../../assets/posts/3.png";
import Pic2 from "../../assets/posts/banner-bg.jpg";
import Pic3 from "../../assets/posts/blog-1.jpg";
import Pic4 from "../../assets/posts/blog-2.jpg";
import Pic5 from "../../assets/posts/blog-3.jpg";
import Pic6 from "../../assets/posts/des-1.jpg";
import Pic7 from "../../assets/posts/des-2.jpg";
import Pic8 from "../../assets/posts/des-3.jpg";
import Pic9 from "../../assets/posts/gallery-img-1.jpg";
import Pic10 from "../../assets/posts/gallery-img-2.jpg";
import Pic11 from "../../assets/posts/gallery-img-3.jpg";
import Pic12 from "../../assets/posts/gallery-img-4.jpg";
import Pic13 from "../../assets/posts/gallery-img-5.jpg";
import Pic14 from "../../assets/posts/gallery-img-6.jpg";
import Pic15 from "../../assets/posts/gallery-img-7.jpg";
import Pic16 from "../../assets/posts/gallery-img-8.jpg";
import Pic17 from "../../assets/posts/gallery-img-9.jpg";

import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="ad">
          <div className="sponsor">
            <p>Sponsored</p>
            <span>Create Ad</span>
          </div>
          <div className="image">
            <img src={Pic1} alt="" />
          </div>
          <div className="imageDesc">
            <p>SolWhiz</p>
            <span>solwhiz.com</span>
          </div>
          <p>
            Your pathway to stunning and user-friendly website and make sure
            your users are finding it attractive
          </p>
        </div>
        <div className="item">
          <div className="itemHeading">
            <p>Friend Requests</p>
            <span>See all</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic2} alt="" />
              <span>Awais Qarni</span>
            </div>
            <div className="button">
              <button>Confirm</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic3} alt="" />
              <span>Shahzaib Khanzada</span>
            </div>
            <div className="button">
              <button>Confirm</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic4} alt="" />
              <span>Umm e Habiba</span>
            </div>
            <div className="button">
              <button>Confirm</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic5} alt="" />
              <span>Sana Javed</span>
            </div>
            <div className="button">
              <button>Confirm</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="itemHeading">
            <p>Suggestions</p>
            <span>See all</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic6} alt="" />
              <span>Tayyab</span>
            </div>
            <div className="button">
              <button>Add</button>
              <button>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic7} alt="" />
              <span>Maaz</span>
            </div>
            <div className="button">
              <button>Add</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="itemHeading">
            <p>Latest Activities</p>
            <span>See all</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic8} alt="" />
              <p>
                <span>Shan </span>
                changed their profile picture
              </p>
            </div>
            <span className="timeStamp">1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic3} alt="" />
              <p>
                <span>Babar </span>
                changed their profile picture
              </p>
            </div>
            <span className="timeStamp">1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic10} alt="" />
              <p>
                <span>Hassan </span>
                changed their profile picture
              </p>
            </div>
            <span className="timeStamp">1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic2} alt="" />
              <p>
                <span>Huzaifa </span>
                changed their profile picture
              </p>
            </div>
            <span className="timeStamp">1 min ago</span>
          </div>
        </div>
        <div className="item">
          <div className="itemHeading">
            <p>Online friends</p>
            <div className="icons">
              <VideoCallIcon className="icon" />
              <SearchIcon className="icon" />
              <MoreHorizIcon className="icon" />
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic4} alt="" />
              <div className="online"></div>
              <span>Anees </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic5} alt="" />
              <div className="online"></div>
              <span>Rizwan </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic6} alt="" />
              <div className="online"></div>
              <span>Cheema </span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic7} alt="" />
              <div className="online"></div>
              <span>Gujjar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Pic8} alt="" />
              <div className="online"></div>
              <span>Erdugan </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
