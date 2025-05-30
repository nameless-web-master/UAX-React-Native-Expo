import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('Login')}
                >
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={42}
                        color="white"
                    />
                </TouchableOpacity>
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
    logo: {
        position: 'absolute',
        left: '50%',
        top: '40%',
        transform: 'translate(-50%, -50%)'
    },
    bottomButtonContainer: {
        position: 'absolute',
        bottom: 40,
        width: 100,
        alignItems: 'center'
    },
    nextButton: {
        backgroundColor: '#DF16FF',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});