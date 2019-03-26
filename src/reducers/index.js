import { ADD_CARD, ADD_DECK, SET_DECKS } from '../actions';

const decks = (state = null, action) => {
  switch (action.type) {
    case SET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK: {
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          cards: []
        }
      };
    }
    case ADD_CARD: {
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          cards: [
            ...state[action.deckId].cards,
            { question: action.question, answer: action.answer }
          ]
        }
      };
    }
    default:
      return state;
  }
};

export default decks;
