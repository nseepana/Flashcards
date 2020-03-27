/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './screen.style';
import {bindActionCreators} from 'redux';
import {ADD_CARD_TO_DECK} from '../store/reduxHelper';
import {FCButton} from '../components/UIWidget';

function AddCardScreen({navigation, currentDeck, addCardToDeck}) {
  const [qvalue, onQChangeText] = React.useState('');
  const [avalue, onAChangeText] = React.useState('');
  return (
    <View
      style={{
        margin: 30,
      }}>
      <TextInput
        placeholder="Question"
        style={styles.inputBox}
        onChangeText={text => onQChangeText(text)}
        value={qvalue}
      />
      <TextInput
        placeholder="Answer"
        style={{
          height: 40,
          padding: 10,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 30,
        }}
        onChangeText={text => onAChangeText(text)}
        value={avalue}
      />
      <FCButton
        title="Submit"
        onClick={() => {
          onQChangeText('');
          onAChangeText('');
          addCardToDeck({
            okey: currentDeck.okey,
            card: {question: qvalue, answer: avalue},
          });
          navigation.push('DECKINFO');
        }}
      />
    </View>
  );
}

const mapStateToProps = state => {
  const {currentDeck} = state.flashCards;
  return {currentDeck};
};

const mapDispatchToProps = dispatch => {
  const action = payload => ({
    type: ADD_CARD_TO_DECK,
    payload,
  });
  return {
    addCardToDeck: bindActionCreators(action, dispatch),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCardScreen);
