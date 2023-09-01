import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, ColorValue } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import metrics from '../../theme/metrics';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import themeStyles from '../../theme/styles';

interface IProps {
    styles: StyleProp<ViewStyle>;
    icon: any;
    fontSize?: number;
    buttonStyle?:  StyleProp<ViewStyle>;
    borderRadius?: number;
    color: ColorValue;
    onPress: () => void;
}

const ButtonImage = ({ styles, buttonStyle, icon, color, onPress, fontSize }: IProps) => {
    return (
        <View style={styles}>
            <TouchableOpacity
                onPress={onPress}
                style={[localStyles.buttonStyle, themeStyles.shadowProp, { borderColor: color, }, buttonStyle]}
            >
                <FontAwesomeIcon icon={icon} size={fontSize ?? fonts.size.font12} color={color as any} />
            </TouchableOpacity>
        </View>
    )
}

const localStyles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: colors.white,
        height: metrics.screenWidth * 0.12,
        // padding: 15,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontFamily: fonts.type.IRANSansXFaNumBold,
        fontSize: fonts.size.font12,
        color: colors.white,

        // backgroundColor: '#ff000000',
    }
})

ButtonImage.prototype = {
    title: PropTypes.string,
    color: PropTypes.any,
    newStyle: PropTypes.any,
    onPress: PropTypes.func
}

export default ButtonImage;