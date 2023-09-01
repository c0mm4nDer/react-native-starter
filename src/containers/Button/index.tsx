import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, ColorValue } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import metrics from '../../theme/metrics';

interface IProps {
    newStyles: StyleProp<ViewStyle>;
    buttonContainerStyles?: StyleProp<ViewStyle>;
    title: string;
    fontSize?: number;
    heightButton?: number;
    color: ColorValue;
    onPress: () => void;
}

const Button = ({ newStyles, title, color, onPress, buttonContainerStyles, fontSize, heightButton }: IProps) => {
    return (
        <View style={newStyles}>
            <TouchableOpacity
                onPress={onPress}
                style={[styles.buttonStyle, { backgroundColor: color, height: heightButton ? heightButton : styles.buttonStyle.height }, buttonContainerStyles]}
            >
                <Text style={[styles.titleStyle, { fontSize: fontSize }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: colors.secondary,
        height: metrics.screenWidth * 0.12,
        // padding: 15,

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

Button.prototype = {
    title: PropTypes.string,
    color: PropTypes.any,
    newStyle: PropTypes.any,
    onPress: PropTypes.func
}

export default Button;