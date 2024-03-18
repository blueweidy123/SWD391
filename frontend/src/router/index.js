import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/my-appoint',
      name: 'appointList',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/make-appoint',
      name: 'appointCreate',
      component: () => import('../views/MakeAppointView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
