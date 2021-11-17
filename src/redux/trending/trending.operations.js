import { getTrendingFeed } from "../../services/api";
import {
  getTrendingError,
  getTrendingRequest,
  getTrendingSuccess,
} from "./trending.actions";

export const getTrendingOperation = () => (dispatch) => {
  dispatch(getTrendingRequest());

  getTrendingFeed()
    .then(({ data }) => {
      dispatch(getTrendingSuccess(data));
    })
    .catch((error) => {
      dispatch(getTrendingError(error.message));
    });
};
