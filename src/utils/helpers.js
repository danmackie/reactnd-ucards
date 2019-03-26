import { getRandomColor } from './colors';

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const getPlural = (word, num) => {
  return num === 1 ? word : `${word}s`;
}

export const createNewDeckObject = ({ name }) => ({
  id: generateUID(),
  title: name,
  bgcolor: getRandomColor(),
  cards: []
})