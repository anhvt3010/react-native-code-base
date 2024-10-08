import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RadioButtonListProps {
    items: { label: string; value: string }[];
    onSelect: (selectedItem: { label: string; value: string }) => void;
}

const RadioButtonList: React.FC<RadioButtonListProps> = ({ items, onSelect }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleSelect = (value: string) => {
        setSelectedValue(value);
    };

    const handleSubmit = () => {
        const selectedItem = items.find(item => item.value === selectedValue);
        if (selectedItem) {
            onSelect(selectedItem);
        }
    };

    return (
        <View style={styles.container}>
            {items.map(item => (
                <TouchableOpacity
                    key={item.value}
                    style={styles.radioButton}
                    onPress={() => handleSelect(item.value)}
                >
                    <View style={styles.circle}>
                        {selectedValue === item.value && <View style={styles.checkedCircle} />}
                    </View>
                    <Text style={styles.label}>{item.label}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Tiếp tục</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start', // Align items to the left
        paddingHorizontal: 20, // Add padding for better alignment
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    circle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#1C6642',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    checkedCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#1C6642',
    },
    label: {
        fontSize: 16,
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: '#1C6642',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default RadioButtonList;