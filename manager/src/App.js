/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAf24eFMqkVVENSK71Qu3UQ2u1IEI3ziNQ',
      authDomain: 'manager-94778.firebaseapp.com',
      databaseURL: 'https://manager-94778.firebaseio.com',
      projectId: 'manager-94778',
      storageBucket: 'manager-94778.appspot.com',
      messagingSenderId: '950479813892'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} >
       <Router />
      </Provider>
    );
  }
}
