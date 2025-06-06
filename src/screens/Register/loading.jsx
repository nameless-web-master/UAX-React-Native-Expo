import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Dots from '../../assets/welcome/dots.png';
import { GlobalStyles } from '../../components/styles';

export const Loading = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.bottomButtonContainer}>
                <Image source={Dots} alt='dot' style={{
                    transform: 'rotate(-45deg)'
                }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Black background
        alignItems: 'center',
    },
    bottomButtonContainer: {
        ...GlobalStyles.flexCenter,
        width: 88,
        height: 88,
        backgroundColor: '#DF16FF',
        shadowColor: '#000',
        transform: 'rotate(45deg)',
        position: 'absolute',
        top: '45%',
        borderRadius: 6,
        boxShadow: 'inset 0 4px 4px 0 #00000040'
    }
});