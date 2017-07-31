import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/rank',
    name: 'Rank',
    component: require('@/components/rank/rank')
  },
  {
    path: '/tab',
    name: 'Tab',
    component: require('@/components/tab/tab')
  },
  {
    path: '/search',
    name: 'Search',
    component: require('@/components/search/search')
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: require('@/components/recommend/recommend')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: require('@/components/singer/singer')
  }
  ]
})
