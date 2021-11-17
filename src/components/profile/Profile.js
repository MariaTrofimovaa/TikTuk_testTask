import React from "react";
import Loader from "../loader/Loader";
import shortid from "shortid";
import defaultAvatar from "../../images/avatar.png";

import styles from "./Profile.module.css";

const Profile = ({ userData, userFeed }) => {
  
  return (
    <div>
      {userData && (
        <div className={styles.profileContainer} key={shortid.generate()}>
          {userData.user.avatarThumb ? (
            <img
              key={shortid.generate()}
              width="150px"
              src={userData.user.avatarMedium}
              alt={userData.user.nickname}
              className={styles.avatar}
            />
          ) : (
            <img src={defaultAvatar} alt="Default avatar" />
          )}
          <div className={styles.userInfo}>
            <h2 className={styles.title}>{userData.user.nickname}</h2>
            <p className={styles.userSignature}>
              <span className={styles.signature}>
                {userData.user.signature}
              </span>
            </p>
            <div className={styles.detaisList}>
              <p className={styles.userDetails}>
                {" "}
                <span className={styles.detailTitle}>⬅️ followers: </span>
                <span className={styles.numbers}>
                  {userData.stats.followerCount}
                </span>
              </p>
              <p className={styles.userDetails}>
                {" "}
                <span className={styles.detailTitle}>➡️ followings: </span>
                <span className={styles.numbers}>
                  {userData.stats.followingCount}
                </span>
              </p>
              <p className={styles.userDetails}>
                <span className={styles.detailTitle}>🎥 videos: </span>
                <span className={styles.numbers}>
                  {userData.stats.videoCount}
                </span>
              </p>
              <p className={styles.userDetails}>
                <span className={styles.detailTitle}>❤️ hearts: </span>
                <span className={styles.numbers}>{userData.stats.heart}</span>
              </p>
            </div>
          </div>
        </div>
      )}
      <h2 className={styles.feedTitle}>
        Other posts created by {userData.user.nickname}
      </h2>

      <div className={styles.wrap} key={shortid.generate()}>
        {/* {userFeed ? (
          <div>
            <img src={defaultAvatar} alt="Video preview" />
            <p>Views: </p>
          </div>
        ) : ( */}
          <>
            <Loader />
            {/* <h2>User doesn't have any more posts</h2> */}
          </>
        {/* )} */}
      </div>

    </div>
  );
};

export default Profile;
