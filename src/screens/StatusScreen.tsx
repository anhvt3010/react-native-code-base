import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface StatusScreenProps {
    icon: any; // Use require for local images
    title: string;
    message: string;
    primaryButtonText: string;
    secondaryButtonText?: string;
    onPrimaryButtonPress: () => void;
    onSecondaryButtonPress?: () => void;
}

const StatusScreen: React.FC<StatusScreenProps> = ({
                                                       icon,
                                                       title,
                                                       message,
                                                       primaryButtonText,
                                                       secondaryButtonText,
                                                       onPrimaryButtonPress,
                                                       onSecondaryButtonPress,
                                                   }) => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
            <TouchableOpacity style={styles.primaryButton} onPress={onPrimaryButtonPress}>
                <Text style={styles.buttonText}>{primaryButtonText}</Text>
            </TouchableOpacity>
            {secondaryButtonText && onSecondaryButtonPress && (
                <TouchableOpacity style={styles.secondaryButton} onPress={onSecondaryButtonPress}>
                    <Text style={styles.buttonText}>{secondaryButtonText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    icon: {
        width: 80,
        height: 80,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1C6642',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
    },
    primaryButton: {
        backgroundColor: '#1C6642',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
        alignItems: 'center',
    },
    secondaryButton: {
        backgroundColor: '#1C6642',
        padding: 15,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default StatusScreen;