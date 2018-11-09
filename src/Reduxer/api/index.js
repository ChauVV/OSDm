import { BaseURL } from 'utils/globalConstants'
import { get } from 'reduxer/api/baseApi'
import { Alert } from 'react-native'

export default class ServerApi {
  /** ------------------------------------------*
  * Group Code: User
  * ------------------------------------------- */
  static getUsers = () => {
    const url = BaseURL + `/clients`
    const body = null
    const header = {}
    return get(url, body, header)
  }
  /** ------------------------------------------*
  * Group Code: places
  * ------------------------------------------- */
  static getPlaces = async () => {
    const url = BaseURL + `/places`
    const body = null
    const header = {}
    return get(url, body, header)
  }
  /**
  * showAlert
  */
  static showAlert = async (title = '', message = '') => {
    setTimeout(() => Alert.alert(title, message), 0)
  }
}
