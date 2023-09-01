/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Router from './navigation/router';
import { ToastNotification } from './components/Toast';
import { useTranslation, } from 'react-i18next';
import { I18nManager, LogBox } from 'react-native';
import Loading from './components/Loading';
import './i18n/IMLocalize';

const App = () => {
  LogBox.ignoreAllLogs(true);
  change();
  return (
    <Provider store={store}>
      <ToastNotification>
        <Router />
        <Loading />
      </ToastNotification>
    </Provider>
  );
};

const change = () => {
  const { i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;

  if ((selectedLanguageCode === 'ar' || selectedLanguageCode === 'fa')) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    // NativeModules.DevSettings.reload();
  } else {
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false);
    // NativeModules.DevSettings.reload();
  }
}

export default App;
