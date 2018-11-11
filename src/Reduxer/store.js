import { createStore, applyMiddleware, compose } from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import loggerMiddleware from 'redux-logger'
import { middlewareNav } from 'gui/AppNavigator'
import epics from 'reduxer/epics'
import reducers from 'reduxer/reducers'

// Create middlewares
const epicMiddleware = createEpicMiddleware(epics)

const middlewares = [
  epicMiddleware,
  middlewareNav
]

if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware)
}

// create store
const store = createStore(reducers, compose(applyMiddleware(...middlewares)))

export default store
