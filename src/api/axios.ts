import axios from 'axios';
// import Toast from 'react-native-toast-message';
import _ from 'lodash'
import { ApiUrl } from "./config";
import { setLoadingAction } from "../store/system/action";
import store from '../store/store';
import i18n from '../i18n/IMLocalize';
import { useToast } from "react-native-toast-notifications";

// import { notification } from "../global/functions";

// axios.defaults.baseURL = process.env.REACT_APP_APP_URL;
// axios.defaults.headers = {
// "Content-Type": "application/json",
// Accept: "application/json",
// };

axios.defaults.baseURL = ApiUrl;
axios.defaults.timeout = 10000;

axios.defaults.headers.common['Accept'] = "application/json";
axios.defaults.headers.common['Content-Type'] = "application/json";

axios.interceptors.request.use(
    async function (request) {
        setLoadingAction(true);
        const objUser = store.getState().person.person;
        if (objUser?.token) {
            if (request !== undefined && request.headers !== undefined)
                request.headers.Authorization = objUser.token;
            // request.headers["X-ROLE"] = role;
        }
        return request;
    },
    function (error) {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    function (response) {
        setLoadingAction(false);
        return response;
    },

    function (error) {
        setLoadingAction(false);
        // در صورتی که کد خطا وجود داشته باشد
        // می توان از کد های زیر جهت ترجمه خطا استفاده کرد
        // if (!isNaN(Number(error?.response?.data?.data?.eCode))) {
        //     const toast = useToast();
        //     toast.show(
        //         i18n.t(`errors:${error?.response?.data?.data?.eCode}`),
        //         {
        //             type: "custom_toast",
        //             animationDuration: 100,
        //             data: {
        //                 //نمونه چند زبانه
        //                 title: i18n.t('dashboard:REST_ERROR_TITLE'),
        //                 isImportant: true
        //             },
        //         }
        //     );
        // } else {
        // Toast.show({
        //     type: 'error',
        //     text1: i18n.t('dashboard:REST_ERROR_TITLE'),// t('dashboard:REST_ERROR_TITLE'),
        //     text2: i18n.t('dashboard:REST_ERROR_MESSAGE'),
        // });
        // }

        const toast = useToast();
        toast.show(
            i18n.t('dashboard:REST_ERROR_MESSAGE'),
            {
                type: "custom_toast",
                animationDuration: 100,
                data: {
                    //نمونه چند زبانه
                    title: i18n.t('dashboard:REST_ERROR_TITLE'),
                    isImportant: true
                },
            }
        );

        return Promise.reject(error);
    }

);
export default axios;
