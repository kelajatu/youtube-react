import apiReducer from "./api";
import { combineReducers } from "redux";
import videoReducer from "./videos";

export default combineReducers({
  api: apiReducer,
  videos: videoReducer
});
