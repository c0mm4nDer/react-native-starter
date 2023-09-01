import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import systemSaga from "./system/saga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        systemSaga(),
    ]);
}