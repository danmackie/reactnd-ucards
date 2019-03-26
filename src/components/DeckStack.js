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
import * as React from 'react';
import { StyleSheet } from "react-native";
import { Card, Title } from 'react-native-paper';
import { getPlural } from '../utils/helpers';

const DeckStack = ({ bgcolor, navigation, numcards, deckname, id }) => (
  <Card
    onPress={() => {
      navigation.navigate("DeckView", { id: id, deckname: deckname })
    }}
    style={styles.card}
  >
    <Card.Content>
      <Title style={styles.title}>{deckname}</Title>
      <Title style={styles.titlenum}>{`${numcards} ${getPlural("card", numcards)}`}</Title>
    </Card.Content>
    <Card.Cover style={{ backgroundColor: bgcolor }} />
  </Card>
)

export default DeckStack;

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
    padding: 4,
    justifyContent: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
  },
  titlenum: {
    fontSize: 22,
    color: '#aaaaaa',
  },
});
