import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { GlobalStyles } from '../styles';

export const IconBtn = ({ navigation, path, icon, color, size, style }) => {
    return (
        <View style={{
            ...GlobalStyles.IconBtn,
            ...GlobalStyles.flexCenter,
            ...style
        }}>
            <TouchableOpacity
                onPress={
                    typeof path === 'string' ?
                        () => navigation.navigate(path) :
                        path
                }
            >
                <MaterialIcons
                    name={icon}
                    size={size ? size : 20}
                    color={color ? color : "white"}
                />
            </TouchableOpacity>
        </View>
    );
};
