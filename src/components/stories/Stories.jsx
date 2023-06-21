import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

import Pic1 from "../../assets/hamza.jpg";
import Pic2 from "../../assets/posts/banner-bg.jpg";
import Pic3 from "../../assets/posts/blog-1.jpg";
import Pic4 from "../../assets/posts/blog-2.jpg";
import Pic5 from "../../assets/posts/blog-3.jpg";
import Pic6 from "../../assets/posts/des-1.jpg";
import Pic7 from "../../assets/posts/des-2.jpg";
import Pic8 from "../../assets/posts/des-3.jpg";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Hamza Azam",
      img: "../../assets/hamza.jpg",
    },
    {
      id: 2,
      name: "Hamza Azam",
      img: "../../assets/posts/banner-bg.jpg",
    },
    {
      id: 3,
      name: "Hamza Azam",
      img: "../../assets/hamza.jpg",
    },
    {
      id: 4,
      name: "Hamza Azam",
      img: "../../assets/hamza.jpg",
    },
  ];

  return (
    // <div className="stories">
    //   <div className="story">
    //     <img src={currentUser.profilePic} alt="" />
    //     <span>{currentUser.name}</span>
    //     <button>+</button>
    //   </div>
    //   {stories.map((story) => (
    //     <div className="story" key={story.id}>
    //       <img src={story.img} alt="" />
    //       <span>{story.name}</span>
    //     </div>
    //   ))}
    // </div>

    <div className="stories">
      <div className="story">
        <img src={Pic1} alt="" />
        <span>Hamza Azam</span>
        <button>+</button>
      </div>
      <div className="story">
        <img src={Pic2} alt="" />
        <span>Tayyab</span>
      </div>
      <div className="story">
        <img src={Pic3} alt="" />
        <span>Habiba</span>
      </div>
      <div className="story">
        <img src={Pic4} alt="" />
        <span>Sana</span>
      </div>
    </div>
  );
};

export default Stories;
