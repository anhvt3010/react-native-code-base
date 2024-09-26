import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProfileSection: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/profile-icon.png')} style={styles.profileIcon} />
            <Text style={styles.username}>TRAN THI THANH HA</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Khóa tài khoản</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Xóa tài khoản</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F0FFF0',
    },
    profileIcon: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    username: {
        fontSize: 18,
        color: '#000',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#006400',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default ProfileSection;
