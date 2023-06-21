import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Hamza from "../../assets/hamza.jpg";
import "./navBar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>ConnectVerse</span>
        </Link>
        <Link to="/">
          <HomeOutlinedIcon
            className="navbarIcon"
            style={{ textDecoration: "none" }}
          />
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon className="navbarIcon" onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon className="navbarIcon" onClick={toggle} />
        )}
        <GridViewOutlinedIcon className="navbarIcon" />
        <div className="search">
          <SearchOutlinedIcon className="navbarIcon" />
          <input type="text" placeholder="Search Here" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon className="navbarIcon" />
        <EmailOutlinedIcon className="navbarIcon" />
        <NotificationsOutlinedIcon className="navbarIcon" />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
