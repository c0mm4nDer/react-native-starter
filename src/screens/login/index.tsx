import React, { useEffect, useRef, useState } from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import localStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import Button from '../../containers/Button';
import TextInput from '../../containers/InputText';
import metrics, { wp } from '../../theme/metrics';
import { loginAction } from '../../store/auth/action';
import { useAppDispatch, useAppSelector } from '../../hooks/ToolkitHooks';

const LoginScreen = ({ navigation }: any) => {
    const { t } = useTranslation();

    // const dispatch = useDispatch();

    const refModal = useRef<any>();
    const refSmsModal = useRef<any>();

    const [nationCode, setNationCode] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    // const dispatch = useAppDispatch();
    // const messages = useAppSelector((state) => state.messages.messages)
    // console.info({ messages })

    // useEffect(() => {
    //     getMessagesFromDBAction('09055792432');
    // }, []);

    const onSignIn = async () => {
        loginAction(nationCode, password, rememberMe)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps='handled'
        >
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />

                <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center', marginTop: metrics.screenHeight * 0.02 }}>
                    <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                        {/* <Image
                            tyle={{
                                width: metrics.screenWidth * 0.4,
                                height: metrics.screenWidth * 0.4
                            }}
                            resizeMode="contain" source={logoImg} /> */}
                        <Text style={styles.titleStyle}>{t('common:company')}</Text>
                        <Text style={styles.subtitleStyle}>{t('common:slogan')}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ width: metrics.screenWidth * 0.7, marginTop: 30, marginBottom: 10 }}>
                        <TextInput
                            title={t('dashboard:nationcode')}
                            onChange={(e) => setNationCode(e)}
                            value={nationCode}
                            keyboardType={'number-pad'}
                        />
                    </View>
                    <View style={{ width: metrics.screenWidth * 0.7 }}>
                        <TextInput
                            title={t('dashboard:password')}
                            onChange={(e) => setPassword(e)}
                            value={password}
                            keyboardType={'number-pad'}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', width: metrics.screenWidth * 0.7, }}>
                        <Button
                            title={t('buttons:signin')}
                            newStyles={{ flex: 1, marginLeft: 0, marginRight: 5, }}
                            color={colors.success}
                            onPress={() => { onSignIn() }}
                        />
                        <Button
                            title={t('buttons:sms')}
                            newStyles={{ flex: 1, marginLeft: 5, marginRight: 0, }}
                            color={colors.info}
                            onPress={async () => {
                                // addMessagesFromDBAction([{
                                //     data: 'hi',
                                //     message_id: '12',
                                //     receiver: '09372573489',
                                //     sender: '09034665213',
                                //     seen: 1,
                                //     type: 'wifi',
                                // }])
                                refSmsModal.current.show()
                                // dispatch(increment())

                                // dispatch(increment);
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', width: metrics.screenWidth * 0.7, }}>
                        <Button
                            title={t('buttons:signup')}
                            newStyles={{ flex: 1, marginTop: 10 }}
                            color={colors.secondary}
                            onPress={async () => {
                                refModal.current.show();
                            }}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.copyright}>{t('common:copyright1')}</Text>
                    <Text style={[styles.copyright, { color: colors.primary }]}>{t('common:copyright2')}</Text>
                    <Text style={styles.copyright}>{t('common:copyright3')}</Text>
                </View>
                {/* <Image style={{ width: metrics.screenWidth * 0.6 }} resizeMode="contain" source={footerImg} /> */}
            </SafeAreaView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    titleStyle: {
        fontFamily: fonts.type.BYekanBold,
        fontWeight: fonts.weight.normal as any,
        fontSize: fonts.size.font24,
        color: colors.primary,
        marginTop: -10,
    },
    subtitleStyle: {
        fontFamily: fonts.type.IRANSansXFaNumBold,
        fontWeight: fonts.weight.normal as any,
        fontSize: fonts.size.font14,
        color: colors.primary,
        marginTop: -7,
    },
    copyright: {
        fontFamily: fonts.type.IRANSansXFaNumBold,
        fontSize: fonts.size.font12,
        color: colors.secondary,
        alignSelf: 'center',
        marginVertical: wp(2),
    }
});

export { LoginScreen };
