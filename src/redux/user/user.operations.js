import { getUserFeed, getUserInfo } from "../../services/api";
import {
  getUserFeedError,
  getUserFeedRequest,
  getUserFeedSuccess,
  getUserInfoError,
  getUserInfoRequest,
  getUserInfoSuccess,
} from "./user.actions";

export const getUserInfoOperation = (uniqueId) => (dispatch) => {
  dispatch(getUserInfoRequest());

  getUserInfo(uniqueId)
    .then(function (data) {
      dispatch(getUserInfoSuccess(data));
    })
    .catch((error) => {
      dispatch(getUserInfoError(error.message));
    });
};

export const getUserFeedOperation = () => (dispatch) => {
  dispatch(getUserFeedRequest());

  getUserFeed()
    .then(function (data) {
      dispatch(getUserFeedSuccess(data));
    })
    .catch((error) => {
      dispatch(getUserFeedError(error.message));
    });
};
