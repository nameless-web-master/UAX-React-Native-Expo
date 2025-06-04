import React from "react";

import { Linear } from "../common/linear";

export const LinearMainBox = ({ style, children }) => {
    return (
        <Linear
            children={children}
            style={{
                borderWidth: 1,
                borderColor: '#FFFFFF12',
                ...style
            }}
            colors={['#2C2430', '#22182655']}
        // location={[0, 1, 0]}
        />
    )
}