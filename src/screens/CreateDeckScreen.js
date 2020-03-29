/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import {View} from 'react-native';
import {Container, Input, Button, Text, Content, Form, Item} from 'native-base';

import {CREATE_DECK, getKey} from '../store/reduxHelper';
import {connect} from 'react-redux';

function CreateDeckScreen({navigation, createDeck}) {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <Content padder>
        <Form>
          <Item>
            <Input
              placeholder="Deck title"
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          </Item>
          <Button
            last
            style={{marginTop: 30}}
            block
            primary
            disabled={!value}
            onPress={() => {
              createDeck(value);
              onChangeText('');
              navigation.navigate('DECKINFO');
            }}>
            <Text>Create Deck</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

// const mapStateToProps = state => state.flashCards;

const mapDispatchToProps = dispatch => {
  return {
    createDeck: value =>
      dispatch({
        type: CREATE_DECK,
        payload: {name: value, okey: getKey()},
      }),
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(CreateDeckScreen);
