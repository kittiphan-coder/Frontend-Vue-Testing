import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateUser from '@/views/CreateUser.vue'
import UpdateUser from '@/views/UpdateUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateUser,
    },
    {
      path: '/update/:id',
      name: 'update',
      component: UpdateUser,
    },
  ],
})

export default router
