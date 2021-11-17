import { combineReducers } from "redux";
import trendingReducer from "./trending/trending.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  trending: trendingReducer,
  users: userReducer,
});

export default rootReducer;
