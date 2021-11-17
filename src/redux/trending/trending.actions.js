import { createAction } from "@reduxjs/toolkit";

const getTrendingRequest = createAction("trendings/TrendingRequest");
const getTrendingSuccess = createAction("trendings/TrendingSuccess");
const getTrendingError = createAction("trendings/TrendingError");

export { getTrendingRequest, getTrendingSuccess, getTrendingError };
