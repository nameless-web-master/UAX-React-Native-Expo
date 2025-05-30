import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const WelcomeWord = ({ first, second, style }) => {
    return (
        <View>
            <Text
                style={{ ...styles.words, ...style }}
            >{first}
                <Text style={{ color: '#DF16FF' }}>{'\n'}{second}</Text>
            </Text>
        </View >
    )
};

const styles = StyleSheet.create({
    words: {
        fontWeight: '800',
        fontSize: 36,
        lineHeight: 43,
        color: 'white',
        marginVertical: 28
    }
})