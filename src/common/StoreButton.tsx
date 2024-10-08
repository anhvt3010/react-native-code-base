import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface StoreButtonProps {
    logo: string;
    address: string;
    distance: string;
    isFavorite: boolean;
    onPress: () => void;
    onToggleFavorite: () => void;
}

const StoreButton: React.FC<StoreButtonProps> = ({ logo, address, distance, isFavorite, onPress, onToggleFavorite }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: logo }} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.distance}>{distance}</Text>
            </View>
            <TouchableOpacity onPress={onToggleFavorite}>
                <Image
                    source={isFavorite
                        ? require('../../assets/images/icon/star_added_favorite.png')
                        : require('../../assets/images/icon/add_favorite.png')}
                    style={styles.favoriteIcon}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#F6FFF0',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#02542D',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    address: {
        fontSize: 16,
        color: '#333',
    },
    distance: {
        fontSize: 14,
        color: '#007BFF',
    },
    favoriteIcon: {
        width: 24,
        height: 24,
    },
});

export default StoreButton;