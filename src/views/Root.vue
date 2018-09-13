<template>
  <div class="root">
    <nav class="top-nav">
      <div class="logo"></div>
      <ul class="top-nav-menu">
        <li v-for="menu in menus" :key="menu.router">
          <div @click="go(menu.router)"
            :class="{active:isActive(menu.router)}">
            <i :class="menu.icon" :style="`font-size: ${menu.iconFontSize};`"></i>
            <span>{{menu.title}}</span>
          </div>
        </li>
      </ul>
      <div class="top-nav-user-info">
        <el-popover
          placement="bottom"
          width="250"
          trigger="click">
          <div class="user-info-panel">
            <div class="user-info">
              <img class="user-avatar" src="../assets/avatar.jpg"/>
              <div class="user-detail">
                <p class="user-detail-account">admin</p>
                <p class="user-detail-roles">系统管理员，数据管理猿</p>
                <p class="user-detail-email">nsgxpt@foxmail.com.cn</p>
              </div>
            </div>
            <div class="button-panel">
              <el-button
                type="button"
                size="mini"
                @click="logout">
                <i class="fas fa-sign-out-alt"></i>&nbsp;退出
              </el-button>
            </div>
          </div>
          <span slot="reference"><i class="fas fa-user-circle"></i></span>
        </el-popover>
      </div>
    </nav>
    <div class="container">
      <transition name="slide-fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currRouter: '',
      menus: [{
        router: 'operationAnalysis',
        icon: 'fas fa-chart-line',
        iconFontSize: '30px',
        title: '运营分析'
      }, {
        router: 'rentalCompany',
        icon: 'fas fa-tasks',
        iconFontSize: '24px',
        title: '租赁公司信息管理'
      }, {
        router: 'renter',
        icon: 'fas fa-people-carry',
        iconFontSize: '22px',
        title: '承租人管理'
      }, {
        router: 'renterUrge',
        icon: 'fas fa-phone',
        iconFontSize: '22px',
        title: '承租人催收管理'
      }, {
        router: 'user',
        icon: 'fas fa-user',
        iconFontSize: '24px',
        title: '用户管理'
      }, {
        router: 'organization',
        icon: 'fas fa-sitemap',
        iconFontSize: '24px',
        title: '部门管理'
      }]
    }
  },
  methods: {
    isActive (router) {
      return this.currRouter === router
    },
    go (router) {
      this.currRouter = router
      this.$router.push(router)
    },
    logout () {
      let thiz = this
      thiz.$axios.get('/security/logout').then(() => {
        window.sessionStorage.clear()
        thiz.$store.commit('clearToken')
        thiz.$router.push('/login')
      })
    }
  },
  mounted () {
    this.go('operationAnalysis')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

div.root {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

div.container {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
}

nav.top-nav {
  height: 80px;
  line-height: 80px;
  background:linear-gradient(to bottom right,rgb(0,164,245),rgb(0,124,205));
  box-shadow: 0px 2px 5px rgba(0,0,0,0.2);

  &>ul.top-nav-menu {
    list-style: none;
    float: left;
    padding: 0;
    margin: 0;

    &>li {
      float: left;

      &>div {
        height: 80px;
        padding-top: 10px;
        padding-left: 20px;
        padding-right: 20px;
        text-align:center;
        color: #fff;
        user-select: none;
        cursor: pointer;

        &>i {
          display: block;
          height: 35px;
          line-height: 35px;
        }
        &>span {
          display: block;
          height: 25px;
          line-height: 25px;
          font: {
            size: 14px;
            weight: 600;
          }
        }

        &:hover,
        &.active {
          background-color: rgb(0,124,205);
        }
      }
    }
  }

  &>.top-nav-user-info {
    height: 80px;
    line-height: 80px;
    float: right;

    &>* {
      user-select: none;
    }

    &>img {
      float: left;
      margin-top: 5px;
    }

    &>a {
      float: left;
      font: {
        size: 26px;
        family: 'simhei';
        weight: 100;
      };
      color: white;
      margin-left: 5px;

      &.title {
        cursor: pointer;
        text-shadow: 0 0 4px rgba(16, 37, 160, 0.9);
      }

      &.current-page {
        margin-left: 0;

        font: {
          size: 14px;
          family: 'Microsoft Yahei';
          weight: 100;
        };
      }
    }

    i {
      display: inline-block;
      width: 80px;
      height: 80px;
      line-height: 80px;
      font-size: 40px;
      color: #fff;
      text-align: center;
      cursor: pointer;
    }
  }
}

div.logo {
  width: 70px;
  height: 78px;
  float: left;
  border: 0;
  background-image: url("../assets/logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
}
</style>

<style lang="scss">
$user-info-panel-width: 250px;
$user-avatar-size: 80px;
$user-detail-width: $user-info-panel-width - $user-avatar-size;

.user-info-panel {
  width: 250px;
  height: 150px;

  &>.user-info {
    height: 110px;
    padding: 15px 0;

    &>.user-avatar {
      width: 80px;
      height: 80px;
      line-height: 80px;
      float: left;
      border-radius: 9999px;
    }
    &>.user-detail {
      float: left;
      width: $user-detail-width;
      padding-left: 10px;

      &>p {
        line-height: 1.6em;
        font-weight: 100;
        font-size: 13px;
      }
      &>.user-detail-account {
        font-size: 20px;
        font-weight: 600;
      }
      &>.user-detail-roles {
        color: #555;
      }
      &>.user-detail-email {
        font-family: 'Conaolas';
        color: #555;
      }
    }
  }

  &>.button-panel {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #ebeef5;
    text-align: right;

    * {
      font-size: 13px !important;
    }
  }
}
</style>
