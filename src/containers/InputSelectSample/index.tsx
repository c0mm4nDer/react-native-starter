import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import Button from '../../containers/Button';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import metrics, { wp } from '../../theme/metrics';
import InputDatePicker from '../../containers/InputDatePicker';
import BottomSheet from '../../containers/BottomSheet';
import InputTimePicker from '../../containers/InputTimePicker';
import SelectDropdown from 'react-native-select-dropdown'
import themeStyles from '../../theme/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    onSelect?: (item: { key: any, value: string }) => void;
    title: string;
    values: { key: string, value: string }[]
    selectContainerStyle?: StyleProp<ViewStyle>;
    defaultIndex?: number
}

const InputSelectSample = ({ values, defaultIndex = 0, selectContainerStyle, title, onSelect }: IProps) => {

    return (
        <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', marginTop: 10 }}>
            <View style={{ flexDirection: 'row-reverse' }}>
                <SelectDropdown
                    dropdownStyle={{ backgroundColor: colors.white, borderRadius: 15 }}
                    defaultValueByIndex={defaultIndex}
                    defaultButtonText='یک گزینه انتخاب کنید'
                    buttonStyle={{ ...styles.inputStyle, ...selectContainerStyle as any }}
                    selectedRowTextStyle={styles.inputTextStyle}
                    buttonTextStyle={styles.inputTextStyle}
                    rowTextStyle={styles.inputTextStyle}
                    data={values.reduce((t, c) => { t.push(c.value); return t; }, [] as string[])}
                    onSelect={(selectedItem, index) => {
                        if (onSelect)
                            onSelect({ key: index, value: selectedItem })
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
                <FontAwesomeIcon style={{ position: 'absolute', left: wp(2), alignSelf: 'center' }} color={colors.primary} icon={faAngleDown} size={fonts.size.font16} />
            </View>
            <Text style={{ fontFamily: fonts.type.IRANSansXFaNumBold, color: colors.gray, fontSize: fonts.size.font12, alignSelf: 'center' }} >{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerTitle: {
        paddingTop: 0,
        alignSelf: 'center',
        fontFamily: fonts.type.BYekanBold,
        fontSize: fonts.size.font20,
        color: colors.secondary,
        borderBottomWidth: 1,
        width: '100%',
        textAlign: 'center'
    },
    inputStyle: {
        ...themeStyles.shadowProp,
        borderRadius: (metrics.screenWidth * 0.12) / 2,
        height: metrics.screenWidth * 0.1,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
        width: wp(30)
    },
    inputTextStyle: {
        textAlign: 'left',
        color: colors.primary,
        fontFamily: fonts.type.IRANSansXFaNumBold,
        fontSize: fonts.size.font14
    }
})

export default InputSelectSample;