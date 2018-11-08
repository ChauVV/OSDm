import {combineReducers} from 'redux'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'
import routesReducer from './routersReducer'

export default combineReducers({
  userInfo: userReducer,
  loading: loadingReducer,
  nav: routesReducer
})
