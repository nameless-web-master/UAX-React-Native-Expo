import React from "react";
import { Image, Text, View } from "react-native";
import { GlobalStyles } from "../styles";

import noData from '../../assets/collections/no data.png';

export const NoData = ({ type }) => {
    return (
        <View
            style={{
                ...GlobalStyles.flexCenter,
                flexDirection: 'row !important',
            }}>
            <Image source={noData} alt="No Data" />
            <Text style={{
                ...GlobalStyles.minTitle,
                fontSize: 13,
                marginTop: 8
            }}>{`No ${type} Yet...`}</Text>
        </View>
    )
};