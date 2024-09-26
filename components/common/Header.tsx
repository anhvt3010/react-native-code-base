import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.tagline}>Vay nhanh chóng, trả an tâm</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#E0F7E0',
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagline: {
        fontSize: 16,
        color: '#6B8E23',
    },
});

export default Header;
