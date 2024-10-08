import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuButton from './MenuButton'; // Adjust the path as needed

interface MenuItem {
    icon: string;
    label: string;
    onPress: () => void;
}

interface MenuListProps {
    items: MenuItem[];
}

const MenuList: React.FC<MenuListProps> = ({ items }) => {
    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <MenuButton
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    onPress={item.onPress}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default MenuList;