import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; // Thêm dòng này

interface CustomDropDownListProps {
    items: { label: string; value: string }[];
    onValueChange: (value: string) => void;
    placeholder?: string;
    style?: ViewStyle;
}

const CustomDropDownList: React.FC<CustomDropDownListProps> = ({
       items,
       onValueChange,
       placeholder = "Select an option",
       style,
    }) => {
    return (
        <RNPickerSelect
            onValueChange={onValueChange}
            items={items}
            placeholder={{label: placeholder, value: null}}
            style={{
                ...pickerSelectStyles,
                inputIOS: style,
                inputAndroid: style,}}
        />
    );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#02542D', // Custom border color
        backgroundColor: '#F6FFF0', // Custom background color
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#02542D', // Custom border color
        backgroundColor: '#F6FFF0', // Custom background color
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default CustomDropDownList;