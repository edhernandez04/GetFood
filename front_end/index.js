import * as React from 'react';
import App from './src/App.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer)

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
