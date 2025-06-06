import React from "react";

import { Button } from "../common/button";

import { GlobalStyles } from "../styles";

export const MainBtn = ({ content, action, navigation, style, other, position }) => {
    return (
        <Button
            content={content}
            action={action}
            navigation={navigation}
            style={{ borderWidth: 1, borderColor: '#7B797C', ...style }}
            other={other}
            position={position}
        />
    );
};
