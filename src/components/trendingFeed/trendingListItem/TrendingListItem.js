import React from "react";
import Loader from "../../loader/Loader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shortid from "shortid";
import defaultAvatar from "../../../images/avatar.png";
import { getTrendingSelector } from "../../../redux/trending/trending.selectors";

import styles from "./TrendingListItem.module.css";

const TrendingListItem = ({
  video,
  text,
  avatar,
  name,
  nickName,
  hashTags,
  comments,
  likes,
}) => {
  const tredingFeed = useSelector(getTrendingSelector);

  return (
    <>
      {tredingFeed.length ? (
        <li className={styles.card}>
          <video
            id="myVideo"
            width="350px"
            controls="controls"
            className={styles.video}
          >
            <source src={video} type="video/mp4;" />
          </video>
          <p className={styles.text}>{text}</p>
          <div className={styles.userInfoCard}>
            <div className={styles.userInfo}>
              {avatar ? (
                <img src={avatar} alt="User Avatar" className={styles.avatar} />
              ) : (
                <img
                  src={defaultAvatar}
                  alt="User Avatar"
                  className={styles.avatar}
                />
              )}

              <Link to={`/profile/${name}`}>
                <p className={styles.userName}>{nickName}</p>
              </Link>
            </div>

            <div className={styles.tags}>
              {hashTags &&
                hashTags.map((tag) => (
                  <p key={shortid.generate()}>#{tag.name}</p>
                ))}
            </div>

            <p className={styles.comments}>
              <span className={styles.commentsTitle}>Comments: </span>
              {comments}
            </p>
            <p className={styles.likes}>
              <span className={styles.likesTitle}>Likes: </span>
              {likes}
            </p>
          </div>
        </li>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TrendingListItem;
