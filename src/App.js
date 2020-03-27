import React from 'react';
// import {PushNotification} from './PushNotification';
import {Provider} from 'react-redux';
import store, {persistor} from './store/configureStore';
import AppNavContainer from './navigation/AppNavContainer';
import {PersistGate} from 'redux-persist/integration/react';

// alert(JSON.stringify(store.getState()));

export default function App() {
  return (
    <Provider store={store}>
      {/* <PushNotification/> */}
      <PersistGate persistor={persistor}>
        <AppNavContainer />
      </PersistGate>
    </Provider>
  );
}
