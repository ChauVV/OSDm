import { actionsType, initState } from 'utils/reduxConstants'

export default function (state = initState.users, action) {
  switch (action.type) {
  case actionsType.FETCH_USER_SUCCESS:
    return action.payload
  case actionsType.UPDATE_USER_SUCCESS:
    return action.payload
  default:
    return state
  }
}
