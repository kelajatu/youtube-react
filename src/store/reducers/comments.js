import { SUCCESS } from "../actions";
import { WATCH_DETAILS } from "../actions/watch";
import { COMMENT_THREAD_LIST_RESPONSE } from "../api/youtube-api-response-types";

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

function reduceWatchDetails(responses, videoId, prevState) {
  const commentThreadResponse = responses.find(
    res => res.result.kind === COMMENT_THREAD_LIST_RESPONSE
  );
  return reduceCommentThread(commentThreadResponse.result, videoId, prevState);
}
