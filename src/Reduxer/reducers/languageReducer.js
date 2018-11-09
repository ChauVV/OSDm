import { actionsType, initState } from 'utils/reduxConstants'

export default (state = initState.language, action) => {
  switch (action.type) {
  case actionsType.SET_LANGUGAE:
    return action.payload
  default:
    return state
  }
}
