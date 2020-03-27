import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DeckInfoScreen from '../screens/DeckInfoScreen';
import AddCardScreen from '../screens/AddCardScreen';
import CreateDeckScreen from '../screens/CreateDeckScreen';
import QuizScreen from '../screens/QuizScreen';

const AddDeckStack = createStackNavigator();

const deckInfoScreenOptions = ({navigation}) => {
  return {
    title: 'Deck',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <HeaderBackButton
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'HOME'}],
          });
        }}
      />
    ),
  };
};

export function AddDeckStackNavigator() {
  return (
    <AddDeckStack.Navigator initialRouteName="ADDDECK">
      <AddDeckStack.Screen
        name="ADDDECK"
        options={{title: 'Add Deck'}}
        component={CreateDeckScreen}
      />
    </AddDeckStack.Navigator>
  );
}

const DecksStack = createStackNavigator();

export function DecksStackNavigator({navigation}) {
/* Ref:https://reactnavigation.org/docs/bottom-tab-navigator/#tabpress*/
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior
      e.preventDefault();
      navigation.reset({
        routes: [{name: 'HOME'}],
      });
      // Do something manually
      // ...
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <DecksStack.Navigator screenOptions={{gestureEnabled: false}}>
      <DecksStack.Screen
        name="HOME"
        options={{title: '', headerTitleAlign: 'center'}}
        component={HomeScreen}
      />
      <DecksStack.Screen
        name="DECKINFO"
        options={deckInfoScreenOptions}
        component={DeckInfoScreen}
      />
      <DecksStack.Screen
        name="ADDCARD"
        options={{title: 'Add Card', headerTitleAlign: 'center'}}
        component={AddCardScreen}
      />
      <DecksStack.Screen
        name="STARTQUIZ"
        options={{title: 'Start Quiz', headerTitleAlign: 'center'}}
        component={QuizScreen}
      />
    </DecksStack.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="HOME"
          component={DecksStackNavigator}
          options={{
            title: 'Decks',
          }}
        />
        <BottomTab.Screen
          name="ADDDECK"
          component={AddDeckStackNavigator}
          options={{
            title: 'Add Deck',
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
