/**
 * login模块接口列表
 */

import axios from '../request'

const login = {
  // post提交
  async log(params) {
    let res
    try {
      res = await axios.post('/users/login', params)
    } catch (e) {
      console.log(e)
    }
    return res
  },
  getUserInfo() {
    console.log('user')
  }
}

export default login
