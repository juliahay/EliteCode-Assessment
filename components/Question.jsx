import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export const Question = ({question}) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{question}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        elevation: 8,
        backgroundColor: "#F3F3F3",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '80%',
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    text: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    }
})