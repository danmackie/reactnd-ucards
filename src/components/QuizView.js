import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-paper';
import { mid_green, pale_red, white } from "../utils/colors";
import { clearLocalNotification, getPlural, setLocalNotification } from "../utils/helpers";
import QuizCard from "./QuizCard";
import QuizComplete from './QuizComplete';

class QuizView extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('deck').title} Quiz`
  })

  state = {
    correct: 0,
    incorrect: 0,
    currentQ: 0,
    showresults: false,
    deck: this.props.navigation.getParam("deck"),
  }

  getRemainingCountMessage = () => {
    const { correct, incorrect } = this.state
    const qs = this.getDeck().cards.length - (correct + incorrect + 1)
    return `${qs} ${getPlural("question", qs)} remaining`
  }

  getDeck = () => {
    return this.props.navigation.getParam("deck")
  }

  restartQuiz = () => {
    this.setState({
      correct: 0,
      incorrect: 0,
      currentQ: 0,
      showresults: false
    })
  }

  recordAnswer = answer => {
    let {
      correct,
      incorrect,
      showresults,
      currentQ
    } = this.state

    answer ? correct++ : incorrect++;

    const deck = this.getDeck()
    if (currentQ === deck.cards.length - 1) {
      showresults = true
      clearLocalNotification()
      setLocalNotification()
    } else {
      currentQ++
    }

    this.setState(state => ({
      correct,
      incorrect,
      showresults,
      currentQ
    }))
  }

  render() {
    const { correct, incorrect, currentQ, showresults } = this.state
    console.log('deck = ', this.state.deck);
    return !showresults ? (
      <View style={styles.container}>
        <QuizCard
          card={this.getDeck().cards[currentQ]}
          currentQ={currentQ}
          totalcards={this.getDeck().cards.length}
        />
        <View style={styles.container}>
          <View style={styles.actions}>
            <Button
              mode="contained"
              style={[styles.answerbutton, { backgroundColor: mid_green }]}
              onPress={() => this.recordAnswer(true)}
            >
              Correct
            </Button>
            <Button
              mode="contained"
              style={[styles.answerbutton, { backgroundColor: pale_red }]}
              onPress={() => this.recordAnswer(false)}
            >
              Incorrect
            </Button>
          </View>
        </View>
      </View>
    ) : (
        <QuizComplete
          correct={correct}
          incorrect={incorrect}
          restartQuiz={this.restartQuiz}
          navigation={this.props.navigation}
        />
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
  },
  answerbutton: {
    paddingTop: 4,
    paddingBottom: 4,
    margin: 5,
    color: white,
  },
  textstyle: {
    fontFamily: 'sura-bold',
  },
})

export default QuizView
