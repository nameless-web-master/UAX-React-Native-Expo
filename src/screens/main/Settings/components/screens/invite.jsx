import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import back from '../../../../../assets/Component.png';
import star from '../../../../../assets/Medal.png';
import box from '../../../../../assets/box.png';
import panel from '../../../../../assets/panel.png';

import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import { Template } from "../../../../../components/layout/Template";
import { Header } from "../../../../../components/layout/header";
import { GlobalStyles } from "../../../../../components/styles";
import { WelcomeTxt } from "../../../../../components/layout/WelcomeTxt";
import { LinearMainBox } from "../../../../../components/layout/linearMainBox";
import { Nav } from "../../../../../components/layout/nav";

const datas = [
    {
        percent: 0,
    },
    {
        percent: 15,
    },
    {
        percent: 25,
    },
    {
        percent: 50,
    },
]

export const Invite = ({ navigation }) => {
    const [state, setState] = useState(0);
    return (
        <>
            <Image
                source={back}
                alt="back"
                style={{
                    width: '100%',
                    position: 'absolute',
                    zIndex: 1,
                    // top: 40
                }}
            />
            <Template style={{
                padding: 16,
                paddingVertical: 0
            }}>
                <Header
                    content={'Invite & Earn'}
                    navigation={navigation}
                    path="Settings"
                    right={true}
                    menu={true}
                    other={true}
                />
                <ScrollView style={{ zIndex: 2 }}>
                    <View>
                        <Text
                            style={{
                                ...GlobalStyles.minTitle,
                                fontSize: 16,
                                fontWeight: '400',
                                marginTop: 28,
                                marginBottom: 12
                            }}
                        >
                            My Rewards Points
                        </Text>
                        <Text
                            style={{
                                ...GlobalStyles.minTitle,
                                fontSize: 26,
                                fontWeight: '700'
                            }}
                        >
                            $204.12
                        </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 4,
                        marginTop: 36,
                    }}>

                        <View
                            style={{
                                height: 16,
                                width: '86%',
                                borderRadius: 24,
                                backgroundColor: '#3C0747',
                                transform: 'translate(0,100%)',
                                marginHorizontal: 'auto',
                            }}
                        >
                        </View>
                        <View
                            style={{
                                height: 16,
                                width: '92%',
                                borderRadius: 24,
                                backgroundColor: '#5F0A6D',
                                transform: 'translate(0,50%)',
                                marginHorizontal: 'auto',
                            }}
                        >
                        </View>
                        <TouchableOpacity
                            style={{
                                ...GlobalStyles.flex,
                                gap: 10,
                                padding: 14,
                                borderRadius: 24,
                                backgroundColor: '#DF16FF',
                                overflow: 'hidden', // Prevents children from overflowing
                            }}
                            onPress={() => navigation.navigate('Referral')}
                        >
                            <Image
                                source={star}
                                accessibilityLabel="star"
                                style={{ width: 24, height: 24 }} // Always set dimensions for Images
                            />
                            <View
                                style={{
                                    flex: 1,
                                    flexShrink: 1, // Allows the view to shrink if needed
                                }}
                            >
                                <View
                                    style={{
                                        ...GlobalStyles.flexBetween,
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...GlobalStyles.minTitle,
                                            fontSize: 14,
                                            fontWeight: '500',
                                            flexShrink: 1, // Allows text to wrap if needed
                                        }}
                                        numberOfLines={1} // Prevents text from wrapping
                                    >
                                        Total Referrals
                                    </Text>
                                    <Feather name="arrow-up-right" size={18} color="white" />
                                </View>
                                <Text
                                    style={{
                                        ...GlobalStyles.minTitle,
                                        fontSize: 13,
                                        textAlign: 'left',
                                        flexShrink: 1, // Prevents overflow
                                    }}
                                    numberOfLines={1}
                                >
                                    So far, you have 5 referrals.
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            ...GlobalStyles.flexBetween,
                            marginTop: 42
                        }}
                    >
                        <WelcomeTxt txt={'REFERRAL REWARD SLABS'} style={styles.rewardTxt} />
                        <WelcomeTxt txt={'REQUIRED'} style={styles.rewardTxt} />
                    </View>
                    <View>
                        {
                            datas.map((_itm, _id) => (
                                _id === state ?
                                    (
                                        <View
                                            style={{
                                                borderColor: '#C006DE',
                                                borderRadius: 4,
                                                borderWidth: 0.5,
                                                marginVertical: 4
                                            }}
                                            key={_id}
                                        >
                                            <View style={{
                                                ...GlobalStyles.flexBetween,
                                                paddingHorizontal: 26
                                            }}>
                                                <Text style={{
                                                    ...GlobalStyles.minTitle,
                                                    fontWeight: '500',
                                                    fontSize: 12,
                                                    lineHeight: 36
                                                }}>
                                                    {`${_itm.percent}%`}
                                                </Text>
                                                <Text style={{
                                                    ...GlobalStyles.minTitle,
                                                    fontWeight: '500',
                                                    fontSize: 12,
                                                    lineHeight: 36
                                                }}>
                                                    0 - 500 UAXN
                                                </Text>
                                            </View>
                                            <View style={{
                                                ...GlobalStyles.flexBetween,
                                                paddingHorizontal: 26,
                                                backgroundColor: '#C006DE'
                                            }}>
                                                <Text style={{
                                                    ...GlobalStyles.minTitle,
                                                    fontWeight: '500',
                                                    fontSize: 12,
                                                    lineHeight: 36
                                                }}>
                                                    CURRENT SLAB
                                                </Text>
                                                <Text style={{
                                                    ...GlobalStyles.minTitle,
                                                    fontWeight: '500',
                                                    fontSize: 12,
                                                    lineHeight: 36
                                                }}>
                                                    You have 0 UAXN
                                                </Text>
                                            </View>
                                        </View>
                                    ) : (
                                        <LinearMainBox
                                            style={{
                                                borderTopLeftRadius: 4,
                                                borderTopRightRadius: 4,
                                                marginVertical: 4
                                            }}
                                            key={_id}
                                        >
                                            <TouchableOpacity
                                                style={{
                                                    ...GlobalStyles.flexBetween,
                                                    paddingHorizontal: 26,
                                                }}
                                                key={_id}
                                                onPress={() => setState(_id)}
                                            >
                                                <Text style={{
                                                    ...GlobalStyles.minTitle,
                                                    fontWeight: '500',
                                                    fontSize: 12,
                                                    lineHeight: 36
                                                }}>
                                                    {`${_itm.percent}%`}
                                                </Text>
                                                <Text style={{
                                                    ...GlobalStyles.minTitle,
                                                    fontWeight: '500',
                                                    fontSize: 12,
                                                    lineHeight: 36
                                                }}>
                                                    0 - 500 UAXN
                                                </Text>
                                            </TouchableOpacity>
                                        </LinearMainBox>
                                    )
                            ))
                        }
                    </View>
                    <View
                        style={{
                            ...GlobalStyles.flexCenter,
                            marginTop: 24
                        }}
                    >
                        <Image
                            source={panel}
                            alt="panel"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                borderRadius: 12
                            }}
                        />
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Image source={box} alt="box" style={{ marginRight: 38 }} />
                            <View
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Text style={{
                                    ...GlobalStyles.minTitle,
                                    fontSize: 11,
                                    fontWeight: '600'
                                }}>YOUR CODE</Text>
                                <View
                                    style={{
                                        ...GlobalStyles.flexCenter,
                                        paddingHorizontal: 18,
                                        paddingVertical: 6,
                                        borderColor: '#DF16FF',
                                        borderWidth: 1,
                                        borderStyle: 'dashed',
                                        borderRadius: 4
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 11,
                                            color: '#DF16FF',
                                            fontWeight: '600',
                                            marginRight: 4
                                        }}
                                    >BGTM64GTQ</Text>
                                    <Ionicons name="copy-outline" size={12} color="#DF16FF" />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Nav place={'Settings'} navigation={navigation} />
            </Template >
        </>
    )
};

const styles = StyleSheet.create({
    rewardTxt: {
        color: '#A8A8A8',
        fontSize: 11,
        fontWeight: '600',
        lineHeight: 36
    }
});