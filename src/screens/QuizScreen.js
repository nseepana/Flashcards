/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import {View} from 'react-native';
// import {styles} from './screen.style';
// import {Text, Button} from '../components/UIWidget';
import {useSelector, useDispatch} from 'react-redux';
import {UPDATE_QUIZ_STATUS} from '../store/reduxHelper';
import {Container, Content, Text, Button, H3} from 'native-base';

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
      <Text>
        StartQuizScreen: Sorry, you cannot take the quiz because there are no
        cards in the deck
      </Text>
    );
  } else if (cardCount <= cardIdx) {
    let finalScore = Math.round(100 / cardCount) * correct;
    updateStatus(true);
    return (
      <Container>
        <Content padder>
          <Text>Correct: {correct}</Text>
          <Text>InCorrect: {inCorrect}</Text>
          <H3>Scored: {finalScore}%</H3>
          <Button
            block
            info
            style={{marginTop: 10}}
            onPress={() => {
              setCorrect(0);
              toggleAnswer(false);
              setInCorrect(0);
              getCard(0);
            }}>
            <Text>Restart Quiz</Text>
          </Button>
          <Button
            block
            dark
            style={{marginTop: 10}}
            onPress={() => {
              navigation.navigate('DECKINFO');
            }}>
            <Text>{'Back to ' + deckTitle}</Text>
          </Button>
        </Content>
      </Container>
    );
  } else {
    return (
      <Container>
        <Content padder>
          <H3>Q: {cards[cardIdx].question}</H3>
          <Text> {showAnswer ? 'A: ' + cards[cardIdx].answer : null}</Text>
          <Button
            block
            info
            style={{marginTop: 10}}
            onPress={() => {
              toggleAnswer(true);
            }}>
            <Text>Show Answer</Text>
          </Button>

          <Button
            success
            block
            style={{marginTop: 10}}
            onPress={() => {
              toggleAnswer(false);
              setCorrect(correct + 1);
              getCard(cardIdx + 1);
            }}>
            <Text>Correct</Text>
          </Button>
          <Button
            block
            warning
            style={{marginTop: 10}}
            onPress={() => {
              toggleAnswer(false);
              setInCorrect(inCorrect + 1);
              getCard(cardIdx + 1);
            }}>
            <Text>Incorrect</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default QuizScreen;
