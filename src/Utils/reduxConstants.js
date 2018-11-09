export const actionsType = {
  // USERS
  FETCH_USER: 'FETCH_USER',
  FETCH_USER_FAIL: 'FETCH_USER_FAIL',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  CANCEL_FETCHING_USER: 'CANCEL_FETCHING_USER',
  // Loading
  SHOW_LOADING_ICON: 'SHOW_LOADING_ICON',
  HIDE_LOADING_ICON: 'HIDE_LOADING_ICON',
  // PLACES
  FETCH_PLACES: 'FETCH_PLACES',
  FETCH_PLACES_FAIL: 'FETCH_PLACES_FAIL',
  FETCH_PLACES_SUCCESS: 'FETCH_PLACES_SUCCESS',
  CANCEL_FETCHING_PLACES: 'CANCEL_FETCHING_PLACES'
}
export const initState = {
  users: [],
  places: []
}
/**
 * TIME_OUT: 30s
 */
export const TIME_OUT = 30000
/**
 * tlError
 */
export const ttError = 'Lỗi'
/**
 * ttInfor
 */
export const ttInfor = 'Thông báo'
/**
 * strMessageTimeout
 */
export const strMessageTimeout = 'Không thể kết nối server!'
