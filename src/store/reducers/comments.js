import { SUCCESS } from "../actions";
import { WATCH_DETAILS } from "../actions/watch";

const initialState = {
  byVideo: {},
  byId: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case WATCH_DETAILS[SUCCESS]:
      return reduceWatchDetails(action.response, action.videoId, state);
    default:
      return state;
  }
}
