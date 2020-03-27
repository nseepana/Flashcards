import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../screens/screen.style';

export function FCButton({title, onClick}) {
  return (
    <TouchableOpacity style={styles.buttonBox} onPress={onClick}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

export function FCText({children}) {
  return <Text style={styles.cardsText}>{children}</Text>;
}
