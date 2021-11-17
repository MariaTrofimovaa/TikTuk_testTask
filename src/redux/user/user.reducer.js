import { createReducer } from "@reduxjs/toolkit";
import { getUserFeedSuccess, getUserInfoSuccess } from "./user.actions";


const userReducer = createReducer(
  [],
  {
    [getUserInfoSuccess]: (state, { payload }) => ({
      ...state,
      userInfo: payload,
    }),
    [getUserFeedSuccess]: (state, { payload }) => ({
      ...state,
      userFeed: payload,
    }),
  }
);


export default userReducer;
