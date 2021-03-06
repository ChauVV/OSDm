
import { Observable } from 'rxjs'
import ServerAPI from 'reduxer/api'
import { actionsType, TIME_OUT, ttError, strMessageTimeout, statusCode } from 'utils/reduxConstants'
import { RouteKey, KeyStore } from 'utils/globalConstants'
import SimpleStore from 'react-native-simple-store'

export default (action$, store) => {
  const checkAuthen$ = action$.ofType(actionsType.CHECK_AUTHEN).switchMap((action) => {
    return Observable.concat(
      Observable.fromPromise(SimpleStore.get(KeyStore.AUTHEN_TOKEN))
        .mergeMap((token) => {
          if (token && token.length > 0) {
            console.log('token get: ', token)
            return Observable.concat(
              Observable.of({ type: actionsType.SET_TOKEN, payload: {token: token} }),
              Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Drawer })
            )
          } else {
            return Observable.concat(
              Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Login })
            )
          }
        })
    )
  })

  const login$ = action$.ofType(actionsType.LOGIN).switchMap((action) => {
    return Observable.concat(
      Observable.of({ type: actionsType.SET_TOKEN, payload: {token: 'token_aodsifjasdf8a9sd8fauds9fa8sd'} }),
      Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Drawer })
    )
  })

  const logout$ = action$.ofType(actionsType.LOGOUT).switchMap((action) => {
    return Observable.concat(
      Observable.of({ type: actionsType.SET_TOKEN, payload: {token: null} }),
      Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Login })
    )
  })

  const fetchUser$ = action$.ofType(actionsType.FETCH_USER).switchMap((action) => {
    return Observable.concat(
      Observable.fromPromise(ServerAPI.getUsers())
        .takeUntil(Observable.timer(TIME_OUT))
        .takeUntil(action$.ofType(actionsType.CANCEL_FETCHING_USER))
        .mergeMap((response) => {
          if (response) {
            if (response.status === statusCode.CODE_200) {
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_USER_SUCCESS, payload: { users: response.data } }),
                Observable.of({ type: actionsType.FETCH_PLACES })
              )
            } else {
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_USER_FAIL })
              )
            }
          } else {
            ServerAPI.showAlert(ttError, strMessageTimeout)
            return Observable.concat(
              Observable.of({ type: actionsType.FETCH_USER_FAIL })
            )
          }
        })
    )
  })

  return Observable.merge(
    fetchUser$,
    checkAuthen$,
    login$,
    logout$
  )
}
