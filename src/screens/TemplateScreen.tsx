import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomButton from '../common/CustomButton';
import CustomAlert from '../common/CustomAlert';
import { showMessage } from 'react-native-flash-message';
import CustomDropDownList from '../common/CustomDropDownList';
import CustomDialog from "../../components/common/CustomDialog";
import CustomRangeSlider from "../common/CustomRangeSlider";
import StoreButton from "../common/StoreButton";
import MenuButton from "../common/MenuButton";
import MenuList from "../common/MenuList";
import RadioButtonList from "../common/RadioButtonList";

// Define types for screen parameters
type RootStackParamList = {
    Home: undefined;
    LoanRegistration: undefined;
    LoanTracking: undefined;
    NearbyLocations: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const TemplateScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    // State to hold slider values
    const [moneyValue, setMoneyValue] = useState(0);
    const [termValue, setTermValue] = useState(0);

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

    const handlePress = () => {
        console.log('Button Pressed!');
    };

    const handleToggleFavorite = () => {
        console.log('Favorite toggled!');
    };

    const menuItems = [
        { icon: 'https://via.placeholder.com/150', label: 'Các dịch vụ khác', onPress: () => console.log('Các dịch vụ khác') },
        { icon: 'https://via.placeholder.com/150', label: 'Cài đặt', onPress: () => console.log('Cài đặt') },
        { icon: 'https://via.placeholder.com/150', label: 'Liên kết', onPress: () => console.log('Liên kết') },
        { icon: 'https://via.placeholder.com/150', label: 'Tài liệu', onPress: () => console.log('Tài liệu') },
        { icon: 'https://via.placeholder.com/150', label: 'Phiên bản', onPress: () => console.log('Phiên bản') },
        { icon: 'https://via.placeholder.com/150', label: 'Hỗ trợ', onPress: () => console.log('Hỗ trợ') },
    ];

    const items = [
        { label: 'Sản phẩm vay từ lương', value: 'salary' },
        { label: 'Sản phẩm vay từ hóa đơn', value: 'invoice' },
        { label: 'Sản phẩm vay hộ kinh doanh (Tiểu thương)', value: 'business' },
        { label: 'Sản phẩm vay theo hợp đồng bảo hiểm nhân thọ', value: 'insurance' },
    ];

    const handleSelect = (selectedItem: { label: string; value: string }) => {
        Alert.alert('Selected Item', `Label: ${selectedItem.label}, Value: ${selectedItem.value}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Custom Satatus Screen </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Success')}>
                <Text style={styles.buttonText}>Check Success</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Failure')}>
                <Text style={styles.buttonText}>Check Failure</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Custom MenuButton </Text>
            <RadioButtonList items={items} onSelect={handleSelect} />

            <Text style={styles.title}>Custom MenuButton </Text>
            <MenuList items={menuItems} />

            <Text style={styles.title}>Custom StoreButton</Text>
            <StoreButton
                logo="https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-fpt-inkythuatso-1-01-01-14-33-35.jpg"
                address="Số 25 Cầu Giấy, Hà Nội"
                distance="1,1km"
                isFavorite={false}
                onPress={handlePress}
                onToggleFavorite={handleToggleFavorite}
            />
            <StoreButton
                logo="data:image/jpeg;base64,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"
                address="Số 291 Cầu Giấy, Hà Nội"
                distance="2,3km"
                isFavorite={true}
                onPress={handlePress}
                onToggleFavorite={handleToggleFavorite}
            />

            <Text style={styles.title}>Custom DropDownList</Text>
            <CustomDropDownList
                items={[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                    { label: 'Option 3', value: '3' },
                ]}
                onValueChange={(value) => setSelectedValue(value)}
                placeholder="Select an option"
            />

            <Text style={styles.title}>Custom Range</Text>
            <CustomRangeSlider
                type={"money"}
                title="Số tiền vay"
                min={10}
                max={100}
                step={5}
                unit="đ"
                valueOnChange={setMoneyValue}
            />

            <CustomRangeSlider
                type={"term"}
                title="Thời hạn vay"
                min={3}
                max={15}
                step={3}
                unit="tháng"
                valueOnChange={setTermValue}
            />

            <Text style={styles.title}>Welcome to Trancent Loan</Text>
            <CustomButton title="Register Loan" onPress={() => navigation.navigate('LoanRegistration')} />
            <CustomButton title="Track Loan" onPress={() => navigation.navigate('LoanTracking')} />
            <CustomButton title="Find Nearby Locations" onPress={() => navigation.navigate('NearbyLocations')} />

            <Text style={styles.title}>Custom Dialog</Text>
            <CustomButton title="Show Confirm Dialog" onPress={() => setDialogVisible(true)} />
            <CustomDialog
                visible={isDialogVisible}
                onClose={() => setDialogVisible(false)}
                onConfirm={handleConfirm}
                header="Confirm Action"
                content="Are you sure you want to perform this action?"
                showConfirmButtons={true}
            />
            <CustomButton title="Show Confirm Alert" onPress={() => setShowAlert(true)} />
            <Text style={styles.title}>Custom Alert</Text>
            <CustomAlert
                visible={showAlert}
                type="success"
                title="Success"
                content="Product added successfully!"
                confirmType={true}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
            <Text style={styles.title}>Custom Message</Text>
            <CustomButton title="Show Success Message" onPress={showSuccessMessage} />
            <CustomButton title="Show Error Message" onPress={showErrorMessage} />


            <CustomButton title="Click Me" onPress={handlePress} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1C6642',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default TemplateScreen;