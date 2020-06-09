import * as React from 'react';
import App from './src/App.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reduce from './shared/reducer.js'

const store = createStore(reduce)

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
