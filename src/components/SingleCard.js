import React from 'react';
import { StyleSheet } from "react-native";
import { Card, Title } from 'react-native-paper';
import { getPlural } from '../utils/helpers';

const SingleCard = ({ bgcolor, numcards }) => (
  <Card style={styles.card}>
    <Card.Content>
      <Title style={styles.titlenum}>{`${numcards} ${getPlural("card", numcards)}`}</Title>
    </Card.Content>
    <Card.Cover style={{ backgroundColor: bgcolor }} />
  </Card>
)

export default SingleCard;

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
  titlenum: {
    fontSize: 22,
    color: '#aaaaaa',
  },
});
