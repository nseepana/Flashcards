
import {combineReducers} from 'redux';
// import { PURGE } from 'redux-persist/es/constants';
export const CREATE_DECK = '@@create_deck';
export const DELETE_DECK = '@@DELETE_DECK';
export const CREATE_QUIZ = '@@create_quiz';
export const ADD_CARD_TO_DECK = '@@add_card_to_deck';
export const UPDATE_CURRENT_DECK = '@@update_current_deck';

export function getKey() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}
const initialState = {
  decks: [],
  decksData: {},
  currentDeck: {cards: []},
};

/** Ref: https://daveceddia.com/react-redux-immutability-guide/#redux-updating-an-object-by-key */
const appReducer = (state = initialState, action) => {
  // alert('state::' + JSON.stringify(state));

  // alert('action::' + JSON.stringify(action));
  const {decks, decksData} = state;
  const {payload = {}} = action;
  const {okey} = payload;

  switch (action.type) {
    case CREATE_DECK:
      let {name} = payload;
      const ndeck = {name, okey, cards: []};
      return {
        ...state,
        decks: [...decks, okey],
        decksData: {...decksData, [okey]: {...ndeck}},
        currentDeck: {...ndeck},
      };
    case DELETE_DECK:
      const ndecks = decks.filter((item, index) => {
        return !(item === okey);
      });
      decksData[okey] = undefined;
      delete decksData[okey];
      return {
        ...state,
        decks: ndecks,
        decksData,
        currentDeck: {cards: []},
      };
    case ADD_CARD_TO_DECK:
      let {card} = payload;
      let {currentDeck} = state;
      const cards = currentDeck.cards.slice();
      cards.push({...card});
      return {
        ...state,
        decksData: {
          ...decksData,
          [okey]: {
            ...decksData[okey],
            cards,
          },
        },
        currentDeck: {
          ...currentDeck,
          cards,
        },
      };
    case UPDATE_CURRENT_DECK:
      const deck = {...decksData[okey]};
      return {
        ...state,
        currentDeck: {...deck},
      };
    case CREATE_QUIZ:
      return state;
    default:
      return state;
  }
};

const rootRedcuer = combineReducers({flashCards: appReducer});
export default rootRedcuer;
