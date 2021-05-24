<template>
  <div class="login-cont">
    <img class="login-img" src="@/assets/images/login/bg.png" alt="">
    <div class="login-info">
      <p class="title">登录系统</p>
      <div class="tip">欢迎登陆后台系统, 相信每一天都是最好的！</div>
      <div class="input">
        <input v-model="formData.userName"  type="tel" maxlength="11"
               placeholder="请输入用户名"/>
      </div>

      <div class="input">
        <input class="password" v-model="formData.password"  type="password" maxlength="6"
               placeholder="请输入密码"/>
      </div>
      <button class="btn" type="primary" @click="login()">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      formData: { // 提交数据
        userName: 'admin',
        password: 'admin'
      },
    }
  },
  methods: {
    // 登陆
    async login() {
      let res = await this.$api.user.login(this.formData)
      if (res.status === 0) {
        this.$plugin.store.set('token', res.data)
        this.$router.replace('/home')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c3e50;
  position: absolute;
  height: 100%;
  width: 100%;

  .login-img {
    position: absolute;
    z-index: 0;
    width: 100%;
  }

  .login-info {
    position: relative;
    width: 36%;
    background: #f7f9fa;
    border-radius: 8px;
    padding: 40px 30px;
    text-align: center;
    z-index: 1;
    .title {
      font-size: 32px;
      font-weight: 500;
      color: #333;
      line-height: 26px;
      margin-bottom: 22px;
    }
    input {
      box-sizing: border-box;
      padding-left: 14px;
      height: 48px;
      line-height: 42px;
      background: #fff;
      border-radius: 8px;
      border: 1px solid #E8ECF3;
      color: #333;
      width: 100%;
    }
    .password {
      margin: 16px 0;
    }
    .tip {
      font-size: 14px;
      font-weight: 500;
      color: #777;
      line-height: 20px;
      margin-bottom: 34px;
    }
    .btn {
      width: 100%;
      height: 48px;
      background: #1269db;
      border: 0;
      border-radius: 9px;
      color: #f7f9fa;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
