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
import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { pink, white } from "../utils/colors";

class NewCardView extends Component {

  state = {
    question: "",
    answer: "",
  }

  handleChangeQ = question => {
    this.setState(() => ({
      question
    }))
  }

  handleChangeA = answer => {
    this.setState(() => ({
      answer
    }))
  }

  render() {
    const { callbackAddCard } = this.props.navigation.getParam("callbackAddCard")
    // console.log('callbackAddCard = ', this.props.navigation.getParam("callbackAddCard"));

    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.textstyle}>Add your card</Text>
        <TextInput
          style={styles.input}
          value={question}
          label='Question'
          onChangeText={this.handleChangeQ}
        />
        <TextInput
          style={styles.input}
          value={answer}
          label='Answer'
          onChangeText={this.handleChangeA}
        />
        {/* <Button style={styles.addbtn} mode="contained"> */}
        <Button style={styles.addbtn} mode="contained" onPress={this.props.navigation.getParam("callbackAddCard")(question, answer)}>
          Add card
        </Button>
      </KeyboardAvoidingView >
    );
  }
}

export default NewCardView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textstyle: {
    fontSize: 32,
    fontFamily: 'sura-bold',
    // textAlign: 'center',
  },
  input: {
    backgroundColor: white,
    width: 350,
    // fontSize: 20,
    height: 100,
    // padding: 10,
    // borderRadius: 1,
    // borderColor: gray,
    // margin: 20,
  },
  addbtn: {
    backgroundColor: pink,
    paddingTop: 4,
    paddingBottom: 4,
    margin: 20,
    alignSelf: 'flex-end',
  },
  cancelbtn: {
    paddingTop: 4,
    paddingBottom: 4,
    margin: 20,
    alignSelf: 'flex-end',
  },
  right: {
    justifyContent: "flex-end",
  },
})