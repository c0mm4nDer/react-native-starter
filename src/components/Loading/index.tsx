import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Animated, Easing } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { useAppSelector } from 'src/hooks/ToolkitHooks';
import colors from 'src/theme/colors';
import fonts from 'src/theme/fonts';
import { wp } from 'src/theme/metrics';
import themeStyles from 'src/theme/styles';

const Loading = () => {
    const loading = useAppSelector(state => state.system.loading)
    const { t } = useTranslation();
    const opacity = new Animated.Value(0);
    const [currentValue, setCurrentValue] = useState<number>(0);
    const start = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [-wp(10), -wp(2)]
    });

    const startAmin = () => {
        opacity.setValue(0);
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start(() => {
            // setCurrentValue(1);
            // opacity.setValue(1);
        });
    }

    const stopAmin = () => {
        opacity.setValue(1);
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start(() => {
            // opacity.setValue(0);
        });
    }

    useEffect(() => {
        // جهت عدم انجام انیمیشن در تعریف اولیه
        if (currentValue == 0) {
            setCurrentValue(1);
            return;
        }
        if (loading) { //&& currentValue == 0
            startAmin();
        } else { //if (currentValue == 1) 
            stopAmin();
        }
    }, [loading])

    return (
        <Animated.View
            style={{
                ...themeStyles.shadowProp,
                position: 'absolute',
                flexDirection: 'row',
                opacity: opacity,
                paddingHorizontal: wp(2),
                borderRadius: wp(2),
                // borderBottomEndRadius: wp(2),
                bottom: wp(20),
                start: start,
                height: wp(10)
            }}>
            <WaveIndicator style={{ flex: 0, }} count={5} color={colors.primary} />
            <Text style={{
                ...themeStyles.normalText,
                marginStart: wp(2),
                alignSelf: 'center',
                fontSize: fonts.size.font10,
                color: colors.primary
            }}>{t('common:waiting')}</Text>
        </Animated.View>
    )
};

export default Loading;