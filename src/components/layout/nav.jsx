import React from "react";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles";


// image import
import Vector from '../../assets/Vector.png';
import VectorActive from '../../assets/Vector(1).png';
import nfts from '../../assets/nfts.png';
import nftsActive from '../../assets/nfts(1).png';
import Swap from '../../assets/Swap.png';
import SwapActive from '../../assets/Swap(1).png';
import reward from '../../assets/reward.png';
// import VectorActive from '../../assets/Vector(1).png';
import Settings from '../../assets/Settings.png';
import SettingsActive from '../../assets/Settings(1).png';

const images = {
    Vector,
    VectorActive,
    nfts,
    nftsActive,
    Swap,
    SwapActive,
    reward,
    VectorActive,
    Settings,
    SettingsActive,
}

const datas = [
    {
        image: 'Vector',
        path: 'Dashboard'
    },
    {
        image: 'nfts',
        path: 'NFTs'
    },
    {
        image: 'Swap',
        path: 'Swap'
    },
    {
        image: 'reward',
        path: 'Reward'
    },
    {
        image: 'Settings',
        path: 'Settings'
    },
]

// const Tab = createBottomTabNavigator();

export const Nav = ({ navigation, place }) => {
    return (
        <View
            style={{
                ...GlobalStyles.flexBetween,
                backgroundColor: '#321C3F',
                paddingVertical: 26,
                paddingHorizontal: 32,
                marginHorizontal: -16,
            }}>
            {
                datas.map((_itm, _idx) => (
                    <View
                        key={_idx}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate(_itm.path)}
                            style={{
                                opacity: (
                                    _itm.path === place ?
                                        0 : 1
                                ),
                                // marginHorizontal: (
                                //     _itm.path === place ?
                                //         8 : 0
                                // ),
                            }}
                        >
                            <Image
                                source={images[_itm.image]}
                                alt={_itm.image}
                                width={20}
                            />
                        </TouchableOpacity>
                        <View
                            key={_idx}
                            style={{
                                position: 'absolute',
                                top: -48,
                                left: -18,
                                display: (
                                    _itm.path === place ?
                                        'flex' : 'none'
                                ),
                                flexDirection: 'column',
                                alignItems: 'center',
                                minWidth: 60,
                            }}
                        >
                            <View style={{
                                ...GlobalStyles.flexCenter,
                                backgroundColor: '#DF16FF',
                                position: 'relative',
                                top: -2,
                                padding: 15,
                                borderRadius: '50%',
                                borderWidth: 8,
                                borderColor: '#321C3F'

                            }}>
                                <Image
                                    source={images[_itm.image + 'Active']}
                                    alt={_itm.image}
                                    width={20}
                                />
                            </View>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 12,
                                    fontWeight: '600'
                                }}>{_itm.path}</Text>
                        </View>
                    </View>
                ))
            }
        </View >
    )
}