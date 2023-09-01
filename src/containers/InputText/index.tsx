
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, StyleProp, ViewStyle, KeyboardTypeOptions } from 'react-native';
import PropTypes from 'prop-types'
import metrics from '../../theme/metrics';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    newStyles?: StyleProp<ViewStyle>;
    title: string;
    value: string;
    onChange: (e: string) => void;
    keyboardType?: KeyboardTypeOptions,
    error?: string,
    editable?: boolean
}

const index = ({ title, value, onChange, newStyles, keyboardType, error = '', editable = true }: IProps) => {
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        setHasError(error?.length > 0);
    }, [error])

    return (
        <View style={[styles.card, styles.shadowProp, , hasError ? { borderColor: colors.danger, borderWidth: 2 } : {}, newStyles]}>
            <View style={[styles.titleContainerStyle, hasError ? { backgroundColor: colors.danger } : {}]}>
                <Text style={[styles.titleStyle, hasError ? { backgroundColor: colors.danger } : {}]}>{title}</Text>
            </View>
            <TextInput editable={editable} keyboardType={keyboardType} value={value} onChangeText={onChange} style={[styles.inputStyle]} />
            {hasError && <View style={styles.titleErrorContainerStyle}>
                <FontAwesomeIcon style={{ marginRight: 5 }} color={colors.white} icon={faWarning} />
                <Text style={styles.titleErrorStyle}>{error}</Text>
            </View>}
        </View>
    )
}

index.prototype = {
    title: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    card: {
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: 'gray',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 20
    },
    inputStyle: {
        backgroundColor: colors.white,
        height: metrics.screenWidth * 0.1,
        color: colors.secondary,
        paddingVertical: 5,
        paddingHorizontal: 5,
        fontFamily: fonts.type.IRANSansXFaNumBold,
    },
    titleStyle: {
        fontFamily: fonts.type.IRANSansXFaNumBold,
        fontSize: fonts.size.font10,
        color: colors.white,
        backgroundColor: colors.secondary,
    },
    titleContainerStyle: {
        position: 'absolute',
        backgroundColor: colors.secondary,
        paddingHorizontal: 7,
        paddingVertical: 2,
        zIndex: 1,
        borderTopEndRadius: 13,
        borderTopStartRadius: 6,
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 13,
        start: 10,
        top: -13,
    },
    titleErrorContainerStyle: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.danger,
        paddingHorizontal: 7,
        paddingVertical: 2,
        zIndex: 1,
        height: 26,
        borderRadius: 13,
        // borderTopEndRadius: 13,
        // borderTopStartRadius: 6,
        // borderBottomEndRadius: 6,
        // borderBottomStartRadius: 13,
        end: 10,
        bottom: -13,
    },
    titleErrorStyle: {
        fontFamily: fonts.type.IRANSansXFaNumBold,
        fontSize: fonts.size.font10,
        color: colors.white,
        backgroundColor: colors.danger,
    },
});

export default index;