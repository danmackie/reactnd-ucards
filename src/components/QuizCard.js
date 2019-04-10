import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import { pink, white } from '../utils/colors';

class QuizCard extends Component {
  state = {
    showQuestion: true
  }

  toggleQuestion = () => {
    this.setState(state => ({
      showQuestion: !state.showQuestion
    }))
  }

  render() {
    const { showQuestion } = this.state
    const { card, currentQ, totalcards } = this.props
    return (
      <Card style={styles.container}>
        <Card.Content style={styles.container}>
          <Title style={styles.title}>Card {currentQ + 1} of {totalcards}</Title>
          <View style={styles.cardview}>
            {this.state.showQuestion ?
              <Paragraph style={styles.cardbodytext}>
                {card.question}
              </Paragraph>
              : <Paragraph style={styles.cardbodytext}>
                {card.answer}
              </Paragraph>
            }
          </View>
          <Card.Actions>
            <Button mode="contained" style={styles.button} onPress={this.toggleQuestion}>{`See ${showQuestion ? "Answer" : "Question"}`}</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardview: {
    flex: 1,
  },
  cardbodytext: {
    fontFamily: 'sura',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: pink,
    color: white,
    paddingTop: 4,
    paddingBottom: 4,
    margin: 10,
  },
})

export default QuizCard