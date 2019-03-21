//TODO: Create representation for DeckList, click on deck in list opens it, FAB button + adds deck
//Type: Redux component
//
//UI
//Scrolling lazy load list of DeckStack comps
//FAB button to add new deck
//
//Functionality:
//FAB onClick => Goes to NewDeckView
//DeckStack onClick => Goes to DeckView
//
//Data:
//Array of deck objects - i.e all data
//
//Props:
//TBC

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { setDecks } from "../actions/";
import { getDecks } from "../utils/api";

class DeckListView extends Component {

  state = {
    loaded: false
  }

  componentDidMount() {
    getDecks()
      .then(
        decks => this.props.setDecks(decks)
      )
      .then(() => {
        this.setState({ loaded: true });
      })
  }

  render() {
    const { loaded } = this.state
    return (
      loaded
        ?
        <View>
          <Text style={styles.textstyle}>
            DeckListView
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
  decks
});

const mapDispatchToProps = dispatch => ({
  setDecks: decks => dispatch(setDecks(decks))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView)

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
});