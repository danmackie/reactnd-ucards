export const ADD_DECK = 'ADD_DECK'
export const SET_DECKS = 'SET_DECKS'
export const ADD_CARD = 'ADD_CARD'

export function addDeck(id, title, bgcolor) {
  return {
    type: ADD_DECK,
    id,
    title,
    bgcolor,
  }
}

export function setDecks(decks) {
  return {
    type: SET_DECKS,
    decks,
  }
}

export function addCard(id, question, answer) {
  console.log('id = ', id);
  console.log('question = ', question);
  console.log('answer = ', answer);

  return {
    type: ADD_CARD,
    id,
    question,
    answer
  }
}
