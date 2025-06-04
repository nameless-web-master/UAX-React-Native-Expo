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
    IconBtn: {
        width: 30,
        height: 30,
        backgroundColor: '#3F2146',
        borderRadius: 6,
        marginVertical: 8
    },
    minTitle: {
        fontSize: 15,
        fontWeight: 400,
        color: '#fff',
        textAlign: 'center'
    },
    GreenTxt: {
        fontSize: 20,
        fontWeight: '700',
        color: '#0DF469',
        textAlign: 'center'
    },
    positionCenter: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
});