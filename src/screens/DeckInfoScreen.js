/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './screen.style';
import { useSelector, useDispatch } from 'react-redux';
import { FCText, FCButton } from '../components/UIWidget';
import { DELETE_DECK } from '../store/reduxHelper';



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
		<View style={styles.viewContainer}>
			<View>
				<Text style={styles.titleHeader}>{name}</Text>
				<FCText>{ count < 1 ? 'No Cards' : count + ' card'}</FCText>
			</View>
			<FCButton
				title="Add Card"
				onClick={() => navigation.navigate('ADDCARD')}
			/>
			<FCButton
				title="Start Quiz"
				onClick={() => navigation.navigate('STARTQUIZ')}
			/>
			<FCButton
				title="Delete Deck"
				onClick={() => deleteDeck(okey)}
			/>
		</View>
	);
}

export default DeckInfoScreen;
