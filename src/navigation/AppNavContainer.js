import React from "react";

import AppNavigator from "./AppNavigator";

import {StyleSheet} from "react-native";
import {Root} from "native-base";

const AppNavContainer = () => (
  <Root style={styles.container}>
    <AppNavigator />
  </Root>
);
export default AppNavContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
