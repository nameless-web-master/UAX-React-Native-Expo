import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GlobalStyles } from "../../../../components/styles";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { WelcomeTxt } from "../../../../components/layout/WelcomeTxt";
// images import 
import image1 from '../../../../assets/collections/1.png';
import image2 from '../../../../assets/collections/2.png';
import image3 from '../../../../assets/collections/3.png';
import image4 from '../../../../assets/collections/4.png';
import image5 from '../../../../assets/collections/5.png';
import image6 from '../../../../assets/collections/6.png';


import { NoData } from "../../../../components/common/noData";

const datas = [
    {
        image: image1,
        art: 1,
        uaxn: 100
    },
    {
        image: image2,
        art: 2,
        uaxn: 50
    },
    {
        image: image3,
        art: 3,
        uaxn: 10
    },
    {
        image: image4,
        art: 1,
        uaxn: 100
    },
    {
        image: image5,
        art: 2,
        uaxn: 50
    },
    {
        image: image6,
        art: 3,
        uaxn: 10
    },
]

export const Collections = () => {
    return (
        <View>
            <Text style={{ ...GlobalStyles.minTitle, textAlign: 'left', marginBottom: 6 }}>
                My Collections
            </Text>
            <View style={{
                ...GlobalStyles.flex,
                flexWrap: 'wrap',
                paddingBottom: 38
            }}>
                {
                    datas.length ?
                        datas.map((_itm, _idx) => (
                            <View key={_idx} style={{
                                width: '50%',
                                padding: 5
                            }}>
                                <View style={{
                                    backgroundColor: '#2A162F',
                                    borderWidth: 1,
                                    borderColor: '#FFFFFF17',
                                    borderRadius: 6
                                }}>
                                    <Image
                                        source={_itm.image}
                                        alt="collections"
                                        style={{
                                            width: '100%',
                                            borderRadius: 6
                                        }}
                                    />
                                    <View style={{
                                        padding: 14
                                    }}>
                                        <View style={{ ...GlobalStyles.flexBetween }}>
                                            <Text style={{
                                                ...GlobalStyles.minTitle,
                                                fontSize: 13
                                            }}>
                                                {`Art ${_itm.art}`}
                                            </Text>
                                            <MaterialCommunityIcons
                                                name="dots-horizontal"
                                                size={18}
                                                color="white" />
                                        </View>
                                        <View style={{
                                            ...GlobalStyles.flex
                                        }}>
                                            <Text style={{
                                                ...GlobalStyles.GreenTxt,
                                                fontSize: 14
                                            }}>
                                                {`${_itm.uaxn} UAXN`}
                                            </Text>
                                            <WelcomeTxt
                                                txt={'($7.70)'}
                                                style={{ fontSize: 12, marginLeft: 4 }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )) :
                        <LinearGradient
                            colors={['#2C2430', '#2218260F']}
                            style={{
                                ...GlobalStyles.flexCenter,
                                flexDirection: 'row !important',
                                width: '100%',
                                height: 220,
                                borderWidth: 1,
                                borderColor: '#FFFFFF12',
                                borderRadius: 10
                            }}
                        >
                            <NoData type={'Collections'} />
                        </LinearGradient>
                }
            </View>
        </View>
    )
}