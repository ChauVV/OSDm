import { actionsType, initState } from 'utils/reduxConstants'

export default function (state = initState.USERS, action) {
  switch (action.type) {
  case actionsType.FETCH_USER_SUCCESS:
    return action.payload

  default:
    return state
  }
}
