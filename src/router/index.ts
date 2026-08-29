import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/public/Home.vue')
  },
  {
    path: '/admin/login',
    name: 'Login',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: () => import('../views/admin/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router