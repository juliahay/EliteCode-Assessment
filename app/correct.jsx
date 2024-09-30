import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Link, Redirect, router } from 'expo-router';
import React from 'react'

const badge = "JavaScript Master"

const Correct = () => {
  const handlePress = () => {
    router.push('/');
  }

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.textLayout}>
        <Text style={[styles.text, styles.top]}>Congratulations!</Text>
      </View>
      <View style={styles.textLayout}>
        <Text style={[styles.text, {lineHeight: 45}]}>
          You Earned the{"\n"}
          <Text style={styles.badge}>{badge}</Text>{"\n"}
          Badge
        </Text>
      </View>
      <View style={styles.textLayout}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={[styles.text, styles.buttonText]}>Continue</Text>
        </TouchableOpacity>
      </View>

      
    </SafeAreaView>
  )
}

export default Correct

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
  button: {
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
    },
    elevation: 8,
  },
  badge: {
    fontWeight: "bold",
    color: '#1D4FCE',
  },
  top: {
    color: "#1D4FCE",
    fontSize: 36,
    fontWeight: "bold",
  },
  buttonText: {
    color: 'white',
  },
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
  textLayout: {
    margin: 30,
  }
})