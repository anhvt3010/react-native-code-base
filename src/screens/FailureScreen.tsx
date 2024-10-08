import React from 'react';
import StatusScreen from './StatusScreen';
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

type RootStackParamList = {
    Failure: undefined;
};

type FailureScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Failure'>;

const FailureScreen: React.FC = () => {
    const navigation = useNavigation<FailureScreenNavigationProp>();
    return (
        <StatusScreen
            icon={require('../../assets/images/icon/unchecked.png')}
            title="Đăng ký vay thất bại!"
            message="Đăng ký không thành công do mang lỗi vi phạm..."
            primaryButtonText="Đăng ký lại"
            secondaryButtonText="Trở về màn hình home"
            onPrimaryButtonPress={() => console.log('Retry registration')}
            onSecondaryButtonPress={() => navigation.navigate('Home')}
        />
    );
};

export default FailureScreen;