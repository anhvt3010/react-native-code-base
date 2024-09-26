import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

// Định nghĩa kiểu cho các tham số của màn hình
type RootStackParamList = {
    LoanRegistration: { amount: string; term: string };
    Home: undefined;
};

type LoanRegistrationScreenRouteProp = RouteProp<RootStackParamList, 'LoanRegistration'>;
type LoanRegistrationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoanRegistration'>;

const LoanRegistrationScreen: React.FC = () => {
    const route = useRoute<LoanRegistrationScreenRouteProp>();
    const navigation = useNavigation<LoanRegistrationScreenNavigationProp>();
    const { amount, term } = route.params || { amount: '', term: '' }; // Đảm bảo giá trị mặc định
    const [loanData, setLoanData] = useState({ amount: '', term: '' });

    useEffect(() => {
        if (amount && term) {
            setLoanData({ amount, term });
        }
    }, [amount, term]);

    const handleRegister = async () => {
        try {
            // await createLoan(loanData);
            alert('Loan registered successfully!');
            navigation.navigate('Home'); // Quay lại màn hình chính
        } catch (error) {
            alert('Failed to register loan.');
        }
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder="Loan Amount"
                value={loanData.amount}
                onChangeText={(text) => setLoanData({ ...loanData, amount: text })}
            />
            <Input
                placeholder="Loan Term"
                value={loanData.term}
                onChangeText={(text) => setLoanData({ ...loanData, term: text })}
            />
            <Button title="Register Loan" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default LoanRegistrationScreen;