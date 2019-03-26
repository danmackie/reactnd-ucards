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

export default QuizCard;

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
});
