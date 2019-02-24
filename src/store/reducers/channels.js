import { VIDEO_DETAILS, WATCH_DETAILS } from "../actions/watch";
import { SUCCESS } from "../actions";
import { CHANNEL_LIST_RESPONSE } from "../api/youtube-api-response-types";

const initialState = {
  byId: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case WATCH_DETAILS[SUCCESS]:
      return reduceWatchDetails(action.response, state);
    default:
      return state;
  }
}
