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
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { connect } from "react-redux";
import { setDecks } from "../actions/";
import { getDecks } from "../utils/api";
import { pink, white } from '../utils/colors';
import DeckStack from "./DeckStack";

class DeckListView extends Component {

  state = {
    loaded: false,
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
    const { decks, navigation } = this.props
    const { loaded } = this.state

    // console.log('DeckLostView >>> Decks = ', decks)

    return (
      loaded
        ?
        Object.values(decks).length > 0
          ?
          <View style={styles.container}>
            <FlatList
              style={styles.flatliststyle}
              data={Object.values(decks)}
              keyExtractor={(item, index) => item.title}
              renderItem={({ item }) => (
                <DeckStack
                  id={item.id}
                  bgcolor={item.bgcolor}
                  deckname={item.title}
                  numcards={item.cards.length}
                  navigation={this.props.navigation}
                />
              )}
            />
          </View>
          :
          <View style={styles.container_empty}>
            <View style={styles.container_empty_inner}>
              <Text style={styles.textstyle}>You don't have any decks!</Text>
              <FAB
                style={styles.fab}
                color={white}
                label='Add deck'
                icon="add"
                onPress={() => navigation.navigate('NewDeckView')}
              />
            </View>
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
  container: {
    flex: 1,
  },
  container_empty: {
    flex: 1,
    justifyContent: 'center',
  },
  container_empty_inner: {
    alignItems: 'center',
  },
  flatliststyle: {
    padding: 10,
  },
  textstyle: {
    fontSize: 32,
    fontFamily: 'sura-bold',
    textAlign: 'center',
  },
  fab: {
    width: 200,
    marginTop: 30,
    color: white,
    backgroundColor: pink,
  },
})