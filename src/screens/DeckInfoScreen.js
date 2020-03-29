/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { DELETE_DECK } from '../store/reduxHelper';

import {Container, Button, Text, Content, Left, Body, H3} from 'native-base';


function DeckInfoScreen({ navigation }) {
	const currentDeck = useSelector(store => store.flashCards.currentDeck);
	const {name, cards = [], okey} = currentDeck;
	const dispatch  = useDispatch();
	const deleteDeck = React.useCallback(
		(deckId) => {
			dispatch({type: DELETE_DECK, payload:{okey:deckId} });
			navigation.navigate('HOME');
		},
		[dispatch, navigation],
	);
	const count = cards.length;

	return (
		<Container>
			<Content padder>
			
             

                  <H3>{name}</H3>
                  <Text note>{ count < 1 ? 'No Cards' : count + ' card'}</Text>

             

			<Button style= {{marginTop: 10}} primary block onPress={() => navigation.navigate('ADDCARD')}>
				<Text>Add Card</Text>
			</Button>
			<Button block style= {{marginTop: 10}} success onPress={() => navigation.navigate('STARTQUIZ')}>
				<Text>Start Quiz</Text>
			</Button>

			<Button style= {{marginTop: 20}} block danger transparent onPress={() => deleteDeck(okey)}>
				<Text>Delete Deck</Text>
			</Button>

				{/* <Text style={styles.titleHeader}>{name}</Text>
				<Text></Text> */}

			</Content>
		</Container>
	);
}

export default DeckInfoScreen;
