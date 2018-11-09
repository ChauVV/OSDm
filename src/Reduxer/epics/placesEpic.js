
import { Observable } from 'rxjs'
import ServerAPI from 'reduxer/api'
import { actionsType, TIME_OUT, ttError, strMessageTimeout } from 'utils/reduxConstants'

export default (action$, store) => {
  const fetchRooms$ = action$.ofType(actionsType.FETCH_PLACES).switchMap((action) => {
    return Observable.concat(
      Observable.fromPromise(ServerAPI.getPlaces()) // Call api
        .takeUntil(Observable.timer(TIME_OUT)) // Set timeout
        .takeUntil(action$.ofType(actionsType.CANCEL_FETCHING_PLACES)) // Listen cancel action
        .mergeMap((response) => { // Process data response
          if (response) {
            if (response.status === 200) {
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_PLACES_SUCCESS, payload: response.data })
              )
            } else {
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_PLACES_FAIL })
              )
            }
          } else {
            ServerAPI.showAlert(ttError, strMessageTimeout) // Error timeout
            return Observable.concat(
              Observable.of({ type: actionsType.FETCH_PLACES_FAIL })
            )
          }
        })
    )
  })
    .catch(error => {
      console.log('error: ', error)
    })

  return Observable.merge(
    fetchRooms$
  )
}
