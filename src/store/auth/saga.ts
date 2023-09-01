import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { USER_REGISTER, LOGIN_SMS_DEVICE, LOGIN_USER, LOGOUT, SIGNUP_USER } from "../types";
import axios from '../../api/axios';
import { IPerson, logout, setPerson } from "./reducers";
import * as RootNavigation from '../../navigation/RootNavigation';
import { RootState } from "../store";

import { setLoading } from "../system/reducers";

import AsyncStorage from "@react-native-async-storage/async-storage";

//============================
//=====  Start Of Login  =====
//============================

const login = async ({ nationalId, password }: any) => {

    return (await axios.post('/login-person', { nationalId, password })).data;
}

export function* handleLogin(
    action: PayloadAction<any>
): any {
    try {
        yield put(setLoading(true));
        const res = (yield call(login, action.payload)) as IPerson;
        res.remember = action?.payload?.remember ? true : false;
        yield put(setPerson(res));
        if (action?.payload?.remember) {
            AsyncStorage.setItem('user', JSON.stringify(res))
        }
        yield put(setLoading(false));
        RootNavigation.replace('EmployeeHome', {});
    } catch (e) {
        // console.error(e);
    }
}

//============================
//===  logout user profile ===
//============================
export function* handleLogout(action: PayloadAction) {
    yield call(AsyncStorage.removeItem, 'user');
    yield put(logout())
    RootNavigation.replace('Login', {});
}

// const getUser = (state: RootState) => state.person.person;
// const user = (yield select(getUser)) as IPerson;


function* authSaga() {
    yield takeLatest(LOGIN_USER, handleLogin);
    yield takeLatest(LOGOUT, handleLogout);
}

export default authSaga;