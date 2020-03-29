/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import {View} from 'react-native';
import {connect} from 'react-redux';

// import {styles} from './screen.style';
import {bindActionCreators} from 'redux';
import {ADD_CARD_TO_DECK} from '../store/reduxHelper';
// import {FCButton} from '../components/UIWidget';
import {Container, Input, Content, Button, Form, Item, Text} from 'native-base';

function AddCardScreen({navigation, currentDeck, addCardToDeck}) {
  const [qvalue, onQChangeText] = React.useState('');
  const [avalue, onAChangeText] = React.useState('');
  return (
    <Container>
      <Content padder>
        <Form>
          <Item>
            <Input
              placeholder="Question"
              onChangeText={text => onQChangeText(text)}
              value={qvalue}
            />
          </Item>
          <Item>
            <Input
              placeholder="Answer"
              onChangeText={text => onAChangeText(text)}
              value={avalue}
            />
          </Item>

          <Button
            block 
            last
            primary
            style={{marginTop: 10}}
            onPress={() => {
              onQChangeText('');
              onAChangeText('');
              addCardToDeck({
                okey: currentDeck.okey,
                card: {question: qvalue, answer: avalue},
              });
              navigation.push('DECKINFO');
            }}>
            <Text>Submit</Text>
          </Button>
        </Form>
      </Content>
    </Container>
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
