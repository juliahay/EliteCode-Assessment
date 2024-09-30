import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, TouchableOpacity } from 'react-native';
import { Link, Redirect, router } from 'expo-router';

export const Submit = ({isCorrect}) => {
    const handlePress = (correct) => {
        if (correct) {
            router.push('/correct');
            console.log(correct)
        } else {
            router.push('/incorrect');
            console.log(correct)
        }
    }

    return (
        <TouchableOpacity style={styles.button} onPress={() => handlePress(isCorrect)}>
            <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        elevation: 8,
        backgroundColor: "#1D4FCE",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }

})