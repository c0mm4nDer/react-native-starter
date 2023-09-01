import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// برای استفاده از تب باید 
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../screens/login';
import { SplashScreen } from '../screens/splash';
import Dashboard from '../screens/Customers/Dashboard';

import { faDashboard, faGear, faHeadset, faNetworkWired, faToggleOff, faUser } from '@fortawesome/free-solid-svg-icons';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

import { useTranslation } from 'react-i18next';
import { navigationRef } from './RootNavigation';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// برای استفاده از تب 
// const Tab = createBottomTabNavigator();


const commonOptions = {
    headerShown: true,
    headerStyle: {
        backgroundColor: colors.secondary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        // fontWeight: 'bold',
        fontFamily: fonts.type.IRANSansXFaNumBold,
        fontSize: fonts.size.font12
    },
}

// برای ایجاد مسیر های تو در تو
// const CustomerHome = () => {
//     const { t } = useTranslation();

//     return (
//         // نمونه استفاده از تب
//         // <Tab.Navigator
//         //     screenOptions={{
//         //         headerShown: true,
//         //         headerStyle: {
//         //             backgroundColor: colors.secondary,
//         //         },
//         //         headerTintColor: '#fff',
//         //         headerTitleStyle: {
//         //             // fontWeight: 'bold',
//         //             fontFamily: fonts.type.IRANSansXFaNumBold,
//         //             fontSize: fonts.size.font12
//         //         },
//         //     }}
//         //     tabBar={props => <NavBar isShowMinimal={true} {...props} />}
//         // >
//         //     <Tab.Screen
//         //         name="Dashboard"
//         //         options={{
//         //             tabBarIcon: (tabInfo) => { return faDashboard },
//         //             tabBarLabel: t('navigate:dashboard'),
//         //             title: t('navigate:dashboard'),
//         //             headerShown: false
//         //             // headerTitle: () => null,
//         //         }}

//         //         initialParams={{ statusBarColor: colors.secondary, barStyle: 'light-content' }}
//         //         component={Dashboard}
//         //     />

//         // </Tab.Navigator>


//         // نمونه استفاده از منوی کشویی
//         // <Drawer.Navigator>
//         //     <Drawer.Screen name="Home" component={Dashboard} />
//         // </Drawer.Navigator>
//     );
// };



const Router = () => {
    const { t } = useTranslation();
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, headerBackTitle: '' }}>
                {/* <Stack.Screen name="TestScreen" component={TestScreen} options={{ title: 'splash' }} /> */}
                {/* شرط ورود نیاز است */}
                <Stack.Group>
                    <Stack.Screen name="Splash" component={SplashScreen} options={{ title: 'splash' }} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'login' }} />
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen
                        name="Dasboard"
                        component={Dashboard}
                        options={{ headerShown: false }}
                    />
                </Stack.Group>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;