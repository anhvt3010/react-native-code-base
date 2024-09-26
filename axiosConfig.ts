import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert } from 'react-native';
import {API_ROOT} from "./src/utils/constants";

const axiosInstance = axios.create({
    baseURL: API_ROOT,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            // Lỗi từ phía máy chủ
            Alert.alert('Error', error.response.data.message || 'An error occurred');
            if (error.response.status === 401) {
                // Xử lý lỗi token hết hạn, ví dụ: đăng xuất người dùng
                AsyncStorage.removeItem('token');
                // Điều hướng người dùng đến màn hình đăng nhập
                // Ví dụ: navigation.navigate('SignIn');
            }
        } else if (error.request) {
            // Không có phản hồi từ máy chủ
            Alert.alert('Error', 'No response received');
        } else {
            // Lỗi khác
            Alert.alert('Error', `Error: ${error.message}`);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

//     Cấu hình Axios: Tạo một instance của Axios với các interceptor cho request và response.
//     Sử dụng AsyncStorage: Sử dụng AsyncStorage để lưu trữ và lấy token thay vì localStorage.
//     Xử lý lỗi: Sử dụng Alert để hiển thị thông báo lỗi cho người dùng.
//     Sử dụng axiosInstance: Sử dụng instance của Axios trong các hàm gọi API.