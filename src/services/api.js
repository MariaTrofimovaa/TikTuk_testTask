import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok33.p.rapidapi.com/",

  withCredentials: true,
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": "197e6787admsh024cf7883c37861p1ab9a8jsnf41b6aa83868",
  },
});

export const getTrendingFeed = () => {
  return instance
    .get(`trending/feed`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};

export const getUserInfo = (uniqueId) => {
  return instance
    .get(`user/info/${uniqueId}`)
    .then((res) => {
      
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};


export const getUserFeed = (uniqueId) => {
  return (
    instance
      .get(`/user/feed/${uniqueId}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      })
  );
};



