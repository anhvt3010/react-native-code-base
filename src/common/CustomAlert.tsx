// src/components/common/CustomAlert.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

interface CustomAlertProps {
    visible: boolean;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    content: string;
    confirmType?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
                                                     visible,
                                                     type,
                                                     title,
                                                     content,
                                                     confirmType = false,
                                                     onConfirm,
                                                     onCancel,
                                                 }) => {
    const getColor = () => {
        switch (type) {
            case 'success':
                return 'green';
            case 'error':
                return 'red';
            case 'warning':
                return 'orange';
            case 'info':
                return 'blue';
            default:
                return 'gray';
        }
    };

    return (
        <Modal isVisible={visible}>
            <View style={[styles.modalView, { borderColor: getColor() }]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
                {confirmType ? (
                    <>
                        <Button title="Confirm" onPress={onConfirm} color={getColor()} />
                        <Button title="Cancel" onPress={onCancel} color="gray" />
                    </>
                ) : (
                    <Button title="OK" onPress={onConfirm} color={getColor()} />
                )}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default CustomAlert;