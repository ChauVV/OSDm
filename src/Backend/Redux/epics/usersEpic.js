
import { Observable } from 'rxjs'
import ServerAPI from 'backend/Redux/actions'
import { actionsType } from 'utils/reduxConstants'

export default (action$, store) => {
  const fetchUser$ = action$.ofType(actionsType.FETCH_USER).switchMap((action) => {
    return Observable.concat(
      Observable.fromPromise(ServerAPI.getUsers()).mergeMap((response) => {
        if (response) {
          if (response.status === 200) {
            return Observable.concat(
              Observable.of({ type: actionsType.FETCH_USER_SUCCESS, payload: response.data })
            )
          } else {
            return Observable.concat(
              Observable.of({ type: actionsType.FETCH_USER_FAIL })
            )
          }
        } else {
          // setTimeout(() => { showRequestAlert('Thông báo', `Lỗi kết nối !`, () => { }) }, 100)
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
