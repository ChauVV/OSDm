import { combineReducers } from 'redux'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'
import routesReducer from './routersReducer'
import placesReducer from './placesReducer'
import languageReducer from './languageReducer'
import currencyReducer from './currencyReducer'
import loginInfoReducer from './loginInfoReducer'
export default combineReducers({
  currency: currencyReducer,
  language: languageReducer,
  userState: userReducer,
  places: placesReducer,
  loading: loadingReducer,
  navigate: routesReducer,
  loginInfo: loginInfoReducer
})
