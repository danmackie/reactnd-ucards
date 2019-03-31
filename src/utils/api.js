import { AsyncStorage } from "react-native";

let TESTMODE = false
//DUMMY DATA
const getDummyData = () => {
  let dummydecks = {
    123: {
      id: '123',
      title: 'React',
      bgcolor: '#3472aa',
      cards: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    456: {
      id: '456',
      title: 'Mr Blobby',
      bgcolor: '#44aa21',
      cards: []
    },
    789: {
      id: '789',
      title: 'JavaScript',
      bgcolor: '#72abcd',
      cards: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
  !TESTMODE
  return dummydecks
}

export const STORAGE_KEY = "Udacity:Storagekey"

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    // console.log('API getDecks: ', data)
    return TESTMODE ? getDummyData() : data
  })
}

export const saveDeck = deck => {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  )
}

export const saveCard = (id, question, answer) => {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    console.log('id = ', id);
    console.log('question = ', question);
    console.log('answer = ', answer);
    console.log('data = ', data);

    data[id] = {
      ...data[id],
      cards: [
        ...data[id].cards,
        { question: question, answer: answer }
      ]
    }

    // Save updated deck data back to storage
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  })
}