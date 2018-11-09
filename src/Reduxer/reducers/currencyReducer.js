import { actionsType, initState } from 'utils/reduxConstants'

export default function (state = initState.currency, action) {
  switch (action.type) {
  case actionsType.SET_CURRENCY:
    return action.payload
  default:
    return state
  }
}
