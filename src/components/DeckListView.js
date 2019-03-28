import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, FAB } from 'react-native-paper';
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
        decks => this.props.dispatch(setDecks(decks))
      )
      .then(() => {
        this.setState({ loaded: true });
      })
  }

  render() {
    const { decks, navigation } = this.props
    const { loaded } = this.state

    // console.log('DeckListView >>> Decks = ', decks)

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
        //LOADING...
        <View style={styles.container_empty}>
          <Text style={styles.textstyle}>Loading your decks</Text>
          <ActivityIndicator size='large' style={styles.flatliststyle} animating={true} color={pink} />
        </View>
    )
  }
}

const mapStateToProps = decks => ({
  decks
});

export default connect(mapStateToProps)(DeckListView)

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