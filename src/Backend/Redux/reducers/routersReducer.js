
import { RootNavigator } from 'navigation/AppNavigator'
import { NavigationactionsType, StackactionsType } from 'react-navigation'

const getActiveRoute = (state) => {
  if (state.index !== undefined) {
    return getActiveRoute(state.routes[state.index])
  } else {
    return state
  }
}
export default function routers (state, action) {
  switch (action.type) {
  case 'push': {
    const lastRoute = getActiveRoute(state)
    if (action.routeName === lastRoute.routeName) {
      return state
    }
    let newState = RootNavigator.router.getStateForAction(NavigationactionsType.navigate({
      routeName: action.routeName, params: action.params
    }), state)
    return (newState || state)
  }
  case 'pop': {
    const lastRoute = getActiveRoute(state)
    if (lastRoute.routeName === 'MainScreen' || lastRoute.routeName === 'Login') {
      return state
    }
    let newState = RootNavigator.router.getStateForAction(NavigationactionsType.back(), state)
    return (newState || state)
  }
  case 'popToTop': {
    const lastRoute = getActiveRoute(state)
    if (lastRoute.routeName === 'MainScreen' || lastRoute.routeName === 'Login') {
      return state
    }
    let newState = RootNavigator.router.getStateForAction(StackactionsType.popToTop(), state)
    return (newState || state)
  }
  case 'resetToRoute': {
    const newState = RootNavigator.router.getStateForAction(StackactionsType.reset({
      index: 0,
      key: action.key,
      actionsType: [
        NavigationactionsType.navigate({routeName: action.routeName, params: action.params})
      ]
    }), state)
    return newState || state }
  case 'reset':
    return {
      ...state,
      index: 0,
      routes: [{key: 'Init', routeName: 'Login'}]
    }
  case 'clear':
    return {}
  default: {
    let newState = RootNavigator.router.getStateForAction(action, state)
    return (newState || state)
  }
  }
}