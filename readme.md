# Udacity React Nanodegree Project: Mobile Flashcards
This is the final project from the Udacity React Nanodegree and focuses on building a React Native flashcards app.

| Contents |
|:---------|
| [App Experience](#app-experience) | 
| [Getting Started](#getting-started) |
| [Tech Stack](#tech-stack) |
| [Platforms](#platforms) |

## App Experience
The application allows a user to create a deck of flash cards with Q and As. The user can quiz themselves on their flashcard deck. 

## Getting Started
To run this project locally, clone this repository and run the following commands:
 - `yarn`
 - `yarn start`
   - Since this project is `React Native` and Android ONLY an Android phone or emulator will need to be used.

## Tech Stack
This is a [React Native](https://facebook.github.io/react-native/) app and was bootstrapped from [`create-react-native-app`](https://github.com/react-community/create-react-native-app). The code base is basic with a standard React component model with [Redux](https://redux.js.org/) to manage state and [React Native AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage)for persistence. The data structure relies on a random unique ID being generated for each deck.

```javascript
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
```

This application could certainly be enhanced (such as enabling deletion support for decks and cards), but as of right now it delivers on the requirements for the Udacity React Nanodegree. It also uses [Material Design Paper](https://reactnativepaper.com/) for component styling.

## Platforms

| Platform | Tested | Notes | 
|:---------|:-------|:------|
| Android | :white_check_mark: |