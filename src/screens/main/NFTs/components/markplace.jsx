import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Datas } from "../../../../data";

import { GlobalStyles } from "../../../../components/styles";

// const datas = {
//     nft: [
//         {
//             id: 1,
//             image: NFT1,
//             content: 'Music'
//         },
//         {
//             id: 2,
//             image: NFT2,
//             content: 'Flight'
//         },
//         {
//             id: 3,
//             image: NFT3,
//             content: 'No content'
//         },
//     ],
//     trending: [
//         {
//             id: 4,
//             image: Trending1,
//             art: 'Portrait',
//             rate: 200
//         },
//         {
//             id: 5,
//             image: Trending2,
//             art: 'Abstract',
//             rate: 200
//         },
//         {
//             id: 6,
//             image: Trending3,
//             art: 'Portrait',
//             rate: 200
//         },
//     ],
// }

export const Markplace = ({ setState }) => {

    return (
        <View
            style={{ paddingBottom: 42 }}
        >
            <Text style={{
                ...GlobalStyles.minTitle, textAlign: 'left',
                marginVertical: 8
            }}>
                NFT Marketplace
            </Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View
                    style={{
                        ...GlobalStyles.flexCenter,
                        gap: 10
                    }}
                >
                    {
                        Datas.markplace.nft.map((_itm, _idx) => (
                            <View
                                style={{
                                    borderRadius: 18
                                }}
                                key={_idx}
                            >
                                <Image
                                    source={_itm.image}
                                    style={{
                                        width: '250',
                                        height: '168',
                                        borderRadius: 18
                                    }}
                                />
                                <Text
                                    style={{
                                        ...GlobalStyles.minTitle,
                                        position: 'absolute',
                                        bottom: 6,
                                        left: '50%',
                                        transform: 'translate(-50%, 0)'
                                    }}
                                >{_itm.content}</Text>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            <Text style={{
                ...GlobalStyles.minTitle, textAlign: 'left',
                marginVertical: 8,
                marginTop: 32
            }}>
                Trending Collections
            </Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View
                    style={{
                        ...GlobalStyles.flexCenter,
                        gap: 10
                    }}
                >
                    {
                        Datas.markplace.trending.map((_itm, _idx) => (
                            <TouchableOpacity
                                style={{
                                    borderRadius: 30,
                                    backgroundColor: '#350147',
                                    padding: 10,
                                    paddingBottom: 20,
                                    borderWidth: 1,
                                    borderColor: '#400156'
                                }}
                                key={_idx}
                                onPress={() => setState(_itm.id)}
                            >
                                <Image
                                    source={_itm.image}
                                    style={{
                                        width: '155',
                                        height: '155',
                                        borderRadius: 22
                                    }}
                                />
                                <Text
                                    style={{
                                        ...GlobalStyles.minTitle,
                                    }}
                                >{_itm.content}</Text>
                                <View
                                    style={{ ...GlobalStyles.flexBetween }}
                                >
                                    <Text style={{
                                        ...GlobalStyles.minTitle,
                                        fontSize: 13
                                    }}>{`${_itm.art} Art`}</Text>
                                    <Text
                                        style={{
                                            color: '#9A8EA2',
                                            fontSize: 13
                                        }}
                                    >{`❤️ ${_itm.rate}`}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}