import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import InputView from '@/views/InputView.vue'
import OutputView from '@/views/OutputView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
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