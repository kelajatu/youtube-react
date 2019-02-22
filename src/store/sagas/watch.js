import { fork, take, all, put, call } from "redux-saga/effects";
import * as watchActions from "../actions/watch";
import {
  buildVideoDetailRequest,
  buildRelatedVideosRequest,
  buildChannelRequest,
  buildCommentThreadRequest
} from "../api/youtube-api";
import { REQUEST } from "../actions";
import {
  SEARCH_LIST_RESPONSE,
  VIDEO_LIST_RESPONSE
} from "../api/youtube-api-response-types";

export function* fetchWatchDetails(videoId) {
  let requests = [
    buildVideoDetailRequest.bind(null, videoId),
    buildRelatedVideosRequest.bind(null, videoId)
  ];

  try {
    const responses = yield all(requests.map(fn => call(fn)));
    yield put(watchActions.details.success(responses));
  } catch (error) {
    yield put(watchActions.details.failure(error));
  }
}

export function* watchWatchDetails() {
  while (true) {
    const { videoId, channelId } = yield take(
      watchActions.WATCH_DETAILS[REQUEST]
    );
    yield fork(fetchWatchDetails, videoId, channelId);
  }
}
