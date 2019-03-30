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

import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, Text } from "react-native";
// import { KeyboardAvoidingView, StyleSheet, Text, TextInput } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { saveDeck } from "../utils/api";
import { pink, white } from "../utils/colors";
import { createNewDeckObject } from "../utils/helpers";

class NewDeckView extends Component {

  state = {
    title: ""
  }

  handleChangeQ = title => {
    this.setState(() => ({
      title
    }))
  }

  handleCancel = () => {
    //TODO:
  }

  handleSubmit = () => {
    //create empty deck with title from state
    deck = createNewDeckObject(this.state.title)

    this.props.dispatch(addDeck(deck.id, deck.title, deck.bgcolor))
    saveDeck(deck)
    // navigation.navigate("DeckView", { id: id, deckname: deckname })
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
        {/* <View style={styles.right}>
          <Button style={styles.cancelbtn} mode="text" onPress={this.handleCancel}>
            Cancel
          </Button> */}
        <Button style={styles.addbtn} mode="contained" onPress={this.handleSubmit}>
          Add deck
        </Button>
        {/* </View> */}
      </KeyboardAvoidingView>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   createDeck: (id, deckName) => dispatch(addDeck(id, deckName))
// })

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