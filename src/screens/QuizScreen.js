/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View} from 'react-native';
import {styles} from './screen.style';
import {FCText, FCButton} from '../components/UIWidget';
import {useSelector, useDispatch} from 'react-redux';
import {UPDATE_QUIZ_STATUS} from '../store/reduxHelper';

function QuizScreen({navigation}) {
  const currentDeck = useSelector(store => store.flashCards.currentDeck);

  const [cardIdx, getCard] = React.useState(0);
  const [showAnswer, toggleAnswer] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [inCorrect, setInCorrect] = React.useState(0);
  const {cards, name: deckTitle} = currentDeck;
  const cardCount = cards.length;

  const dispatch = useDispatch();
  const updateStatus = React.useCallback(status => {
    dispatch(
      {
        type: UPDATE_QUIZ_STATUS,
        payload: {isCompleted: status, updatedDate: new Date()},
      },
      [dispatch],
    );
  });

  if (!cardCount) {
    return (
      <FCText>
        StartQuizScreen: Sorry, you cannot take the quiz because there are no
        cards in the deck
      </FCText>
    );
  } else if (cardCount <= cardIdx) {
    let finalScore = Math.round(100 / cardCount) * correct;
    updateStatus(true);
    return (
      <View style={styles.viewContainer}>
        <FCText>Correct: {correct}</FCText>
        <FCText>In Correct: {inCorrect}</FCText>
        <FCText>Scored: {finalScore}%</FCText>
        <FCButton
          title="Restart Quiz"
          onClick={() => {
            setCorrect(0);
            toggleAnswer(false);
            setInCorrect(0);
            getCard(0);
          }}
        />
        <FCButton
          title={'Back to ' + deckTitle}
          onClick={() => {
            navigation.navigate('DECKINFO');
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.viewContainer}>
        <FCText>Q: {cards[cardIdx].question}</FCText>
        <FCText> {showAnswer ? 'A: ' + cards[cardIdx].answer : null}</FCText>
        <FCButton
          title="Show answer"
          onClick={() => {
            toggleAnswer(true);
          }}
        />
        <View>
          <FCButton
            title="Correct"
            onClick={() => {
              setCorrect(correct + 1);
              getCard(cardIdx + 1);
            }}
          />
          <FCButton
            title="Incorrect"
            onClick={() => {
              setInCorrect(inCorrect + 1);
              getCard(cardIdx + 1);
            }}
          />
        </View>
      </View>
    );
  }
}

export default QuizScreen;
