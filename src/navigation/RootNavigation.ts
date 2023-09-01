// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>()

export function navigate(name: any, params: any) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export function replace(name: any, params: any) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.replace(name, params));
    }
}

// add other navigation functions that you need and export them