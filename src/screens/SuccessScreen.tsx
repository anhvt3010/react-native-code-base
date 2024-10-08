import React from 'react';
import StatusScreen from './StatusScreen';
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";

type RootStackParamList = {
    Success: undefined;
};

type SuccessScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Success'>;

const SuccessScreen: React.FC = () => {
    const navigation = useNavigation<SuccessScreenNavigationProp>();
    return (
        <StatusScreen
            icon={require('../../assets/images/icon/checked.png')}
            title="Đăng ký vay thành công!"
            message="Khoản vay của bạn đang được tiếp nhận và xử lý."
            primaryButtonText="Trở về màn hình home"
            onPrimaryButtonPress={() => navigation.navigate('Home')}
        />
    );
};

export default SuccessScreen;