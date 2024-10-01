import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Animated, Easing, Button } from 'react-native'
import { Link, Redirect, router } from 'expo-router';
import { React, useRef } from 'react'

const hint = "Think about how JavaScript handles different data types"

const Incorrect = () => {
  const animation = useRef(null);
  const scale = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(1)).current;

  const buttonAnimation = () => {

    animation.current = Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.2,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ])

    animation.current.start();
  };


  const handlePress = () => {
    router.push('/');
  }

  setTimeout(buttonAnimation, 300)

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.textLayout}>
        <Text style={[styles.text, styles.top]}>Oops, not quite.</Text>
      </View>
      <View style={styles.textLayout}>
        <Text style={[styles.text, styles.hint]}>
          Hint: {hint}
        </Text>
      </View>
      <View style={styles.textLayout}>
        <Text style={[styles.text, styles.tryagain]}>Wanna try again?</Text>
        <Animated.View style={{transform: [{scale}]}}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={[styles.text, styles.buttonText]}>Retry</Text>
        </TouchableOpacity>
        </Animated.View>
      </View>

      
    </SafeAreaView>
  )
}

export default Incorrect

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
    flex: 1,
  },
  textLayout: {
    margin: 30,
  },
  hint: {
    fontWeight: '500'
  },
  tryagain: {
    marginBottom: 15,
  }
})