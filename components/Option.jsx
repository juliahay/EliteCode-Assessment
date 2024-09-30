import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, TouchableOpacity } from 'react-native';


export const Option = ({item, onPress, styleOption}) => {
    return ( 
        <Pressable onPress={onPress} style={[styles.button, styleOption ? styles.pressed : styles.notPressed]}>
            <Text style={[styleOption ? styles.textPressed : styles.text]}>{item.value}</Text>
        </Pressable>
   )
}

const styles = StyleSheet.create({
    button: {
        elevation: 8,
        borderRadius: 10,
        padding: 10,
        marginVertical: 25,
        marginHorizontal: 16,
        width: 300,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
    },
    pressed: {
        backgroundColor: "#D6D6D6",
        shadowColor: "#1D4FCE",
        borderColor: "#1D4FCE",
        borderWidth: 4,
    }, 
    notPressed: {
        shadowColor: "#000000",
        backgroundColor: "#D6D6D6",
        borderColor: 'rgba(150, 150, 150, 0)',
        borderWidth: 4,
    },
    text: {
        fontSize: 24,
        color: "#000000",
        fontWeight: "bold",
        alignSelf: "center",
    },
    textPressed: {
        fontSize: 24,
        color: "#1D4FCE",
        fontWeight: "bold",
        alignSelf: "center",
    }
})