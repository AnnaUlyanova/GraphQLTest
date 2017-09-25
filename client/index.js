import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'

import App from './components/App'
import Home from './containers/HomeViewer'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(reducers,
  composeEnhancers(applyMiddleware(thunk))
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App >
        <Home />
      </App>
    </Provider>,
    document.getElementById('app')
  )
})
