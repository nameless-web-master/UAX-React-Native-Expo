import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// images 
import TopRight from '../assets/welcome/top-right.png';
import TopLeft from '../assets/welcome/top-left.png';
import BottomRight from '../assets/welcome/bottom-right.png';
import BottomLeft from '../assets/welcome/bottom-left.png';

const images = [
    {
        image: TopLeft,
        content: 'TopLeft'
    },
    {
        image: TopRight,
        content: 'TopRight'
    },
    {
        image: BottomLeft,
        content: 'BottomLeft'
    },
    {
        image: BottomRight,
        content: 'BottomRight'
    }
];

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate('Loading')}
                >
                    {
                        images.map((_itm, _idx) => (
                            <Image
                                source={_itm.image}
                                key={_idx}
                                alt={_itm.content}
                                style={{
                                    position: 'absolute',
                                    ...styles[_itm.content]
                                }}
                            />
                        ))
                    }
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
    },
    BottomLeft: {
        left: -12,
        bottom: -12
    },
    BottomRight: {
        right: -12,
        bottom: -12
    },
    TopLeft: {
        left: -12,
        top: -12
    },
    TopRight: {
        right: -12,
        top: -12
    },
});