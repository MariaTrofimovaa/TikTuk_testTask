import { createAction } from "@reduxjs/toolkit";

const getUserFeedRequest = createAction("users/UserFeedRequest");
const getUserFeedSuccess = createAction("users/UserFeedSuccess");
const getUserFeedError = createAction("users/UserFeedError");

const getUserInfoRequest = createAction("users/UserInfoRequest");
const getUserInfoSuccess = createAction("users/UserInfoSuccess");
const getUserInfoError = createAction("users/UserInfoError");

export {
  getUserFeedRequest,
  getUserFeedSuccess,
  getUserFeedError,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
};
