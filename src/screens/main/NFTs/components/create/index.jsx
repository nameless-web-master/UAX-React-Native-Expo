import React from "react";
import { Image, ScrollView, Text, View, SafeAreaView } from "react-native";
import { GlobalStyles } from "../../../../../components/styles";
import { IconBtn } from "../../../../../components/common/IconBtn";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { WelcomeTxt } from "../../../../../components/layout/WelcomeTxt";
import { MainBtn } from "../../../../../components/layout/mainBtn";
import { filter } from "./filter";

export const CreateNFT = ({ state, setState, setComplete }) => {
    const data = filter(state);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000', marginHorizontal: -16 }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: '#000'
                }}
                contentContainerStyle={{
                    paddingBottom: 40
                }}
            >
                {/* Image Section */}
                <View style={{ position: 'relative' }}>
                    <View style={{ width: '100%', height: 390 }}>
                        <Image
                            source={data.image}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'cover'
                            }}
                        />
                    </View>

                    {/* Header Buttons */}
                    <View style={{
                        ...GlobalStyles.flexBetween,
                        paddingHorizontal: 16,
                        width: '100%',
                        position: 'absolute',
                        top: 32
                    }}>
                        <IconBtn
                            path={() => setState(null)}
                            style={{
                                backgroundColor: 'transparent',
                                borderColor: '#fff',
                                borderWidth: 1,
                            }}
                            icon={"keyboard-arrow-left"}
                        />
                        <AntDesign
                            name="staro"
                            size={24}
                            color="#fff"
                        />
                    </View>
                </View>

                {/* Content Section */}
                <View style={{
                    padding: 28,
                    paddingTop: 20
                }}>
                    {/* Art Type and Social */}
                    <View style={{
                        ...GlobalStyles.flexBetween,
                        marginVertical: 6
                    }}>
                        <Text style={{
                            ...GlobalStyles.minTitle,
                            fontSize: 14,
                            fontWeight: '700'
                        }}>
                            {`${data.art} Art`}
                        </Text>
                        <View style={{ ...GlobalStyles.flexCenter }}>
                            <AntDesign
                                name="hearto"
                                color={'#fff'}
                                size={12}
                                style={{ marginRight: 12 }}
                            />
                            <Ionicons
                                name="share-social"
                                color={'#fff'}
                                size={12}
                            />
                        </View>
                    </View>

                    {/* Creator and Bid Info */}
                    <View style={{ marginVertical: 12 }}>
                        <View style={{ ...GlobalStyles.flexBetween, marginBottom: 8 }}>
                            <Text style={{ color: '#DF16FF', fontSize: 12 }}>Creator Name</Text>
                            <Text style={{ color: '#DF16FF', fontSize: 12 }}>Current Bid</Text>
                        </View>
                        <View style={{ ...GlobalStyles.flexBetween }}>
                            <Text style={{ ...GlobalStyles.minTitle, fontSize: 14 }}>{data.creator}</Text>
                            <View style={{ ...GlobalStyles.flexCenter }}>
                                <Text style={{
                                    ...GlobalStyles.GreenTxt,
                                    fontSize: 14,
                                    marginRight: 4,
                                    fontWeight: '500'
                                }}>
                                    10 UAXN
                                </Text>
                                <WelcomeTxt txt={'($7.70)'} />
                            </View>
                        </View>
                    </View>

                    {/* Owner and Transaction Info */}
                    <View style={{ marginVertical: 12 }}>
                        <View style={{ ...GlobalStyles.flexBetween, marginBottom: 8 }}>
                            <Text style={{ color: '#DF16FF', fontSize: 12 }}>Owner Address</Text>
                            <Text style={{ color: '#DF16FF', fontSize: 12 }}>Txn ID</Text>
                        </View>
                        <View style={{ ...GlobalStyles.flexBetween }}>
                            <Text style={{ ...GlobalStyles.minTitle, fontSize: 14 }}>{data.address}</Text>
                            <Text style={{ ...GlobalStyles.minTitle, fontSize: 14 }}>{data.txnId}</Text>
                        </View>
                    </View>

                    {/* Sale and Link Info */}
                    <View style={{ marginVertical: 18 }}>
                        <View style={{ ...GlobalStyles.flexBetween, marginBottom: 8 }}>
                            <Text style={{ color: '#DF16FF', fontSize: 12 }}>Listed for sale</Text>
                            <Text style={{ color: '#DF16FF', fontSize: 12 }}>External Link</Text>
                        </View>
                        <View style={{ ...GlobalStyles.flexBetween }}>
                            <Text
                                style={{
                                    ...GlobalStyles.GreenTxt,
                                    fontSize: 14,
                                    marginRight: 4,
                                    fontWeight: '500'
                                }}
                                onPress={() => setComplete(state)}
                            >
                                Yes
                            </Text>
                            <Text
                                style={{ ...GlobalStyles.minTitle }}
                                onPress={() => setState(null)}
                            >
                                NA
                            </Text>
                        </View>
                    </View>

                    {/* Description */}
                    <View>
                        <Text style={{
                            ...GlobalStyles.minTitle,
                            fontSize: 12,
                            textAlign: 'left',
                            marginBottom: 8
                        }}>
                            Description
                        </Text>
                        <WelcomeTxt txt={'Abstract Art is one of the included in Lorem Ipsum was released on Jan 10, 2024.'} />
                    </View>

                    {/* Action Buttons */}
                    <View style={{
                        ...GlobalStyles.flexBetween,
                        marginTop: 28,
                    }}>
                        <View style={{ width: '48%' }}>
                            <MainBtn
                                content={{ txt: 'Buy Now', icon: 'cart-arrow-down' }}
                                other={1}
                                action={() => setComplete(state)}
                            />
                        </View>
                        <View style={{ width: '48%' }}>
                            <MainBtn
                                content={{
                                    txt: 'Make Offer',
                                    icon: 'brightness-percent'
                                }}
                                style={{
                                    backgroundColor: '#DF16FF',
                                    borderColor: 'transparent'
                                }}
                                other={1}
                                action={() => setComplete(state)}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}