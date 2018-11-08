import {combineEpics} from 'redux-observable'
// import {counterEpic} from './counterEpic'
import usersEpic from './usersEpic'

export default combineEpics(
  // counterEpic,
  usersEpic
)
