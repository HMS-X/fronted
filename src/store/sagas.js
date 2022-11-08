import { all, fork } from "redux-saga/effects";

import PostSaga from "../redux-store/saga";

export default function* rootSaga() {
  yield all([fork(PostSaga)]);
}
