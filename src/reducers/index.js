import { ADD_CARD, ADD_DECK, SET_DECKS } from '../actions';

const decks = (state = null, action) => {
  switch (action.type) {
    case SET_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK: {
      return {
        ...state,
        [action.id]: {
          id: action.id,
          title: action.title,
          bgcolor: action.bgcolor,
          cards: []
        }
      }
    }
    case ADD_CARD: {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          cards: [
            ...state[action.id].cards,
            { question: action.question, answer: action.answer }
          ]
        }
      }
    }
    default:
      return state
  }
}

export default decks
