import React from 'react';

import { ScrollView, View } from 'react-native';
import { MainBtn } from '../../../../components/layout/mainBtn';

const datas = [
    'My Collections', 'Upload NFT', 'Marketplace', 'NFT History'
];

export const ButtonList = ({ state, setState }) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={{
                flexDirection: 'row',
                gap: 6,
                marginBottom: 32
            }}>
                {
                    datas.map((_itm, _idx) => (
                        <MainBtn
                            content={{ txt: _itm }}
                            style={{
                                backgroundColor: (
                                    _idx === state ? '#DA23F8' : 'transparent'
                                ),
                                borderColor: (
                                    _idx === state ? 'transparent' : '#7B797C'
                                ),
                            }}
                            action={() => setState(_idx)}
                            key={_idx}
                        />
                    ))
                }
            </View>
        </ ScrollView>
    )
}