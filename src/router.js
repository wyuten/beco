import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      alias: '/catalog',
      path: '/',
      component: Index,
      props: {
        pageTitle: 'Каталог',
        pageName: 'catalog',
      },
    },
    {
      path: '/health',
      component: Index,
      props: {
        pageTitle: 'Здоровье',
        pageName: 'health',
      },
    },
    {
      path: '/beauty',
      component: Index,
      props: {
        pageTitle: 'Красота',
        pageName: 'beauty',
      },
    },
    {
      path: '/enjoy',
      component: Index,
      props: {
        pageTitle: 'Развлечения',
        pageName: 'enjoy',
      },
    },
    {
      path: '/auto',
      component: Index,
      props: {
        pageTitle: 'Авто',
        pageName: 'auto',
      },
    },
  ]
})