import { combineReducers } from 'redux'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'
import routesReducer from './routersReducer'
import placesReducer from './placesReducer'
import languageReducer from './languageReducer'
import currencyReducer from './currencyReducer'

export default combineReducers({
  currency: currencyReducer,
  language: languageReducer,
  users: userReducer,
  places: placesReducer,
  loading: loadingReducer,
  navigate: routesReducer
})
