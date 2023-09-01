import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useAppDispatch, useAppSelector } from 'src/hooks/ToolkitHooks';
import colors from 'src/theme/colors';
import fonts from 'src/theme/fonts';
import metrics from 'src/theme/metrics';
import eventEmitter from 'src/utils/emitter';
import { setLoadingAction } from 'src/store/system/action';
import { useToast } from "react-native-toast-notifications";
import { useIsFocused } from '@react-navigation/native';
import { setLoading } from 'src/store/system/reducers';
import { sleep } from 'src/utils/helper';

const Dashboard = ({ navigation }: any) => {
    const { t } = useTranslation();
    const isFocused = useIsFocused();
    const Toast = useToast();

    const loading = useAppSelector(state => state.system.loading);
    const dispatch = useAppDispatch();


    useEffect(() => {
        initPage();
    }, [])

    useEffect(() => {
        eventEmitter.on('recevied_messages', onReceviedMessage)

        return () => { eventEmitter.off('recevied_messages', onReceviedMessage); }
    }, [])

    const initPage = async () => {
        dispatch(setLoading(true))
        // OR
        // setLoadingAction(true);

        await sleep(2000) // 2 seconds

        setLoadingAction(false);

        //sample of call emmiter
        eventEmitter.emit('recevied_messages', 'متن تست');
    }

    const onReceviedMessage = async (msg: string) => {
        console.log(msg);

        Toast.show(
            msg,
            {
                type: "custom_toast",
                animationDuration: 100,
                data: {
                    //نمونه چند زبانه
                    title: t('dashboard:app_name'),
                    isImportant: true
                },
            }
        );
    };



    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', top: 0, width: '100%', height: '50%' }}>

                {/* 230 */}
                <Svg width="100%" height="100%" viewBox={`61 144 428 ${100 + metrics.screenHeight * 0.25 - fonts.size.font10 * 10}`}>
                    <Path d="M511,2140H939v244.627s-82.436,52.242-214,52.242-214-52.242-214-52.242Z" transform="translate(-450 -2000)" fill={colors.secondary} />
                </Svg>
            </View>
            <View style={{ flex: 1, flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={[styles.shadowProp, styles.statusBar]}>
                    <Text>متن تست</Text>
                    <FontAwesomeIcon icon={faComputer} color={colors.secondary} size={fonts.size.font28} />
                </View>
            </View>
            <View style={{ flex: 0.2 }} />
            <View style={{ flex: 2, flexDirection: 'column' }}>

                <View style={styles.sample}>
                    <Text>متن تست ۲</Text>
                </View>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    shadowProp: {
        shadowColor: colors.black,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 10
    },
    statusBar: {
        flexDirection: 'column',
        backgroundColor: colors.white,
        width: fonts.size.font34,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: fonts.size.font34 / 2,
        marginHorizontal: 20,
    },
    sample: {
        flex: 1,
        backgroundColor: colors.white,
        width: metrics.screenWidth * 0.8,
        alignSelf: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around'
    }
})

export default Dashboard;