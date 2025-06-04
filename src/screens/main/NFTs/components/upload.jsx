import React from "react";
import { Text, View } from "react-native";
import { GlobalStyles } from "../../../../components/styles";
import { WelcomeTxt } from "../../../../components/layout/WelcomeTxt";
import UploadBtn from "./uploadBtn";

import { State } from "./state";

export const Upload = () => {
    return (
        <View>
            <Text style={{ ...GlobalStyles.minTitle, textAlign: 'left', marginBottom: 6 }}>
                Upload your NFT!
            </Text>
            <WelcomeTxt txt={'Drag or choose your file to upload.'} />
            <UploadBtn />
            <Text style={{
                ...GlobalStyles.minTitle, textAlign: 'left',
                marginVertical: 8
            }}>
                Item Information
            </Text>
            <View
                style={{
                    paddingBottom: 36
                }}
            >
                <State type={'name'} />
                <State type={'amount'} />
                <State type={'des'} />
            </View>
        </View>
    )
};