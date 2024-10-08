import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface MenuButtonProps {
    icon: string;
    label: string;
    onPress: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, label, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={{ uri: icon }} style={styles.icon} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1C6642B2',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        paddingHorizontal: 60,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    label: {
        color: 'white',
        fontSize: 16,
    },
});

export default MenuButton;