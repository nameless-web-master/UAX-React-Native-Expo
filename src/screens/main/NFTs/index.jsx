import React, { useState } from "react";
import { ScrollView } from "react-native";

import { Header } from '../../../components/layout/header';
import { UserInfo } from '../../../components/layout/userInfo';
import { Nav } from '../../../components/layout/nav';

import { Template } from "../../../components/layout/Template";
import { ButtonList } from "./components/buttons";

// elemetn 
import { Collections } from "./components/collections";
import { Upload } from "./components/upload";
import { Markplace } from "./components/markplace";

import { CreateNFT } from "./components/create";
import { Complete } from "./components/create/complete";
import { History } from "./components/history";

export const NFTs = ({ navigation }) => {
    const [state, setState] = useState(0);
    const [markplace, setMarkplace] = useState(null);
    const [complete, setComplete] = useState(null);

    let element;

    switch (state) {
        case 0:
            element = <Collections />;
            break;
        case 1:
            element = <Upload />;
            break;
        case 2:
            element = <Markplace setState={setMarkplace} />;
            break;
        case 3:
            element = <History />;
            break;
        default:
            element = null;
            break;
    };

    const children = (
        <>
            <Header
                content={'NFTs'}
                navigation={navigation}
            />
            <ScrollView>
                <UserInfo navigation={navigation} />
                <ButtonList state={state} setState={setState} />
                {element}
            </ScrollView>
            <Nav navigation={navigation} place={'NFTs'} />
        </>
    );

    return (
        <Template
            children={
                complete ?
                    <Complete state={complete} setState={setComplete} /> :
                    (
                        markplace ?
                            <CreateNFT
                                state={markplace}
                                setState={setMarkplace}
                                setComplete={setComplete}
                            /> :
                            children
                    )

            }
            style={{
                padding: 16,
                paddingVertical: 0
            }}
        />
    )
} 