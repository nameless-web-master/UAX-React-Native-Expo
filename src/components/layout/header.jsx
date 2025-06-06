import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';

// Import your components and assets
import { IconBtn } from "../common/IconBtn";
import { GlobalStyles } from "../styles";
import Logo from "../../assets/logo.png";
import Light from "../../assets/light.png";
import MenuLight from '../../assets/menu/light.png';
import Bridge from '../../assets/menu/bridge.png';
import Logout from '../../assets/menu/logout.png';

const menuItems = [
    {
        image: MenuLight,
        content: 'Get Bandwidth',
        arrow: true
    },
    {
        image: Bridge,
        content: 'Multichain Bridge',
        arrow: true
    },
    {
        image: Logout,
        content: 'Logout',
        arrow: false
    },
];

export const Header = ({
    content, logo, right, menu, navigation, path = "Dashboard", other = false
}) => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const translateX = useSharedValue(300); // Start off-screen

    const toggleNav = () => {
        // First determine the target value based on current visibility
        const targetValue = isNavVisible ? 300 : 0;

        // Then animate
        translateX.value = withTiming(targetValue, {
            easing: Easing.out(Easing.exp),
            duration: 300
        });

        // Finally update state (could also use withCallback)
        setIsNavVisible(!isNavVisible);
    };

    const navStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
        // Ensure the menu is positioned properly
        right: 0,
    }));
    return (
        <>
            {/* Header Content */}
            <View style={styles.headerContainer}>
                {logo ? (
                    <Image source={Logo} style={styles.logo} />
                ) : (
                    <IconBtn
                        path={path}
                        navigation={navigation}
                        icon={"keyboard-arrow-left"}
                    />
                )}

                <Text style={styles.headerText}>{content}</Text>

                <View style={styles.headerRight}>
                    {!right && (
                        <View style={styles.balanceContainer}>
                            <Image source={Light} style={styles.lightIcon} />
                            <Text style={styles.balanceText}>0.15</Text>
                        </View>
                    )}

                    {!menu && (
                        <TouchableOpacity onPress={toggleNav}>
                            <MaterialIcons name='menu' size={24} color="#fff" />
                        </TouchableOpacity>
                    )}

                    {other && (
                        <Text style={styles.redeemText}>Redeem</Text>
                    )}
                </View>
            </View>

            {/* Semi-transparent Backdrop - Only visible when menu is open */}
            {isNavVisible && (
                <TouchableOpacity
                    style={styles.backdrop}
                    onPress={toggleNav}
                    activeOpacity={1}
                />
            )}

            {/* Animated Side Menu */}
            <Animated.View style={[styles.menuContainer, navStyle]}>
                <View style={styles.menuContent}>
                    {/* Close Button */}
                    <View style={styles.closeButtonContainer}>
                        <TouchableOpacity onPress={toggleNav}>
                            <FontAwesome5 name="times" size={20} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Menu Items */}
                    <View style={styles.menuItemsContainer}>
                        {menuItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.menuItem,
                                    index < menuItems.length - 1 && styles.borderBottom
                                ]}
                                onPress={() => {
                                    // Add your navigation logic here
                                    toggleNav(); // Close menu after selection
                                }}
                            >
                                <View style={styles.menuItemContent}>
                                    <Image
                                        source={item.image}
                                        style={styles.menuItemIcon}
                                    />
                                    <Text style={styles.menuItemText}>{item.content}</Text>
                                </View>
                                {item.arrow && (
                                    <AntDesign name="arrowdown" size={16} color="#FFFFFF87" />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    // Header Styles
    headerContainer: {
        ...GlobalStyles.flexBetween,
        marginTop: 42,
        zIndex: 10, // Ensure header stays above backdrop
    },
    logo: {
        width: 50,
        height: 14
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white'
    },
    headerRight: {
        ...GlobalStyles.flexBetween
    },
    balanceContainer: {
        ...GlobalStyles.flexBetween
    },
    lightIcon: {
        width: 10,
        height: 15
    },
    balanceText: {
        color: '#DF16FF',
        fontSize: 14,
        marginLeft: 4,
        marginRight: 12,
    },
    redeemText: {
        color: '#DF16FF',
        fontSize: 14,
        marginLeft: 4,
        marginRight: 12,
    },

    // Menu Styles
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 90, // Below menu but above other content
    },
    menuContainer: {
        position: 'absolute',
        top: 0,
        right: 0, // Changed from -300 to 0 since we're handling the translation
        width: 300,
        height: '100%',
        zIndex: 100, // Highest z-index
    },
    menuContent: {
        backgroundColor: '#474444',
        width: '100%',
        height: '100%',
        paddingHorizontal: 18,
        paddingVertical: 22,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
    closeButtonContainer: {
        ...GlobalStyles.flex,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    menuItemsContainer: {
        marginTop: 10,
    },
    menuItem: {
        ...GlobalStyles.flexBetween,
        paddingVertical: 15,
    },
    menuItemContent: {
        ...GlobalStyles.flex,
        paddingHorizontal: 6
    },
    menuItemIcon: {
        width: 18,
        height: 18,
        marginRight: 6
    },
    menuItemText: {
        ...GlobalStyles.minTitle,
        color: 'white',
        fontSize: 16,
    },
    borderBottom: {
        borderBottomColor: '#FFFFFF17',
        borderBottomWidth: 1
    }
});