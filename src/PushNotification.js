/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Ref: https://github.com/react-native-community/push-notification-ios/blob/master/example/App.js
 *
 * @flow
 */

import React, {useEffect} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import PushNotificationIOS from '@react-native-community/push-notification-ios';

class Button extends React.Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={'white'}
        style={styles.button}
        onPress={this.props.onPress}>
        <Text style={styles.buttonLabel}>{this.props.label}</Text>
      </TouchableHighlight>
    );
  }
}

export const PushNotification = () => {
  useEffect(() => {
    PushNotificationIOS.requestPermissions();
    PushNotificationIOS.addEventListener('register', onRegistered);
    PushNotificationIOS.addEventListener(
      'registrationError',
      onRegistrationError,
    );
    PushNotificationIOS.addEventListener(
      'localNotification',
      onLocalNotification,
    );
    return () => {
      PushNotificationIOS.removeEventListener('register', onRegistered);
      PushNotificationIOS.removeEventListener(
        'registrationError',
        onRegistrationError,
      );

      PushNotificationIOS.removeEventListener(
        'localNotification',
        onLocalNotification,
      );
    };
  }, []);

  const sendLocalNotification = () => {
    PushNotificationIOS.presentLocalNotification({
      alertBody: 'Sample local notification',
      fireDate: new Date().toISOString(),
      applicationIconBadgeNumber: 1,
    });
  };

  const onRegistered = deviceToken => {
    Alert.alert('Registered For Remote Push', `Device Token: ${deviceToken}`, [
      {
        text: 'Dismiss',
        onPress: null,
      },
    ]);
  };

  const onRegistrationError = error => {
    Alert.alert(
      'Failed To Register For Remote Push',
      `Error (${error.code}): ${error.message}`,
      [
        {
          text: 'Dismiss',
          onPress: null,
        },
      ],
    );
  };

  const onLocalNotification = notification => {
    Alert.alert(
      'Local Notification Received',
      'Alert message: ' + notification.getMessage(),
      [
        {
          text: 'Dismiss',
          onPress: null,
        },
      ],
    );
  };

  return (
    <View>
      <Button
        onPress={sendLocalNotification}
        label="Send fake local notification"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: 'blue',
  },
});
