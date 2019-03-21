//TODO:
//Type: Redux component
//
//UI
//Two UI layouts - empty and a view with at least one card
//Empty view - Message text with FAB button to add card.
//Non-empty view - cardstack UI element with two buttons, 'Start quiz' and 'Delete deck' (optional), with add card FAB button at normal bottom left position. 
//
//Functionality:
//FAB add button - onClick goes to NewCardView
//Delete deck button (optional) - onClick prompts with dialog and then goes to DeckListView 
//Start quiz button - onClick goes to QuizView passing props
//
//Data:
//Deck object
//
//Props:
//TBC

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";

class DeckView extends Component {

  state = {
    hascards: false
  }

  render() {
    const { hascards } = this.state
    return (
      hascards
        ?
        <View>
          <Text style={styles.textstyle}>
            DeckView
          </Text>
        </View>
        :
        //TODO: ADD LOADER
        <View>
          <Text>Loading...</Text>
        </View>
    )
  }
}

const mapStateToProps = decks => ({
  //TODO: Get deck from key in decks
  deck: decks
});

export default connect(mapStateToProps)(DeckView)

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
});