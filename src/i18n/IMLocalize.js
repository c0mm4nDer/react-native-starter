import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import 'intl-pluralrules'
import en from './translations/en';
import fa from './translations/fa';

const LANGUAGES = {
    fa,
    en,
};


const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: callback => {
        AsyncStorage.getItem('user-language', (err, language) => {
            // if error fetching stored data or no language was stored
            // display errors when in DEV mode as console statements
            if (err || !language) {
                if (err) {
                    console.error('Error fetching Languages from asyncstorage ', err);
                } else {
                    console.error('No language is set, choosing English as fallback');
                }
                const findBestAvailableLanguage =
                    RNLocalize.findBestLanguageTag(LANG_CODES);

                callback(findBestAvailableLanguage.languageTag || 'fa');
                //callback('fa');
                return;
            }
            callback(language);
        });
    },
    init: () => { },
    cacheUserLanguage: language => {
        AsyncStorage.setItem('user-language', language);
    }
};

i18n
    // detect language
    // .use(LANGUAGE_DETECTOR)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // set options
    .init({
        fallbackLng: 'fa',
        lng: 'fa', // default language
        resources: LANGUAGES,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        },
        defaultNS: 'common'
    });

export default i18n;