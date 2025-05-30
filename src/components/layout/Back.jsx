import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { GlobalStyles } from '../styles';

export const BackBtn = ({ navigation, path }) => {
    return (
        <View style={{ ...styles.backbtn, ...GlobalStyles.flexCenter }}>
            <TouchableOpacity
                onPress={() => navigation.navigate(path)}
            >
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={20}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    backbtn: {
        width: 30,
        height: 30,
        backgroundColor: '#3F2146',
        borderRadius: 6,
        marginVertical: 8
    }
});