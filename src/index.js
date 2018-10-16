import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import './styles.css';
import Pomodoro from './root/container/Pomodoro';
import reducer from './Reducers/reducer';
import initialState from './state/initialState';
import styles from './styles/styles.css'
const store = createStore(
 reducer,
 initialState,
 composeWithDevTools(
   applyMiddleware(thunk)
    ) 
 );


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Pomodoro/>
  </Provider>,
  rootElement
);
