import axios from 'axios'

/** ------------------------------------------*
* @method     : get
* @param      : url: string
* @param      : body: object
* @param      : header: object
* @return     : promise
* @author     : Jack 2018-11-09 10:19:19
* @description: description
* ------------------------------------------- */
export const get = (url = '', body = null, header = {}) => {
  return axios.get(url, body, header)
    .then(response => { return response })
    .catch(e => { return e })
}
