import { actionsType, initState } from 'utils/reduxConstants'

export default function (state = initState.places, action) {
  switch (action.type) {
  case actionsType.FETCH_PLACES_SUCCESS:
    return action.payload
  default:
    return state
  }
}
