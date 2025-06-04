import React from "react";
import { GlobalStyles } from "../../../../components/styles";
import { LinearGradient } from "expo-linear-gradient";

import { View, Text } from "react-native";

import { NoData } from "../../../../components/common/noData";

export const History = () => {
    return (
        <View
            style={{ paddingBottom: 42 }}
        >
            <Text style={{
                ...GlobalStyles.minTitle, textAlign: 'left',
                marginVertical: 8
            }}>
                NFT History
            </Text>
            <LinearGradient
                colors={['#2B2330', '#2218260F']}
                style={{
                    borderWidth: 1,
                    borderColor: '#FFFFFF0F',
                    borderRadius: 8
                }}
            >
                <View style={{
                    ...GlobalStyles.flexBetween,
                    borderBottomWidth: 0.5,
                    borderColor: '#FFFFFF14',
                    paddingHorizontal: 24,
                    paddingVertical: 8
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 11
                    }}>NFT Name</Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: 11
                    }}>Ask Price</Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: 11
                    }}>Lowest Price</Text>
                    <Text style={{
                        color: '#fff',
                        fontSize: 11
                    }}>Txn ID</Text>
                </View>
                <View
                    style={{
                        paddingVertical: 80
                    }}>
                    <NoData type={'History'} />
                </View>
            </LinearGradient>
        </View>
    )
}