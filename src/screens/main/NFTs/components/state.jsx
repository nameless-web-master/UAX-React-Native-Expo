import React from "react";
import { Text, View } from "react-native";

import { Input } from "../../../../components/common/Input";
import { GlobalStyles } from "../../../../components/styles";

const datas = {
    name: {
        label: 'Item Name',
        placeholder: 'Ex : Awesome Artwork'
    },
    amount: {
        label: 'Amount',
        placeholder: 'Ex : 100 UAXN'
    },
    des: {
        label: 'Description',
        placeholder: 'Ex : Minimalist abstract harmony'
    },
}

export const State = ({ type }) => {
    return (
        <View>
            <Text style={{
                ...GlobalStyles.minTitle,
                color: '#FFFFFFCC',
                fontSize: 14,
                marginTop: 6,
                textAlign: 'left',
                fontWeight: '300'

            }}>{datas[type].label}</Text>
            <Input
                placeholder={datas[type].placeholder}
                style={{
                    back: {
                        paddingVertical: 0,
                        paddingHorizontal: 4,
                        borderRadius: 4,
                        backgroundColor: '#2A162F'
                    }
                }}
            />
        </View>
    )
};