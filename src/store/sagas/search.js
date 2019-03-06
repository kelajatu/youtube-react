import * as searchActions from "../actions/search";
import { REQUEST } from "../actions";
import { fork, take } from "redux-saga/effects";

export function* watchSearchForVideos() {
  while (true) {
    const { searchQuery, amount, nextPageToken } = yield take(
      searchActions.SEARCH_FOR_VIDEOS[REQUEST]
    );
    yield fork(searchForVideos, searchQuery, nextPageToken, amount);
  }
}
