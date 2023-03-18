import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

export const BlackButton = ({ title, onPress, style = {} }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={{
                ...style as any,
                ...styles.blackButton,
            }}
        >

            <Text style={styles.buttonText}>
                {title}
            </Text>

        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    blackButton: {
        marginTop: 20,
        height: 50,
        width: 170,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

        //SOMBRA

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        elevation: 6,

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },

});
