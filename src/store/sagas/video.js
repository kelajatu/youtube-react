import { all, call, put } from "redux-saga/effects";

export function* fetchEntity(request, entity, ...args) {
  try {
    const response = yield call(request);
    yield put(entity.success(response.result, ...args));
  } catch (error) {
    yield put(entity.failure(error, ...args));
  }
}
