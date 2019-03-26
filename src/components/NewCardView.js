//TODO:
//Type: Standard stateful component
//
//UI
//Two text input fields ('Question' and 'Answer')
//A button to 'Add card'
//A 'Cancel' button
//A header 'Add new card'
//A Back arrow in header
//
//Functionality:
//State checking field input to effect Add button disabled
//(Char counters optional on fields)
//Add card button onClick  
//
//Data:
//NONE
//
//Props:
//Callback function

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class NewCardView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textstyle}>
          NewCardView
        </Text>
      </View>
    );
  }
}

export default NewCardView

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
});