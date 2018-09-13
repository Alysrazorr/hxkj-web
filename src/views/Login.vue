<template>
  <div id="root">
    <div id="background"></div>
    <div id="pad">
      <el-row type="flex">
        <el-col>
          <el-form :model="loginForm">
            <br />
            <el-row justify="center" :style="'text-align: center;'">
              <span style="font-size: 34px; font-family: '黑体'; line-height: 45px; color: #fff; user-select: none;">{{$store.state.company}}</span>
            </el-row>
            <br />
            <br />
            <el-form-item>
              <el-input
                class="login-form-round"
                type="input"
                v-model="loginForm.username"
                placeholder="账号"
                clearable
                autofocus="true"
                @keypress.native.enter="login">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                class="login-form-round"
                type="password"
                v-model="loginForm.password"
                placeholder="密码"
                clearable
                @keypress.native.enter="login">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-row justify="flex" :gutter="10">
                <el-col :span="15">
                  <el-input
                    class="login-form-round"
                    v-model.trim="loginForm.verifyCode"
                    placeholder="验证码"
                    clearable
                    @keypress.native.enter="login">
                  </el-input>
                </el-col>
                <el-col :span="9">
                  <hxkj-verify-code-container id="verifyCodeContainer" :code.sync="verifyCode"  ref="verifyCode"/>
                </el-col>
              </el-row>
            </el-form-item>
            <el-button
              type="primary"
              style="width: 100%; border-radius: 9999px; user-select: none;"
              :loading="loading"
              @click="login()">登录平台</el-button>
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
        verifyCode: null
      },
      loading: false,
      verifyCode: null
    }
  },
  methods: {
    login () {
      const _vm = this
      if (!_vm.loginForm.username) {
        _vm.$notify.warning({
          title: '系统提示',
          message: '请填写账号',
          showClose: false,
          duration: 2000
        })
        return
      }
      if (!_vm.loginForm.password) {
        _vm.$notify.warning({
          title: '系统提示',
          message: '请填写密码',
          showClose: false,
          duration: 2000
        })
        return
      }
      if (!_vm.loginForm.verifyCode) {
        _vm.$notify.warning({
          title: '系统提示',
          message: '请填写验证码',
          showClose: false,
          duration: 2000
        })
        return
      }
      if (_vm.loginForm.verifyCode.toString().toUpperCase() !== _vm.verifyCode.toString().toUpperCase()) {
        _vm.$notify.warning({
          title: '系统提示',
          message: '请填写正确的验证码',
          showClose: false,
          duration: 2000
        })
        return
      }
      _vm.loading = true
      _vm.$axios.get(`/security/login?username=${_vm.loginForm.username}&password=${_vm.loginForm.password}`)
        .then(function (result) {
          if (!result.data.data) {
            _vm.$message({
              message: result.data.message,
              type: 'warning'
            })
            _vm.$refs['verifyCode'].refresh()
          } else {
            if (result.data.data.length) {
              _vm.$store.commit('setToken', result.data.data)
              _vm.$router.push(_vm.$route.query.redirect ? _vm.$route.query.redirect : '/')

              // _vm.$axios.get('/platform/resource').then(({data}) => {
              //   _vm.$store.commit('setPermissions', data.data)
              //   _vm.$router.push(_vm.$route.query.redirect ? _vm.$route.query.redirect : '/')
              // })
            }
          }
          _vm.loading = false
        })
    }
  }
}
</script>

<style lang="scss">
.login-form-round > .el-input__inner{
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
  overflow: hidden;
}
div#background {
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;

  background-image: url("../assets/login.png");
  background-position: center;
  filter: blur(5px);
}
div#pad {
  width: 500px;
}
#verifyCodeContainer {
  width: 100%;
  height: 40px;
  border-radius: 9999px;
  overflow: hidden;
}
</style>
