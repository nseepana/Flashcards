import React from "react";

import {useSelector, useDispatch} from "react-redux";
import {DELETE_DECK} from "../store/reduxHelper";

import {Container, Button, Text, Content, H3, Toast} from "native-base";
import {StyleSheet} from "react-native";

const deckStyles = StyleSheet.create({
  marginTop: (marginTop) => ({marginTop}),
});

function deckInfoScreen({navigation}) {
  const currentDeck = useSelector((store) => store.flashCards.currentDeck);
  // const [showToast] = useState(false);
  const {name, cards = [], okey} = currentDeck;
  const dispatch = useDispatch();
  const deleteDeck = React.useCallback(
    (deckId) => {
      dispatch({type: DELETE_DECK, payload: {okey: deckId}});
      Toast.show({
        text: "Deleted!",
        buttonText: "Okay",
        type: "success",
        onClose: () => {
          navigation.navigate("HOME");
        },
        duration: 12000,
      });
    },
    [dispatch, navigation]
  );
  const count = cards.length;

  return (
    <Container>
      <Content padder>
        <H3>{name}</H3>
        <Text note>{count < 1 ? "No Cards" : count + " card(s)"}</Text>

        <Button style={deckStyles.marginTop(10)} primary block onPress={() => navigation.navigate("ADDCARD")}>
          <Text>Add Card</Text>
        </Button>
        <Button block style={deckStyles.marginTop(10)} success onPress={() => navigation.navigate("STARTQUIZ")}>
          <Text>Start Quiz</Text>
        </Button>

        <Button style={deckStyles.marginTop(20)} block danger transparent onPress={() => deleteDeck(okey)}>
          <Text>Delete Deck</Text>
        </Button>
      </Content>
    </Container>
  );
}

export default deckInfoScreen;
