import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import axios from '../../api/axios';
import { APP_VERSION_UPDATE } from "../types";
import { IAppVersion, setAppVersion } from "./reducers";

const getAppVersion = async (version: number): Promise<IAppVersion> => {
    return (await axios.post('/get-software-update-info', { version })).data
}

export function* handleGetUpdate(action: PayloadAction<number>): any {
    try {
        const res: IAppVersion = yield call(getAppVersion, action.payload);;
        yield put(setAppVersion(res))
    } catch (e) {

    }
}

function* systemSaga() {
    yield takeLatest(APP_VERSION_UPDATE, handleGetUpdate);
}

export default systemSaga;