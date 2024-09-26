import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

class LoginScreen extends React.Component<{ navigation: any }> {
    render() {
        let {navigation} = this.props;
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/logotrancent.png')} style={styles.logo}/>
                <Text style={styles.tagline}>Vay nhanh chóng, trả an tâm</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tài khoản"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập mật khẩu"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.linkContainer}>
                    <TouchableOpacity>
                        <Text style={styles.link}>Tạo tài khoản</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.link}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        {/*<Image source={require('../../assets/images/face-id-icon.png')} style={styles.icon} />*/}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {/*<Image source={require('../../assets/images/fingerprint-icon.png')} style={styles.icon} />*/}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

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
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#6B8E23',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    link: {
        color: '#6B8E23',
    },
    button: {
        backgroundColor: '#006400',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
    },
    icon: {
        width: 40,
        height: 40,
    },
});

export default LoginScreen;
