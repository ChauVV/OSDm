import { actionsType } from 'utils/reduxConstants'
import { KeyStore } from 'utils/globalConstants'
import SimpleStore from 'react-native-simple-store'

const loginInFoInitState = {
  token: null
}
export default (state = loginInFoInitState, action) => {
  switch (action.type) {
  case actionsType.SET_TOKEN:
    console.log('action.payload.token: ', action.payload.token)
    SimpleStore.save(KeyStore.AUTHEN_TOKEN, action.payload.token)
    return action.payload
  default:
    return state
  }
}
