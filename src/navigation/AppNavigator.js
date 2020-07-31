import "react-native-gesture-handler";
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Icon} from "native-base";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator, HeaderBackButton, TransitionPresets} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DeckInfoScreen from "../screens/DeckInfoScreen";
import AddCardScreen from "../screens/AddCardScreen";
import CreateDeckScreen from "../screens/CreateDeckScreen";
import QuizScreen from "../screens/QuizScreen";
import {chicCommon} from "../rnstyles/common.styles";

const AddDeckStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

// TransitionPresets

const deckInfoScreenOptions = ({navigation}) => {
  return {title: "Deck", headerTitleAlign: "center"};
};

export function AddDeckStackNavigator() {
  return (
    <AddDeckStack.Navigator initialRouteName='ADDDECK'>
      <AddDeckStack.Screen name='ADDDECK' options={{title: "Add Deck"}} component={CreateDeckScreen} />
    </AddDeckStack.Navigator>
  );
}

// export

const DecksStack = createStackNavigator();
// const RootStack = createStackNavigator();

export function DecksStackNavigator({navigation}) {
  /* Ref:https://reactnavigation.org/docs/bottom-tab-navigator/#tabpress*/
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      // Prevent default behavior
      e.preventDefault();
      navigation.reset({
        index: 0,
        routes: [{name: "HOME"}],
      });
      // Do something manually
      // ...
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <DecksStack.Navigator screenOptions={{gestureEnabled: false}}>
      <DecksStack.Screen name='HOME' options={{title: "", headerTitleAlign: "center"}} component={HomeScreen} />
      <DecksStack.Screen name='DECKINFO' options={deckInfoScreenOptions} component={DeckInfoScreen} />
      <DecksStack.Screen
        name='ADDCARD'
        options={{title: "Add Card", headerTitleAlign: "center"}}
        component={AddCardScreen}
      />
      <DecksStack.Screen
        name='STARTQUIZ'
        options={{title: "Start Quiz", headerTitleAlign: "center"}}
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
          name='HOME'
          component={DecksStackNavigator}
          options={{
            tabBarLabel: "Decks",
            tabBarIcon: ({color, size}) => {
              return <Icon name='apps' style={{color}} fontSize={size} />;
            },
          }}
        />
        <BottomTab.Screen
          name='ADDDECK'
          component={AddDeckStackNavigator}
          options={{
            tabBarLabel: "Add Deck",
            tabBarIcon: ({color, size}) => {
              return <Icon name='add' style={chicCommon.colored({color})} fontSize={size} />;
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
