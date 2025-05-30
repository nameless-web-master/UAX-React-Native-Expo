import React from "react";

import { StyleSheet, TextInput, View } from 'react-native';
import { GlobalStyles } from "../styles";

export const NrInput = ({ value, setValue, style }) => {
    return (
        <View
            style={{
                ...style,
                ...GlobalStyles.flexCenter,
                ...styles.NrInputCotainer
            }}>
            <TextInput
                value={value}
                maxLength={1}
                style={styles.NrInput}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    NrInputCotainer: {
        width: 47,
        height: 47,
        backgroundColor: '#D9D9D900',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E3D8E4',
    },
    NrInput: {
        fontSize: 16,
        color: '#fff'
    }
})