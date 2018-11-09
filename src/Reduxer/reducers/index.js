import {combineReducers} from 'redux'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'
import routesReducer from './routersReducer'
import placesReducer from './placesReducer'

export default combineReducers({
  users: userReducer,
  places: placesReducer,
  loading: loadingReducer,
  nav: routesReducer
})
