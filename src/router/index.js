import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/stripe',
    name: 'stripe',
    component: () => import('../views/examples/stripe/StripeLayout.vue'),
    children: [
      {
        path: 'checkout',
        name: 'stripe-checkout',
        component: () => import('../views/examples/stripe/StripeCheckoutExample.vue')
      },
      /*{
        path: 'result',
        name: 'stripe-result',
        component: () => import('../views/examples/stripe/StripeResult.vue')
      }*/
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
