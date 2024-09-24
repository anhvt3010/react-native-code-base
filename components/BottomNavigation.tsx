import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const BottomNavigation: React.FC = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navItem}>
                <Image source={require('../../assets/images/account-icon.png')} style={styles.icon} />
                <Text style={styles.label}>Tài khoản</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Image source={require('../../assets/images/loan-management-icon.png')} style={styles.icon} />
                <Text style={styles.label}>Quản lý vay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Image source={require('../../assets/images/home-icon.png')} style={styles.icon} />
                <Text style={styles.label}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Image source={require('../../assets/images/notification-icon.png')} style={styles.icon} />
                <Text style={styles.label}>Thông báo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Image source={require('../../assets/images/more-icon.png')} style={styles.icon} />
                <Text style={styles.label}>Khác</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#E0F7E0',
        paddingVertical: 10,
    },
    navItem: {
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    },
    label: {
        fontSize: 12,
        color: '#006400',
    },
});

export default BottomNavigation;
