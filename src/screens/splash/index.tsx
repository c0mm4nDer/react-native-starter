import React, { useEffect, useState } from 'react';
import {
    Button,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import localStorage from '@react-native-async-storage/async-storage';
import fonts from 'src/theme/fonts';
import colors from 'src/theme/colors';
import metrics, { wp } from 'src/theme/metrics';
import { setPerson } from 'src/store/auth/reducers';
import { useAppDispatch } from 'src/hooks/ToolkitHooks';

import LogoSvg from 'src/assets/images/logo.svg';

const SplashScreen = ({ navigation }: any) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            checkLogin();
        }, 5000);
    }, []);

    const checkLogin = async () => {
        var user = await localStorage.getItem('user');
        if (user) {
            dispatch(setPerson(JSON.parse(user)));
            navigation.replace("EmployeeHome");
        } else {
            navigation.replace("Login");
        }
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Image source={logoImg} /> */}
                <LogoSvg
                    width="100"
                    height="50"
                />
                <Text style={styles.titleStyle}>{t('common:company')}</Text>
                <Text style={styles.subtitleStyle}>{t('common:slogan')}</Text>

                {/* <Button
                    title="Go to Login... again"
                    onPress={() => navigation.push('Login')}
                />
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => navigation.goBack()} /> */}
            </View>

            {/* <View style={{ flexDirection: 'column', marginBottom: 10, }}>
                <BarIndicator style={{ flex: 0, }} count={5} color={colors.primary} />
                <Text style={{ ...themeStyles.normalText, alignSelf: 'center', fontSize: fonts.size.font10, color: colors.primary }}>{t('common:waiting')}</Text>
            </View> */}
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.copyright}>{t('common:copyright1')}</Text>
                <Text style={[styles.copyright, { color: colors.primary }]}>{t('common:copyright2')}</Text>
                <Text style={styles.copyright}>{t('common:copyright3')}</Text>
            </View>
            {/* <Image style={{ width: metrics.screenWidth * 0.6, marginBottom: 20 }} resizeMode={'contain'} source={footerImg} /> */}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titleStyle: {
        fontFamily: fonts.type.BYekanBold,
        fontWeight: fonts.weight.normal as any,
        fontSize: fonts.size.font28,
        color: colors.primary
    },
    subtitleStyle: {
        fontFamily: fonts.type.IRANSansXFaNumBold,
        fontWeight: fonts.weight.normal as any,
        fontSize: fonts.size.font16,
        color: colors.primary
    },
    copyright: {
        fontFamily: fonts.type.IRANSansXFaNumBold,
        fontSize: fonts.size.font12,
        color: colors.secondary,
        alignSelf: 'center',
        marginVertical: wp(2),
    }
});

export { SplashScreen };
