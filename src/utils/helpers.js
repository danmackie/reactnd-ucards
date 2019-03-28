import { getRandomColor } from './colors';

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const getPlural = (word, num) => {
  return num === 1 ? word : `${word}s`;
}

export const createNewDeckObject = (name) => ({
  id: generateUID(),
  title: name,
  bgcolor: getRandomColor(),
  cards: []
})

// 123: {
//   id: '123',
//   title: 'React',
//   bgcolor: '#3472aa',
//   cards: [
//     {
//       question: 'What is React?',
//       answer: 'A library for managing user interfaces'
//     },
//     {
//       question: 'Where do you make Ajax requests in React?',
//       answer: 'The componentDidMount lifecycle event'
//     }
//   ]
// },