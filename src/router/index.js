import { createRouter, createWebHistory } from 'vue-router'
import MakePizzaView from '@/views/MakePizzaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/make-pizza'
    },
    {
      path: '/make-pizza',
      name: 'make-pizza',
      component: MakePizzaView
    }
  ]
})

export default router
