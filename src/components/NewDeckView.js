import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, Text } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { saveDeck } from "../utils/api";
import { pink, white } from "../utils/colors";
import { createNewDeckObject } from "../utils/helpers";

class NewDeckView extends Component {

  state = {
    title: ""
  }

  handleChange = title => {
    this.setState(() => ({
      title
    }))
  }

  resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })],
  })

  handleSubmit = () => {
    deck = createNewDeckObject(this.state.title)

    this.props.dispatch(addDeck(deck.id, deck.title, deck.bgcolor))
    saveDeck(deck)

    //Call to reset tab nav to NOT go back to new deck screen
    this.props.navigation.dispatch(this.resetAction)
    this.props.navigation.navigate("DeckView", {
      id: deck.id,
      deckname: deck.title
    })
    this.setState(() => ({
      title: ""
    }))
  }

  render() {
    const { title } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.textstyle}>Add your new deck</Text>
        <TextInput
          style={styles.input}
          label='Deck name'
          value={title}
          placeholder="Subject..."
          onChangeText={this.handleChange}
        />
        <Button style={styles.addbtn} mode="contained" onPress={this.handleSubmit}>
          Add deck
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeckView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textstyle: {
    fontSize: 32,
    fontFamily: 'sura-bold',
  },
  input: {
    backgroundColor: white,
    width: 350,
    height: 100,
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