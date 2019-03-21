//TODO:
//Type: Functional stateless component
//
//UI
//H1 text of 'Quiz complete!'
//Body text of example 'You got 1 out of 1 correct, that’s 100%!'
//Two buttons - 'Start again' and 'Back to deck'
//
//Functionality:
//'Start again' onClick - callback to handle
//'Back to deck' onClick - callback to handle
//  
//Data:
//NONE
//
//Props:
//Total cards and total correct from QuizView state

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { pink } from "../utils/colors";

const QuizComplete = (props) => {

  const { totalcards, totalcorrect, restartQuiz, backToDeck } = props

  //PLACEHOLDER VALUES
  // totalcards = 7
  // totalcorrect = 5

  const getPercentage = () => {
    return totalcorrect / totalcards * 100
  }

  return (
    <View>
      <Text style={styles.textstyle}>
        Quiz complete!
      </Text>
      <Text style={styles.textstyle}>
        You got {totalcorrect} correct, that's {getPercentage()}%
      </Text>
      <View style={styles.actions}>
        <StyledButton
          onPress={() => restartQuiz()}
          style={{ backgroundColor: pink }}
        >
          Start again
        </StyledButton>
        <StyledButton
          onPress={() => backToDeck()}
          style={{ backgroundColor: pink }}
        >
          Back to deck
      </StyledButton>
      </View>
    </View>
  );
};

QuizComplete.propTypes = {
  totalcards = PropTypes.number.isRequired,
  totalcorrect = PropTypes.number.isRequired,
  restartQuiz = PropTypes.func.isRequired,
  backToDeck = PropTypes.func.isRequired,
}

export default QuizComplete;

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
  buttongroup: {
    marginTop: 50
  }
});
