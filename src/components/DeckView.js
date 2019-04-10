import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FAB } from 'react-native-paper';
import { connect } from "react-redux";
import SingleCard from '../components/SingleCard';
import { pink, white } from '../utils/colors';

class DeckView extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("deckname")
  })

  handleAddCard = () => {
    const { deck } = this.props
    this.props.navigation.navigate("NewCardView", { deckId: deck.id })
  }

  handleStartQuiz = () => {
    const { deck } = this.props
    this.props.navigation.navigate("QuizView", { deck: deck })
  }

  render() {
    const { deck, hascards } = this.props
    return (
      hascards
        ?
        <View style={styles.container}>
          <SingleCard bgcolor={deck.bgcolor} numcards={deck.cards.length} />
          <Button
            style={styles.startquizbtn}
            mode="contained"
            onPress={this.handleStartQuiz}
          >
            Start quiz
          </Button>
          <FAB
            style={styles.fab}
            color={white}
            label='Add card'
            icon="add"
            onPress={this.handleAddCard}
          />
        </View>
        :
        //LOADING...
        <View style={styles.container_empty}>
          <Text style={styles.textstyle}>Your deck is empty, add your first card!</Text>
          <FAB
            style={styles.fabempty}
            color={white}
            label='Add card'
            icon="add"
            onPress={this.handleAddCard}
          />
        </View>
    )
  }
}

const mapStateToProps = (state, { navigation }) => {
  return {
    deck: state[navigation.getParam("id")],
    hascards: state[navigation.getParam("id")].cards.length > 0
  }
}

export default connect(mapStateToProps)(DeckView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
  },
  container_empty: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  paddout: {
    padding: 10,
  },
  textstyle: {
    fontSize: 32,
    fontFamily: 'sura-bold',
    textAlign: 'center',
  },
  startquizbtn: {
    backgroundColor: pink,
    paddingTop: 4,
    paddingBottom: 4,
    margin: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    color: white,
    backgroundColor: pink,
  },
  fabempty: {
    marginTop: 20,
    alignSelf: 'center',
    width: 150,
    color: white,
    backgroundColor: pink,
  },
})