<template>
  <div id="root">
    <div id="background"></div>
    <div id="pad">
      <el-row type="flex">
        <el-col>
          <el-form :model="loginForm">
            <br />
            <el-row justify="center">
              <!-- <span style="font-size: 30px; font-family: '黑体'; line-height: 40px; color: #fff;">合信科技</span> -->
              <span style="font-size: 30px; font-family: '黑体'; line-height: 40px; color: #fff;">系统登录</span>
            </el-row>
            <br />
            <br />
            <el-form-item>
              <el-input type="input" v-model="loginForm.username" placeholder="手机号" clearable>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" v-model="loginForm.password" placeholder="密码" clearable>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-row justify="flex" :gutter="10">
                <el-col :span="15">
                    <el-input v-model.trim="loginForm.authCode" placeholder="验证码" clearable></el-input>
                </el-col>
                <el-col :span="9">
                  <hxkj-verify-code-container id="verifyCodeContainer" :code.sync="verifyCode"/>
                </el-col>
              </el-row>
            </el-form-item>
            <el-button type="primary" style="width: 100%; border-radius: 9999px;" :loading="loading" @click="login()">登录系统</el-button>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HxkjVerifyCodeContainer from '@/components/HxkjVerifyCodeContainer'

export default {
  components: {
    HxkjVerifyCodeContainer
  },
  data () {
    return {
      loginForm: {
        username: null,
        password: null,
        authCode: null
      },
      loading: false,
      verifyCode: null
    }
  },
  methods: {
    login () {
      const _vm = this
      _vm.$axios.get(`/security/login?account=${_vm.loginForm.username}&password=${_vm.loginForm.password}`)
        .then(function (result) {
          if (!result.data.data) {
            _vm.showError()
          } else {
            if (result.data.data.length) {
              _vm.$store.commit('setToken', result.data.data)
              _vm.$router.push('/')
            }
          }
        })
    },
    showError () {
      this.$message({
        message: '输入有误，请重新输入！',
        type: 'danger'
      })
    }
  }
}
</script>

<style lang="scss">
input.el-input__inner {
  border: none;
  border-radius: 9999px;
}
</style>

<style lang="scss" scoped>
div#root {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
div#background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: url("../assets/login.png");
  background-position: center;
}
div#pad {
  width: 444px;
}
#verifyCodeContainer {
  width: 100%;
  height: 40px;
  border-radius: 9999px;
  overflow: hidden;
}
</style>
