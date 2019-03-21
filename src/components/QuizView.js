//TODO:
//Type: Stateful component
//
//UI
//QuizCard(s)
//Buttons for quiz
//QuizComplete component when all cards complete
//Header (with back button arrow - optional)
//
//Functionality:
//Shows n number of quizcards, shows number completed.
//Records number correct 
//Correct, Incorrect buttons advance to next card after recording result in state
//Quit button quits back to home (DeckListView)
//
//Data:
//NONE
//
//Props:
//Deck object
//
//State:
//Number of cards completed
//Number of cards correct

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class QuizView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textstyle}>
          QuizView
        </Text>
      </View>
    );
  }
}

QuizView.propTypes = {
  deck = PropTypes.object.isRequired,
}

export default QuizView

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
});