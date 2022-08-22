import { createRouter, createWebHistory } from 'vue-router'
import AppMain from '@/components/AppMain.vue'
import AppMovie from '@/components/AppMovie.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: AppMain
  },
  {
    path: '/movie',
    name: 'movie',
    component: AppMovie,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
