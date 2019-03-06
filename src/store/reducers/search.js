import { SEARCH_FOR_VIDEOS } from "../actions/search";
import { SUCCESS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_FOR_VIDEOS[SUCCESS]:
      return reduceSearchForVideos(action.response, action.searchQuery);
    default:
      return state;
  }
}
