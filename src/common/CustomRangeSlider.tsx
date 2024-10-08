import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slider } from 'react-native-range-slider-expo';

interface CustomRangeProps {
    type: string;
    title: string;
    min: number;
    max: number;
    step: number;
    unit: string;
    valueOnChange: (value: number) => void;
}

const CustomRangeSlider: React.FC<CustomRangeProps> = ({ type, title, min, max, step, unit, valueOnChange }) => {
    const [value, setValue] = useState((max + min) / 2);

    const multiplier = type === 'money' ? 1000000 : 1;

    const labelFormatter = (value: number) => {
        return `${(value * multiplier).toLocaleString()} ${unit}`;
    };

    const handleValueChange = (newValue: number) => {
        setValue(newValue);
        valueOnChange(newValue);
        console.log(newValue)
    };


    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.value}>{title}</Text>
                <Text style={styles.value}>{`${(value * multiplier).toLocaleString()} ${unit}`}</Text>
            </View>
            <View style={styles.sliderContainer}>
                <Slider
                    min={min}
                    max={max}
                    step={step}
                    valueOnChange={handleValueChange}
                    initialValue={(max + min) / 2}
                    knobColor="#006400"
                    valueLabelsBackgroundColor="black"
                    inRangeBarColor="gray"
                    outOfRangeBarColor="#006400"
                    showValueLabels={true}
                    showRangeLabels={false}
                    // labelFormatter={labelFormatter}
                />
                <View style={styles.labels}>
                    <Text>{labelFormatter(min)}</Text>
                    <Text>{labelFormatter(max)}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: '100%',
        alignItems: 'center',
    },
    sliderContainer: {
        marginBottom: 40,
        width: '100%',
        // alignItems: 'center',
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        alignItems: 'center'
    },
    labels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default CustomRangeSlider;