/**
 * login模块接口列表
 */

import axios from '../request'

const user = {
  // post提交
  async login(params) {
    let res
    try {
      res = await axios.post('/users/login', params)
    } catch (e) {
      console.log(e)
    }
    return res
  },
  async getUserInfo() {
    let res
    try {
      res = await axios.post('/users/info')
    } catch (e) {
      console.log(e)
    }
    return res
  }
}

export default user
