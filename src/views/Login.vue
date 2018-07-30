<template>
  <div class="root">
    <div class="logo">

    </div>
    <div class="login-form">
      <el-row justify="flex">
        <el-col :span="10" :offset="1">
          <h2 class="login-form__title">用户登录</h2>
        </el-col>
      </el-row>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="手机号">
          <el-input v-model.trim="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model.trim="form.pwd"></el-input>
        </el-form-item>
        <el-row justify="flex" :gutter="10">
          <el-col :span="18">
            <el-form-item label="验证码">
              <el-input v-model.trim="form.authCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <div id="authCode"></div>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="login" :style="'width: 100%;'">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <hxkjFooter class="footer"/>
  </div>
</template>

<script>
import hxkjFooter from '@/components/HxkjFooter'
export default {
  components: {
    hxkjFooter
  },
  data () {
    return {
      form: {
        tel: null,
        pwd: null,
        authCode: null
      }
    }
  },
  methods: {
    login () {
      var thiz = this
      console.log(thiz.form.tel)
    }
  },
  beforeMount () {
    var thiz = this
    this.$nextTick(function () {
      thiz.$authCode('authCode')
    })
  }
}
</script>

<style lang="scss" scoped>
div.root {
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  bottom: 15%;
}
div.logo {
  position: absolute;
  top: 0;
  left: 20%;
  right: calc(20% + 400px);
  bottom: 60px;
}
div.login-form {
  position: absolute;
  top: 0;
  right: 20%;
  width: 400px;
  border-left: solid .5px #ddd;

  .login-form__title {
    font-weight: 100;
  }
}
div#authCode {
  width: 90px;
  height: 40px;
  border-radius: 4px;
  display: inline-block;
}
.footer {
  position: absolute;
  left: 20%;
  right: 20%;
  bottom: 0;
  height: 60px;
}
</style>
