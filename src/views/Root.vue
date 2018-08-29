<template>
  <div class="root">
    <nav class="top-nav">
      <div class="logo"></div>
      <div class="top-nav-avatar">
        <img class="avatar" src="../assets/avatar.jpg"/>
      </div>
      <ul class="top-nav-menu">
        <li v-for="menu in menus" :key="menu.router">
          <div @click="go(menu.router)"
            :class="{active:isActive(menu.router)}">
            <i :class="menu.icon" :style="`font-size: ${menu.iconFontSize};`"></i>
            <span>{{menu.title}}</span>
          </div>
        </li>
      </ul>
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
      menus: [
        {
          router: 'operationAnalysis',
          icon: 'fas fa-chart-line',
          iconFontSize: '30px',
          title: '运营分析'
        },
        {
          router: 'rentalCompany',
          icon: 'fas fa-tasks',
          iconFontSize: '24px',
          title: '租赁公司信息管理'
        },
        {
          router: 'renter',
          icon: 'fas fa-people-carry',
          iconFontSize: '22px',
          title: '承租人管理'
        },
        {
          router: 'renterUrge',
          icon: 'fas fa-phone',
          iconFontSize: '22px',
          title: '承租人催收管理'
        },
        {
          router: 'config',
          icon: 'fas fa-cogs',
          iconFontSize: '22px',
          title: '系统管理'
        }
      ]
    }
  },
  methods: {
    isActive (router) {
      return this.currRouter === router
    },
    go (router) {
      this.currRouter = router
      this.$router.push(router)
    }
  },
  mounted () {
    this.go('operationAnalysis')
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

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
  background-color: rgb(0,164,245);

  &>ul.top-nav-menu {
    list-style: none;
    float: left;
    padding: 0;
    margin: 0;

    &>li {
      float: left;

      &>div {
        height: 70px;
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
          font-size: 14px;
        }

        &:hover,
        &.active {
          background-color: rgb(0,124,205);
        }
      }
    }
  }

  &>div.top-nav-avatar {
    width: 80px;
    height: 80px;
    line-height: 80px;
    align-items: center;
    float: right;
    margin-left: 20px;

    &>img.avatar {
      width: 60px;
      height: 60px;
      margin-top: 10px;
      margin-left: 10px;
      border-radius: 9999px;
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
