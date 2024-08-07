import React, { useState } from "react";
import styles from "./NewsPost.module.css";
import { postdata } from "./NewsPosts";
import CloseIcon from "@mui/icons-material/Close";

export default function NewsPost() {
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [newPostText, setNewPostText] = useState("");
  const [posts, setPosts] = useState(postdata);

  const handleFollowToggle = () => {
    setIsFollowing((prevState) => !prevState);
  };
  const handlePostClick = (e) => {
    e.stopPropagation();
    setIsCreatingPost(true);

  };
  const handlePostClose = () => {
    setIsCreatingPost(false);
  };
  const handleEmojiClick = () => {
    setIsEmojiPickerVisible(!isEmojiPickerVisible);
  };

  const handleEmojiSelection = (emoji) => {
    setNewPostText((prevText) => prevText + emoji);
  };

  const handlePostCreation = () => {
    if (newPostText.trim() !== "") {
      const newPost = {
        userProfile: {
          userImage: "URL_TO_USER_IMAGE",
          alt: "User Alt",
          userName: "New User",
        },
        userPost: {
          discription: newPostText,
          postImage: "URL_TO_POST_IMAGE",
          alt: "Post Alt",
        },
      };

      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setNewPostText("");
      setIsCreatingPost(false);
    }
  };
  return (
    <>
    <div className={styles.post}>
      <div className={styles.newPost}>
      </div>
     
      {postdata.map((data, idx) => (
        <div className={styles.userpost} key={idx}>
          
          <h2>{data.userPost.heading}</h2>
          <div className={styles.userProfile}>
          <hr />
            <div>
              
              <span className={styles.usern}>{data.userProfile.userName}</span>
            </div>
            
          </div>
          <div className={styles.userpostdata}>
            <p className={styles.discription}>{data.userPost.discription}</p>
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJhbmNoaXNlJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"/>
            {/* <video loop autoPlay="true" muted
              src={postdata.userPost.postImage}
              alt={data.userPost.alt}
              className={styles.pstimg}
            /> */}

          </div>
        </div>
      ))}
      </div>
      {isCreatingPost && (
        <div className={styles.popup}>
          <div className={styles.popHeader}>
            <h3 className={styles.poptitle}>Create Post</h3>
            <button onClick={handlePostClose}>
              <CloseIcon />
            </button>
          </div>
          <textarea
            placeholder="What's going on!"
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
          <hr />
          <div className={styles.emojis}>
            <i className="fa-regular fa-image"></i>
            <i className="fa-regular fa-face-smile" onClick={handleEmojiClick}></i>
            <i className="fa-regular fa-calendar-days"></i>
            <button className={styles.Postbtn} onClick={handlePostCreation}>Post</button>
          </div>
          <br />
          <br />
          <hr />
        </div>
      )}

    </>
  );
}