import { StyleSheet } from 'react-native';

const baseFlex = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
};

export const GlobalStyles = StyleSheet.create({
    flex: baseFlex,
    flexCenter: {
        ...baseFlex,
        justifyContent: 'center',
    },
    flexBetween: {
        ...baseFlex,
        justifyContent: 'space-between',
    },
});