import React from "react";

import { LinearGradient } from "expo-linear-gradient";

export const Linear = ({ colors, style, children, location }) => {
    return (
        <LinearGradient
            colors={colors}
            locations={location}
            style={{ ...style }}
        >{children}</LinearGradient>
    )
}