import React from "react";
import { View, StyleSheet, Image } from "react-native";

import topBackImage from '../../assets/top-back.png';
import bottomBackImage from '../../assets/bottom-back.png';

export const Template = ({ children }) => {
    return (
        // Main container covering the whole screen area
        <View style={styles.container}>
            {/* Background images, absolutely positioned to cover the top and bottom */}
            <Image
                source={topBackImage}
                style={styles.topBackImage} // Using a specific style for top image
                alt="Top back"
            />
            <Image
                source={bottomBackImage}
                style={styles.bottomBackImage} // Using a specific style for bottom image
                alt="Bottom back"
            />
            {/* Content container with padding */}
            <View style={styles.contentContainer}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Black background
        // No padding here, padding is on contentContainer
    },
    topBackImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        // The height will be determined by the image's aspect ratio and the width
        // or you can specify a height if needed
    },
    bottomBackImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // The height will be determined by the image's aspect ratio and the width
        // or you can specify a height if needed
    },
    contentContainer: {
        flex: 1,
        padding: 32,
    },
});