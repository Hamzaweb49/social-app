import React, { useContext } from 'react'
import "./comments.scss"
import { AuthContext } from './../../context/authContext';

const Comments = () => {

    const {currentUser} = useContext(AuthContext);

    const comments = [
        {
            id: 1,
            name: "Hamza Azam",
            userId: 1,
            userImage: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "In love with nature",
            time: "1 min ago"
          },
          {
            id: 2,
            name: "Habiba",
            userId: 1,
            userImage: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "In love with nature",
            time: "15 min ago"
          },
          {
            id: 3,
            name: "Tayyab",
            userId: 1,
            userImage: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "In love with nature",
            time: "25 min ago"
          },
          {
            id: 4,
            name: "Sana",
            userId: 1,
            userImage: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "In love with nature",
            time: "30 min ago"
          },
    ]
    return ( 
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder='Write a comment' />
                <button>Send</button>
            </div>
            {comments.map((comment) => (
            <div className="comment">
                <img src={comment.userImage} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">{comment.time}</span>
        </div>
      ))}
        </div>
     );
}
 
export default Comments;