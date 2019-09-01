import HomePage from '../views/index.vue'
import test from '../views/test.vue'

export default [
  {
    path: '/404',
    name: '404',
    component: () => import('../views/ErrorPage/404.vue')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('../views/ErrorPage/500.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect: '/HomePage',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: 'HomePage',
        name: 'HomePage',
        component: () => import('../views/child.vue')
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('../views/test.vue')
      }
    ]
  }
]
