import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyABMezLdqksrQ36K-gJhJuQcwr5hCW6yy4',
      authDomain: 'manager-24518.firebaseapp.com',
      databaseURL: 'https://manager-24518.firebaseio.com',
      projectId: 'manager-24518',
      storageBucket: '',
      messagingSenderId: '578041867025'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
