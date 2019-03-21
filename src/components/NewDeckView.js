//TODO:
//Type: Standard stateful component
//
//UI
//Single line text input field 'Deck name' (char counter limiter 50 optional)
//A button to 'Create'
//A 'Cancel' button
//A header 'Create new deck'
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

class NewDeckView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textstyle}>
          NewDeckView
        </Text>
      </View>
    );
  }
}

NewDeckView.propTypes = {
  callbackfunction = PropTypes.func.isRequired,
}

export default NewDeckView

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
});