import React from "react";
import { Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../../../components/styles";

export const InputView = ({ view, setView, state, type }) => {
    const handleChange = (val) => {
        // Remove all non-numeric characters
        if (val === "" || /^\d*\.?\d*$/.test(val)) {
            setView(prev => ({ ...prev, [type]: val }));
        }
    };
    return (
        <View>
            <TextInput
                value={view[type]}
                onChangeText={handleChange}
                style={{
                    ...GlobalStyles.minTitle,
                    fontSize: 16,
                    fontWeight: '600',
                    width: 170,
                    padding: 12,
                    paddingRight: 56
                }}
                keyboardType="numeric"
            />
            <View style={{
                position: 'absolute',
                right: 12,
                top: 16,
            }}>
                <Text style={{ color: '#fff' }}>{state.toUpperCase()}</Text>
            </View>
            <View style={{
                position: 'absolute',
                bottom: 6,
                width: 170,
                height: 10,
                borderWidth: 1,
                borderColor: '#B0B0B0',
                borderTopWidth: 0,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
            }} />
        </View>
    )
}