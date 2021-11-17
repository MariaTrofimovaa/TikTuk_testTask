import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok33.p.rapidapi.com/",

  withCredentials: true,
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": "98c48d70edmsh2b6af9661af19a5p11b7f7jsnbe8317f49551",
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



