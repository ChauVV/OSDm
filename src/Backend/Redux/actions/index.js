import axios from 'axios'
import { BaseURL } from 'utils/globalConstants'
export default class ServerApi {
  //

  static getUsers () {
    const url = BaseURL + `/rooms`
    const body = null
    const headers = {}

    return axios.get(url, body, headers)
      .then(response => { return response })
      .catch(e => { return e })
  }
}
