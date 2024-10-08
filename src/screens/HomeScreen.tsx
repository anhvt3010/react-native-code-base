import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../../components/common/Button';
import CustomDialog from '../../components/common/CustomDialog';
import CustomAlert from "../common/CustomAlert";
import {showMessage} from "react-native-flash-message";

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

    // const handleConfirm = () => {
    //     setDialogVisible(false);
    //     // Thực hiện hành động xác nhận
    // };

    const [showAlert, setShowAlert] = useState(false);

    const handleConfirm = () => {
        console.log('Confirmed!');
        setShowAlert(false);
    };

    const handleCancel = () => {
        console.log('Cancelled!');
        setShowAlert(false);
    };

    const showSuccessMessage = () => {
        showMessage({
            message: "Success",
            description: "Product added successfully!",
            type: "success",
            icon: "success",
        });
    };

    const showErrorMessage = () => {
        showMessage({
            message: "Error",
            description: "Something went wrong!",
            type: "danger",
            icon: "danger",
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Trancent Loan</Text>
            <Button title="Register Loan" onPress={() => navigation.navigate('LoanRegistration')} />
            <Button title="Track Loan" onPress={() => navigation.navigate('LoanTracking')} />
            <Button title="Find Nearby Locations" onPress={() => navigation.navigate('NearbyLocations')} />
            <Button title="Show Confirm Dialog" onPress={() => setDialogVisible(true)} />
            <Text>Custom dialog</Text>
            <CustomDialog
                visible={isDialogVisible}
                onClose={() => setDialogVisible(false)}
                onConfirm={handleConfirm}
                header="Confirm Action"
                content="Are you sure you want to perform this action?"
                showConfirmButtons={true}
            />
            <Button title="Show Confirm Alert" onPress={() => setShowAlert(true)} />
            <CustomAlert
                visible={showAlert}
                type="success"
                title="Success"
                content="Product added successfully!"
                confirmType={true}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
            <Text style={styles.title}>Welcome to Trancent Loan</Text>
            <Button title="Show Success Message" onPress={showSuccessMessage} />
            <Button title="Show Error Message" onPress={showErrorMessage} />
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