import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView'
import InputView from '@/views/inputView'
import OutputView from '@/views/outputView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/input',
      name: 'InputView',
      component: InputView
    },
    {
      path: '/output',
      name: 'OutputView',
      component: OutputView
    },
  ]
})