
import { Observable } from 'rxjs'
import ServerAPI from 'reduxer/api'
import { actionsType, TIME_OUT, ttError, strMessageTimeout, statusCode } from 'utils/reduxConstants'

export default (action$, store) => {
  const fetchRooms$ = action$.ofType(actionsType.FETCH_PLACES).switchMap((action) => {
    return Observable.concat(
      Observable.fromPromise(ServerAPI.getPlaces()) // Call api
        .takeUntil(Observable.timer(TIME_OUT)) // Set timeout
        .takeUntil(action$.ofType(actionsType.CANCEL_FETCHING_PLACES)) // Listen cancel action
        .mergeMap((response) => { // Process data response
          if (response) {
            if (response.status === statusCode.CODE_200) { // Ok
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_PLACES_SUCCESS, payload: response.data })
              )
            } else { // Err
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_PLACES_FAIL })
              )
            }
          } else { // Err timeout
            ServerAPI.showAlert(ttError, strMessageTimeout)
            return Observable.concat(
              Observable.of({ type: actionsType.FETCH_PLACES_FAIL })
            )
          }
        })
    )
  })

  return Observable.merge(
    fetchRooms$
  )
}
