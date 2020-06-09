import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.js';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import mainReduce from './shared/reducer.js'

const store = createStore(mainReduce, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
)