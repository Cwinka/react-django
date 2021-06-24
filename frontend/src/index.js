import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from 'redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { sagaWatcher } from 'redux/sagas';
import createSagaMid from 'redux-saga';

const saga = createSagaMid();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(
  applyMiddleware(
    thunk, saga
    )
  ));

saga.run(sagaWatcher);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
