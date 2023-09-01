import { LOGIN_SMS_DEVICE, LOGIN_USER, LOGOUT, USER_REGISTER, SIGNUP_USER,} from '../types';
import store from '../store';

export const loginAction = (nationalId: string, password: string, remember?: boolean) => {
    return store.dispatch({
        type: LOGIN_USER,
        payload: { nationalId, password, remember }
    });
}

export const loginBySmsAction = (
    sim: string,
    devicePhone: string,
    userPhone:string,
    password: string,
    callback?: () => void,
    errorCallback?: () => void,
) => {
    return store.dispatch({
        type: LOGIN_SMS_DEVICE,
        payload: { sim,userPhone, devicePhone, password, callback, errorCallback }
    })
}

export const registerUserAction = (name: string, nationcode: string, userMobile: string, address: string, password: string, re_password: string) => {
    return store.dispatch({
        type: USER_REGISTER,
        payload: {
            name,
            nationcode,
            userMobile,
            address,
            password,
            re_password,
        }
    })
}


export const logoutAction = () => {
    return store.dispatch({
        type: LOGOUT
    })
}

export const signUpAction = (input: {
    name: string,
    surname: string,
    password: string,
    nationalId: string,
    phoneNumber: string,
    address: string,
    photoURL: string,
    callback?: () => void,
    errorCallback?: () => void,
}) => {
    return store.dispatch({
        type: SIGNUP_USER,
        payload: input
    })
}