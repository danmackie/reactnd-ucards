let decks = {
  React: {
    title: 'React',
    questions: [
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
  MrBlobby: {
    title: 'Mr Blobby',
    questions: []
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

//////////////////
//Helper functions
//////////////////
function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

///////
//API//
///////

//GETS
export function _getDecks() {
  return new Promise((res) => {
    setTimeout(() => res({ ...decks }), 1000)
  })
}

// export function _getQuestions() {
//   return new Promise((res, rej) => {
//     setTimeout(() => res({ ...questions }), 1000)
//   })
// }

// //SETS
// export function _saveQuestion(question) {
//   return new Promise((res, rej) => {
//     const authedUser = question.author;
//     const formattedQuestion = formatQuestion(question);

//     setTimeout(() => {
//       questions = {
//         ...questions,
//         [formattedQuestion.id]: formattedQuestion
//       }

//       users = {
//         ...users,
//         [authedUser]: {
//           ...users[authedUser],
//           questions: users[authedUser].questions.concat([formattedQuestion.id])
//         }
//       }

//       res(formattedQuestion)
//     }, 1000)
//   })
// }

// export function _saveQuestionAnswer({ authedUser, qid, answer }) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       users = {
//         ...users,
//         [authedUser]: {
//           ...users[authedUser],
//           answers: {
//             ...users[authedUser].answers,
//             [qid]: answer
//           }
//         }
//       }

//       questions = {
//         ...questions,
//         [qid]: {
//           ...questions[qid],
//           [answer]: {
//             ...questions[qid][answer],
//             votes: questions[qid][answer].votes.concat([authedUser])
//           }
//         }
//       }
//       res()
//     }, 500)
//   })
// }