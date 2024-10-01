import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import { Link, Redirect, router } from 'expo-router';
import { React, useRef } from 'react'
import LottieView from 'lottie-react-native'

const badge = "JavaScript Master"

const Correct = () => {
  const animation = useRef(null);
  const scale = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {

    animation.current = Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.4,
        duration: 500,
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

  setTimeout(startAnimation, 200)

  return (
    <SafeAreaView style={styles.layout}>
      <Animated.View style={[styles.textLayout, {transform: [{scale}]}]}>
        <Text style={[styles.text, styles.top]}>Congratulations!</Text>
      </Animated.View>
      
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

      <LottieView 
        style={styles.animation}
        source={require('../assets/confetti.json')}
        autoPlay
        loop={false}
        resizeMode='cover'
      />
      
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
    backgroundColor: 'transparent',
    flex: 1,
  },
  textLayout: {
    margin: 30,
  },
  animation: {
    top: 0, right: 0, left: 0, bottom: 0,
    zIndex: 1000,
    position: 'absolute',
    pointerEvents: 'none',
  }
})