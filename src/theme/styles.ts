import { Platform, StyleSheet } from "react-native";
import colors from "./colors";
import fonts from "./fonts";

const themeStyles = StyleSheet.create({
    shadowProp: {
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        ...(Platform.OS === 'android' ? { elevation: 10 } : {})
    },

    normalText: {
        fontFamily: fonts.type.IRANSansXFaNumBold,
        fontSize: fonts.size.font14,
        color: colors.secondary,
    }
})

export default themeStyles