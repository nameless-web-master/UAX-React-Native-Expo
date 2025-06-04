import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import ModalSelector from "react-native-modal-selector";
import AntDesign from '@expo/vector-icons/AntDesign';

export const Select = ({ state, setState }) => {
    const options = [
        { key: "uaxn", label: "UAXN" },
        { key: "usdt", label: "USDT" },
    ];

    const selectedOption = options.find((opt) => opt.key === state);
    const modalRef = React.useRef();

    return (
        <View style={styles.container}>
            <ModalSelector
                ref={modalRef}
                data={options}
                initValue="Select currency"
                onChange={(option) => setState(option.key)}
                supportedOrientations={["portrait"]}
                animationType="fade"
                optionContainerStyle={styles.optionContainer}
                optionTextStyle={styles.optionText}
                cancelText="Cancel"
                cancelTextStyle={styles.cancelText}
                cancelContainerStyle={styles.cancelContainer}
                selectStyle={styles.select}
                selectTextStyle={styles.selectText}
                overlayStyle={styles.overlay}
                // backdropPressToClose={true}
                androidCloseWithBackdrop={true}
                keyExtractor={(item) => item.key}
            >
                <TouchableWithoutFeedback
                    onPress={() => modalRef.current?.open()}
                    accessible={true}
                    accessibilityLabel="Select currency"
                    accessibilityRole="button"
                >
                    <View style={styles.selector}>
                        <Text style={styles.selectorText}>
                            {selectedOption?.label || "Select currency"}
                        </Text>
                        <AntDesign
                            name="caretdown"
                            size={14}
                            color="#FFF"
                            style={styles.dropdownIcon}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </ModalSelector>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "transparent",
        zIndex: 10,
    },
    selector: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
        minWidth: 100,
    },
    selectorText: {
        color: "#FFF",
        fontSize: 16,
    },
    dropdownIcon: {
        marginLeft: 8,
    },
    optionContainer: {
        backgroundColor: "#2A2135",
        borderRadius: 8,
        borderWidth: 0,
        marginTop: 50,
    },
    optionText: {
        color: "#FFF",
    },
    select: {
        borderWidth: 0,
    },
    selectText: {
        color: "#FFF",
    },
    overlay: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    cancelContainer: {
        backgroundColor: "#2A2135",
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
    },
    cancelText: {
        color: "#000",
        textAlign: 'center',
    },
});