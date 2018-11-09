import { actionsType } from 'utils/reduxConstants'

export default function (state = false, action) {
  switch (action.type) {
  case actionsType.FETCH_USER:
    return true
  case actionsType.FETCH_USER_FAIL:
  case actionsType.FETCH_USER_SUCCESS:
  case actionsType.CANCEL_FETCHING_USER:
    return false
  default:
    return state
  }
}
