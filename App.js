import { Constants, Font } from 'expo';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DeckListView from './src/components/DeckListView';
import reducer from './src/reducers';
import { purple, white } from './src/utils/colors';

function UCardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

// const MainNavigator = createAppContainer(createStackNavigator({
//   home: {
//     screen: DeckListView,
//     navigationOptions: {
//       header: null,
//     },
//   },
// }));

const MainNavigator = createStackNavigator(
  {
    Home: DeckListView,
    // DeckDetail: DeckDetail,
    // AddCard: AddCard,
    // Quiz: Quiz
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: white,
      headerStyle: { backgroundColor: purple },
      headerTitleStyle: { fontWeight: "bold" }
    }
  }
);

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'sura-bold': require('./assets/fonts/Sura-Bold.ttf'),
      'sura': require('./assets/fonts/Sura-Regular.ttf'),
    });
    //setLocalNotification();
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      this.state.fontLoaded &&
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <UCardsStatusBar backgroundColor={purple} barStyle="light-content" />
          <DeckListView />
        </View>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
