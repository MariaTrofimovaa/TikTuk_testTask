import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TrendingFeedList from "../../components/trendingFeed/TrendingFeedList";
import { getTrendingOperation } from "../../redux/trending/trending.operations";

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingOperation());
  }, [dispatch]);

  return <TrendingFeedList />;
};

export default NewsPage;
