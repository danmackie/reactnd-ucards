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

export default DeckStack

const styles = StyleSheet.create({
  card: {
    margin: 4,
    padding: 4,
    justifyContent: "center",
    borderRadius: 5,
  },
  title: {
    paddingTop: 7,
    fontFamily: 'sura-bold',
    fontSize: 32,
  },
  titlenum: {
    fontSize: 22,
    color: '#aaaaaa',
  },
})
