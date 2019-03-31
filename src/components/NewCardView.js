import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { connect } from "react-redux";
import { addCard } from "../actions";
import { saveCard } from "../utils/api";
import { pink, white } from "../utils/colors";

class NewCardView extends Component {

  state = {
    question: "",
    answer: "",
  }

  static navigationOptions = () => ({
    title: 'Add card'
  })

  handleAddCard = () => {
    id = this.props.navigation.getParam("deckId")
    const { question, answer } = this.state

    this.props.dispatch(addCard(id, question, answer))
    saveCard(id, question, answer)

    this.props.navigation.goBack()

    //Reset state
    this.setState({
      question: "",
      answer: ""
    })
  }

  render() {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.textstyle}>Add your card</Text>
        <TextInput
          style={styles.input}
          value={question}
          label='Question'
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={styles.input}
          value={answer}
          label='Answer'
          onChangeText={answer => this.setState({ answer })}
        />
        <Button style={styles.addbtn} mode="contained" onPress={this.handleAddCard}>
          Add card
        </Button>
      </KeyboardAvoidingView >
    )
  }
}

export default connect()(NewCardView)

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