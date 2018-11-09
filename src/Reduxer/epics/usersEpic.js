
import { Observable } from 'rxjs'
import ServerAPI from 'reduxer/api'
import { actionsType, TIME_OUT, ttError, strMessageTimeout } from 'utils/reduxConstants'

export default (action$, store) => {
  const fetchUser$ = action$.ofType(actionsType.FETCH_USER).switchMap((action) => {
    return Observable.concat(
      Observable.fromPromise(ServerAPI.getUsers())
        .takeUntil(Observable.timer(TIME_OUT))
        .takeUntil(action$.ofType(actionsType.CANCEL_FETCHING_USER))
        .mergeMap((response) => {
          console.log('response: ', response)
          if (response) {
            if (response.status === 200) {
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_USER_SUCCESS, payload: response.data }),
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
    fetchUser$
  )
}
