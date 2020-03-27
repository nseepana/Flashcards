import React from 'react';

import AppNavigator from './AppNavigator';

import {StyleSheet, View} from 'react-native';

const AppNavContainer = () => (
  <View style={styles.container}>
    <AppNavigator />
  </View>
);
export default AppNavContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
