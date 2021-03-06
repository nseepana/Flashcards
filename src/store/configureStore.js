import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { createStore, applyMiddleware } from "redux";
import appReducer from "./reduxHelper";
import { createLogger } from "redux-logger";

import { notifyUser } from "../notifyUser";

import { composeWithDevTools } from "redux-devtools-extension";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root44",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, appReducer);
let store;
if (__DEV__) {
  store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(createLogger())));
} else {
  store = createStore(persistedReducer);
}
//notify user if quiz not complete
notifyUser(store);

export const persistor = persistStore(store);

export default store;
