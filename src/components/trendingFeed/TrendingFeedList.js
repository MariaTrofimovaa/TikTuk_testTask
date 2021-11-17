import React from "react";
import { useSelector } from "react-redux";
import { getTrendingSelector } from "../../redux/trending/trending.selectors";

import styles from "./TrendingFeedList.module.css";
import TrendingListItem from "./trendingListItem/TrendingListItem";

const TrendingFeedList = () => {
  const trendings = useSelector(getTrendingSelector);

  return (
    <>
      <ul className={styles.trendingList}>
        {trendings.map((item) => (
          <TrendingListItem
            id
            key={item.id}
            video={item.videoUrl}
            text={item.text}
            avatar={item.authorMeta.avatar}
            name={item.authorMeta.name}
            nickName={item.authorMeta.nickName}
            hashTags={item.hashtags}
            comments={item.commentCount}
            likes={item.authorMeta.heart}
          />
        ))}
      </ul>
    </>
  );
};

export default TrendingFeedList;
