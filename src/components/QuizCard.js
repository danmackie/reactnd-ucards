//TODO:
//Type: Functional stateless component
//
//UI
//Card BG with two colors - mid_green and grey_blue
//
//Functionality:
//Flip button onClick toggle question/answer (optional flip animation)
//
//Data:
//NONE
//
//Props:
//Question, Answer

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const QuizCard = () => {
  return (
    <View>
      <Text style={styles.textstyle}>
        QuizCard
      </Text>
    </View>
  );
};

QuizCard.propTypes = {
  question = PropTypes.string.isRequired,
  answer = PropTypes.string.isRequired,
}

export default QuizCard;

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
});
