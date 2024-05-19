import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import TestimonialPage from '../pages/TestimonialPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/testimonial',
      name: 'testimonial',
      component: TestimonialPage
    }
  ]
})

export default router
