import React, { useCallback } from "react"
import { KeyboardAvoidingView, Platform } from "react-native"

export const KeyboardContainer = ({ children }: { children: any }) => {

    const K = useCallback(
        ({ children }: { children: any }) => {
            if (Platform.OS === 'ios') {
                return (
                    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
                        {children}
                    </KeyboardAvoidingView>
                )
            } else {
                return children;
            }

        },
        [],
    );

    return (
        <K>
            {children}
        </K>
    )

}