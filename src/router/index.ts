import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import TestimonialPage from '../pages/TestimonialPage.vue'
import BlogCardPage from '../pages/BlogCardPage.vue'

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
    },
    {
      path: '/blog-card',
      name: 'blogcard',
      component: BlogCardPage
    },
    {
      path: '/breweries',
      name: 'BreweriesPage',
      // @ts-ignore
      component: () => import('../pages/BreweriesPage.vue')
    }
  ]
})

export default router
