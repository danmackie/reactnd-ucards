import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Constants, Font } from 'expo';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';
import DeckListView from './src/components/DeckListView';
import DeckView from './src/components/DeckView';
import NewCardView from './src/components/NewCardView';
import NewDeckView from './src/components/NewDeckView';
import QuizView from './src/components/QuizView';
import reducer from './src/reducers';
import { purple, white } from './src/utils/colors';

const UCardsStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

const Tabs = createBottomTabNavigator(
  {
    DeckListView: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="layers" size={30} color={tintColor} />
        )
      }
    },
    NewDeckView: {
      screen: NewDeckView,
      navigationOptions: {
        tabBarLabel: "Add deck",
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="add" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 60,
        backgroundColor: white,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      labelStyle: {
        paddingTop: 3,
        fontSize: 14,
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(createStackNavigator(
  {
    Home: Tabs,
    DeckView: DeckView,
    NewCardView: NewCardView,
    QuizView: QuizView
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: white,
      headerStyle: { backgroundColor: purple },
      headerTitleStyle: { fontWeight: "bold" }
    }
  }
))

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'sura-bold': require('./assets/fonts/Sura-Bold.ttf'),
      'sura': require('./assets/fonts/Sura-Regular.ttf'),
      'material': require('./node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf'),
    });
    //setLocalNotification();
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      this.state.fontLoaded &&
      <StoreProvider store={createStore(reducer)}>
        <View style={styles.container}>
          <UCardsStatusBar backgroundColor={purple} barStyle="light-content" />
          <AppContainer />
        </View>
      </StoreProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
