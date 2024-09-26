import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../../components/common/Button';
import CustomDialog from '../../components/common/CustomDialog';

// Định nghĩa kiểu cho các tham số của màn hình
type RootStackParamList = {
    Home: undefined;
    LoanRegistration: undefined;
    LoanTracking: undefined;
    NearbyLocations: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [isDialogVisible, setDialogVisible] = useState(false);

    const handleConfirm = () => {
        setDialogVisible(false);
        // Thực hiện hành động xác nhận
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Trancent Loan</Text>
            <Button title="Register Loan" onPress={() => navigation.navigate('LoanRegistration')} />
            <Button title="Track Loan" onPress={() => navigation.navigate('LoanTracking')} />
            <Button title="Find Nearby Locations" onPress={() => navigation.navigate('NearbyLocations')} />
            <Button title="Show Confirm Dialog" onPress={() => setDialogVisible(true)} />
            <CustomDialog
                visible={isDialogVisible}
                onClose={() => setDialogVisible(false)}
                onConfirm={handleConfirm}
                header="Confirm Action"
                content="Are you sure you want to perform this action?"
                showConfirmButtons={true}
            />
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
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;