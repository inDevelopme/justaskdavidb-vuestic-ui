import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/index.js'

describe('Stripe routes', () => {
  it('should contain a /stripe parent route with correct children', () => {
    // Find the /stripe parent route
    const stripeRoute = routes.find(r => r.path === '/stripe')
    expect(stripeRoute).toBeTruthy()
    expect(stripeRoute!.children).toBeTruthy()
    // Check for 'checkout' child
    const checkoutChild = stripeRoute!.children.find((c: any) => c.path === 'checkout')
    expect(checkoutChild).toBeTruthy()
    expect(checkoutChild.name).toBe('stripe-checkout')
  })

  it('should resolve the /stripe/checkout route to the correct component', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes,
    })
    await router.push('/stripe/checkout')
    expect(router.currentRoute.value.path).toBe('/stripe/checkout')
    expect(router.currentRoute.value.name).toBe('stripe-checkout')
  })
})
