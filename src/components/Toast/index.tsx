import React from 'react';
import { Platform, Text, View } from "react-native"
import { ToastProvider } from 'react-native-toast-notifications'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { wp } from '../../theme/metrics';
import themeStyles from '../../theme/styles';

export const ToastNotification = ({ children }: { children: any }) => {
    return (
        <ToastProvider
            placement="bottom"
            // dangerIcon={<MaterialCommunityIcons name="close" color="#fff" />}
            // successIcon={<MaterialCommunityIcons name="check" color="#fff" size={18} />}
            offset={wp(17)}
            // Custom type example
            renderType={{
                custom_toast: (toast) => (
                    <View
                        style={{
                            ...themeStyles.shadowProp,
                            width: "85%",
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            backgroundColor: "#fff",
                            marginVertical: 4,
                            borderRadius: 8,
                            borderLeftColor: toast.data.isImportant ? colors.danger : colors.blue,
                            borderLeftWidth: 6,
                            justifyContent: "center",
                            paddingLeft: 16,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 12,
                                color: "#333",
                                // fontWeight: "bold",
                                fontFamily: fonts.type.IRANSansXFaNumBold,
                                textAlign: Platform.OS === 'ios' ? 'left' : 'auto'
                            }}
                        >
                            {toast.data.title}
                        </Text>
                        <Text style={{
                            textAlign: Platform.OS === 'ios' ? 'left' : 'auto',
                            color: toast.data.isImportant ? colors.danger : "#a3a3a3",
                            marginTop: 2,
                            fontFamily: fonts.type.IRANSansXFaNumBold,
                            fontSize: toast.data.isImportant ? 14 : 12,
                        }}>
                            {toast.message}
                        </Text>
                    </View>
                ),
            }}
        >
            {children}
        </ToastProvider>
    )
}