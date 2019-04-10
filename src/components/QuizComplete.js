import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { gray, purple, white } from "../utils/colors";

const QuizComplete = (props) => {

  const { correct, incorrect, restartQuiz, navigation } = props

  return (
    <View style={styles.container}>
      <Text style={styles.header}>You scored</Text>
      <Text style={styles.result}>
        {`${Math.round((correct * 100) / (correct + incorrect))} %`}
      </Text>
      <View style={styles.actions}>
        <Button onPress={() => restartQuiz()}>Restart Quiz</Button>
        <Button
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: gray }}
        >
          Back to Deck
      </Button>
      </View>
    </View>
  )
}

export default QuizComplete

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  result: {
    fontSize: 70,
    color: purple,
    textAlign: "center"
  },
  actions: {
    marginTop: 50
  }
});
