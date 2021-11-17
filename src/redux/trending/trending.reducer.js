import { createReducer } from "@reduxjs/toolkit";
import { getTrendingSuccess } from "./trending.actions";


const trendingReducer = createReducer([], {
    [getTrendingSuccess]: (_, { payload }) =>  payload,
  
});

export default trendingReducer;
