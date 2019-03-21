//TODO: Create deck representation for DeckListView, click opens deck
//Type: Functional stateless component
//
//UI
//1, 2 or 3 cards for that number of cards, and 3 cards to represent >3 cards in the deck
//a dotted line for 0 cards
//number of cards in deck
//name of deck
//stats (optional)
//
//Functionality:
//OnClick: Opens DeckView
//
//Data:
//None
//
//Props:
//Deck data fragments - deckname, numcards, [Stats (TBC/Optional)]
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DeckStack = () => {
  return (
    <View>
      <Text style={styles.textstyle}>
        DeckStack
      </Text>
    </View>
  );
};

DeckStack.propTypes = {
  numcards = PropTypes.number.isRequired,
  deckname = PropTypes.string.isRequired,
}

export default DeckStack;

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
});
