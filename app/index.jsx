import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Submit } from '../components/Submit';
import { Question } from '../components/Question';
import { Option } from '../components/Option';

const question = "What is the output of the following code: \n\n" + "console.log(1 + \"2\" + \"2\");"
const answers = [
    { id: 1, value: 122,},
    { id: 2,value: 32,},
    { id:3, value: 44,},
    { id: 4, value: "NaN",}
]
const solution = 122;


export default function App() {
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedID, setSelectedID] = useState(null);
  
  
    
  function handlePress(value, id) {
    if (value == solution) {
        setCorrectAnswer(true);
    } else {
        setCorrectAnswer(false); 
    }
    setSelectedID(id);
  }

  const renderItem = ({item}) => {
    const s = item.id === selectedID ? true : false;

    return (
      <Option
        item={item}
        onPress={() => handlePress(item.value, item.id)}
        styleOption={s}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.layout]}>
      <View style={[styles.boxes, styles.question]}>
        <Question question={question}/>
      </View>
      <View style={[styles.boxes, styles.answers]}>
        <FlatList 
            style={styles.flatlist}
            contentContainerStyle={{alignItems: 'center'}}
            data={answers}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedID}
        />
      </View>
      <View style={[styles.boxes, styles.submit]}>
        <Submit isCorrect={correctAnswer}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxes : {
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    flex: 2,
    width: '100%',
  },
  answers: {
    flex: 4,
    width: '100%',
  },
  submit: {
    flex: 1,
    width: '100%',
  },
  flatlist: {
    width: '100%',
  }
});