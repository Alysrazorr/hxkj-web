import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Login from '@/views/Login'
import Root from '@/views/Root'
import OperationAnalysis from '@/views/OperationAnalysis'
import RentalCompany from '@/views/RentalCompany'
import Renter from '@/views/Renter'
import RenterUrge from '@/views/RenterUrge'
import Config from '@/views/Config'

Vue.use(Router)

if (window.sessionStorage.getItem('token')) {
  store.commit('setToken', window.sessionStorage.getItem('token'))
}

const router = new Router({
  routes: [
    {
      path: '/',
      component: Root,
      meta: {
        auth: true
      },
      children: [
        {
          path: '/operationAnalysis',
          component: OperationAnalysis
        },
        {
          path: '/rentalCompany',
          component: RentalCompany
        },
        {
          path: '/renter',
          component: Renter
        },
        {
          path: '/renterUrge',
          component: RenterUrge
        },
        {
          path: '/config',
          component: Config
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: {
        auth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (!to.meta.auth) {
      next()
    } else {
      if (store.state.token) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    }
  } else {
    if (store.state.token) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

export default router
