import { createStore, applyMiddleware, compose } from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import loggerMiddleware from 'redux-logger'

import epics from './epics'
import reducers from './reducers'

// Create middlewares
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const middlewares = [
  createEpicMiddleware(epics),
  navigationMiddleware
]
if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware)
}

// create store
const store = createStore(reducers, compose(applyMiddleware(...middlewares)))

export default store
