import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import { Linear } from '../../../../../components/common/linear';
import { GlobalStyles } from '../../../../../components/styles';
import { AntDesign } from '@expo/vector-icons';

export const Select = ({ state, setState }) => {
    
    const data = [
        { key: 'network', label: 'Network' },
        { key: 'network1', label: 'Network1' }
    ];
    return (
        <View style={styles.container}>
            <Linear
                colors={['#413545', '#3C2B3F8C']}
                style={styles.linearGradient}
                children={
                    <ModalSelector
                        data={data}
                        initValue="Select option"
                        selectedKey={state}
                        onChange={(option) => setState(option.key)}
                        style={styles.modalSelector}
                        selectStyle={styles.selectStyle}
                        selectTextStyle={styles.selectTextStyle}
                        optionContainerStyle={styles.optionContainer}
                        optionTextStyle={styles.optionText}
                        cancelContainerStyle={styles.cancelContainer}
                        cancelTextStyle={styles.cancelText}
                        animationType="fade"
                    >
                        <View style={{
                            ...GlobalStyles.flexBetween,
                            ...styles.selectorView
                        }}>
                            <Text style={styles.selectorText}>
                                {data.find(item => item.key === state)?.label || 'Select option'}
                            </Text>
                            <AntDesign
                                name="caretdown"
                                size={14}
                                color="#FFF"
                                style={styles.dropdownIcon}
                            />
                        </View>
                    </ModalSelector>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#383A46',
        padding: 4,
        borderRadius: 80,
        backgroundColor: '#19101C',
        marginVertical: 16
    },
    linearGradient: {
        borderColor: '#383A46',
        borderWidth: 1,
        borderRadius: 80
    },
    modalSelector: {
        width: 300,
    },
    selectStyle: {
        borderWidth: 0,
        backgroundColor: 'transparent',
    },
    selectTextStyle: {
        color: '#ffffff',
        textAlign: 'center',
    },
    selectorView: {
        height: 40,
        width: '100%',
        paddingHorizontal: 28,
    },
    selectorText: {
        color: '#ffffff',
        textAlign: 'center',
    },
    optionContainer: {
        backgroundColor: '#19101C',
        borderColor: '#383A46',
        borderWidth: 1,
    },
    optionText: {
        color: '#ffffff',
    },
    cancelContainer: {
        backgroundColor: '#19101C',
        borderColor: '#383A46',
        borderWidth: 1,
    },
    cancelText: {
        color: '#000',
    }
});