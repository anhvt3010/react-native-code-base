import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.tagline}>Vay nhanh chóng, trả an tâm</Text>
            <Image source={require('../../assets/images/logo.png')} style={styles.profileIcon} />
            <Text style={styles.username}>TRAN THI THANH HA</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/images/register-loan-icon.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Đăng ký vay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/images/pay-loan-icon.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Thanh toán khoản vay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/images/calculate-loan-icon.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Tạm tính khoản vay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/images/bank-link-icon.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Liên kết ngân hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/images/query-loan-icon.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Truy vấn khoản vay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/images/location-icon.png')} style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Địa điểm thu chi hộ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomNavigation}>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/images/account-icon.png')} style={styles.navIcon} />
                    <Text style={styles.navLabel}>Tài khoản</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/images/loan-management-icon.png')} style={styles.navIcon} />
                    <Text style={styles.navLabel}>Quản lý vay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/images/home-icon.png')} style={styles.navIcon} />
                    <Text style={styles.navLabel}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/images/notification-icon.png')} style={styles.navIcon} />
                    <Text style={styles.navLabel}>Thông báo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/images/more-icon.png')} style={styles.navIcon} />
                    <Text style={styles.navLabel}>Khác</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0FFF0',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    tagline: {
        fontSize: 16,
        color: '#6B8E23',
        marginBottom: 20,
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
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '80%',
    },
    button: {
        backgroundColor: '#006400',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
        width: '40%',
    },
    buttonIcon: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#E0F7E0',
        paddingVertical: 10,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    navItem: {
        alignItems: 'center',
    },
    navIcon: {
        width: 30,
        height: 30,
    },
    navLabel: {
        fontSize: 12,
        color: '#006400',
    },
});

export default HomeScreen;
