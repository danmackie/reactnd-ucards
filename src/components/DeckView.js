//TODO:
//Type: Redux component
//
//UI
//Two UI layouts - empty and a view with one card to represent all cards.
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
import { Button, FAB } from 'react-native-paper';
import { connect } from "react-redux";
import SingleCard from '../components/SingleCard';
import { pink, white } from '../utils/colors';

class DeckView extends Component {

  state = {
    hascards: false
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("deckname")
  })

  componentDidMount() {
    this.setState({ hascards: this.props.deck.cards.length > 0 });
  }

  render() {
    const { hascards } = this.state
    const { deck } = this.props

    return (
      hascards
        ?
        <View style={styles.container}>
          <SingleCard bgcolor={deck.bgcolor} numcards={deck.cards.length} />
          <Button style={styles.startquizbtn} mode="contained" onPress={() => console.log('Pressed')}>
            Start quiz
          </Button>
          <FAB
            style={styles.fab}
            color={white}
            label='Add card'
            icon="add"
            onPress={() => console.log('Pressed')}
          />
        </View>
        :
        <View>
          <Text>Loading...</Text>
        </View>
    )
  }
}

const mapStateToProps = (state, { navigation }) => {
  return {
    deck: state[navigation.getParam("id")]
  }
}

export default connect(mapStateToProps)(DeckView)

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: 'sura-bold',
  },
  startquizbtn: {
    backgroundColor: pink,
    paddingTop: 4,
    paddingBottom: 4,
    margin: 10,
  },
  container: {
    flex: 1,
    padding: 6,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    color: white,
    backgroundColor: pink,
  },
})