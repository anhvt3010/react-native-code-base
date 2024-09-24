import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
};

const ConfirmationDialog: React.FC<Props> = ({ message, onCancel, onConfirm }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                    <Text style={styles.buttonText}>Hủy bỏ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
                    <Text style={styles.buttonText}>Đồng ý</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        alignItems: 'center',
    },
    message: {
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#006400',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    confirmButton: {
        backgroundColor: '#006400',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#006400',
        fontSize: 16,
    },
});

export default ConfirmationDialog;
