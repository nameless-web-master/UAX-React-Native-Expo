import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GlobalStyles } from '../../../../components/styles';
import { LinearMainBox } from '../../../../components/layout/linearMainBox';


const UploadBtn = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const pickFile = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("Permission required", "Allow access to upload files.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only images (adjust for videos)
            allowsEditing: false,
            quality: 0.7,
        });

        if (!result.canceled) {
            const file = result.assets[0];
            const fileInfo = await FileSystem.getInfoAsync(file.uri);

            // Check file type (PNG/JPG) and size (5MB)
            if (!file.uri.match(/\.(jpg|jpeg|png)$/i)) {
                Alert.alert("Invalid format", "Only PNG/JPG allowed.");
                return;
            }

            if (fileInfo.size > 5 * 1024 * 1024) {
                Alert.alert("File too large", "Max 5MB allowed.");
                return;
            }

            setSelectedFile({
                name: file.uri.split('/').pop(),
                size: (fileInfo.size / (1024 * 1024)).toFixed(2) + 'MB',
            });
        }
    };

    return (
        <LinearMainBox
            style={{
                ...styles.uploadButton,
                marginVertical: 28
            }}
            children={<View style={styles.container}>
                <TouchableOpacity
                    onPress={pickFile}
                    style={{ ...GlobalStyles.flex, flexDirection: 'column' }}
                >
                    <FontAwesome
                        name="upload"
                        size={34}
                        color="white"
                        style={{ marginBottom: 18 }}
                    />
                    <View style={{ ...GlobalStyles.flex }}>
                        <Text style={{
                            ...GlobalStyles.minTitle,
                            fontSize: 13
                        }}>
                            PNG, JPG, GIF, MP4, <Text style={{ color: '#E12DFF' }}>Max 5MB</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                {selectedFile && (
                    <Text style={styles.fileInfo}>
                        {selectedFile.name} • {selectedFile.size}
                    </Text>
                )}
            </View>}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    uploadButton: {
        width: '100%', // Adjust width to match your design
        borderWidth: 0.5,
        borderColor: '#FFFFFF24',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    buttonSubtext: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    fileInfo: {
        marginTop: 8,
        fontSize: 12,
        color: '#555',
    },
});

export default UploadBtn;