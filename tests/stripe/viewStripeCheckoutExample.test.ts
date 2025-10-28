import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import StripeCheckoutExample from '@/views/examples/stripe/StripeCheckoutExample.vue'
import * as stripeService from '@/services/stripe/stripeCheckout'

describe('StripeCheckoutExample.vue', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('shows session ID after successful checkout', async () => {
    // Mock the service to resolve with a session ID
    vi.spyOn(stripeService, 'createStripeCheckoutSession').mockResolvedValue('test-session-id')
    const wrapper = mount(StripeCheckoutExample)
    const button = wrapper.get('va-button')

    await button.trigger('click')
    // Wait for promise to resolve and Vue to update DOM
    await wrapper.vm.$nextTick()

    // Session ID should be displayed in the DOM
    expect(wrapper.html()).toContain('test-session-id')
  })

  it('shows error message if checkout fails', async () => {
    vi.spyOn(stripeService, 'createStripeCheckoutSession').mockRejectedValue(new Error('Mocked error'))
    const wrapper = mount(StripeCheckoutExample)
    const button = wrapper.get('va-button')

    await button.trigger('click')
    await wrapper.vm.$nextTick()

    // Error message should be displayed in the DOM
    expect(wrapper.html()).toContain('Mocked error')
  })

  it('disables button while loading', async () => {
    // Mock service to delay resolution
    vi.spyOn(stripeService, 'createStripeCheckoutSession').mockImplementation(
      () => new Promise(resolve => setTimeout(() => resolve('done'), 100))
    )
    const wrapper = mount(StripeCheckoutExample)
    const button = wrapper.get('va-button')

    // Click button to start loading
    await button.trigger('click')
    // Button should be disabled immediately after click
    expect(button.attributes('disabled')).toBeDefined()
  })
})
