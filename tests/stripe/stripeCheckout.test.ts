/**
 * Unit tests for the Stripe Checkout service function.
 *
 * This file tests the createStripeCheckoutSession function in src/services/stripe/stripeCheckout.ts.
 * It uses Vitest as the test runner, which is already configured in your project.
 *
 * To run these tests, use: npm run test:unit
 *
 * HOW THIS WORKS:
 * - We use Vitest's `describe` and `it` blocks to organize and write tests.
 * - We mock the global fetch API so we do NOT make real network requests.
 * - Each test checks a different scenario: a good response, a bad response, and an unexpected/missing value.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
// Adjust the import path if your service file is elsewhere in your project
import { createStripeCheckoutSession } from '../../src/services/stripe/stripeCheckout'

/**
 * This block runs before each test.
 * It restores and resets any mocks, so each test is clean and independent.
 */
beforeEach(() => {
  vi.restoreAllMocks()
})

// We are going to test "createStripeCheckoutSession"
describe('createStripeCheckoutSession', () => {
  it('returns sessionId on successful response', async () => {
    // This mocks fetch to always return a successful (ok) response with a sessionId
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ sessionId: 'cs_test_mocked_session_id_1234567890' })
      } as Response)
    ))

    // This is the actual call to your service function
    const sessionId = await createStripeCheckoutSession()
    // We expect the result to be the mocked sessionId
    expect(sessionId).toBe('cs_test_mocked_session_id_1234567890')
  })

  it('throws an error if response is not ok', async () => {
    // This mocks fetch to return a failed (not ok) response
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Internal Server Error',
        json: () => Promise.resolve({})
      } as Response)
    ))

    // We expect our function to throw an error in this case
    await expect(createStripeCheckoutSession()).rejects.toThrow('Failed to create Stripe Checkout session: Internal Server Error')
  })

  it('throws an error if sessionId is missing', async () => {
    // This mocks fetch to return a successful response but without a sessionId
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({})
      } as Response)
    ))

    // The function should throw an error because sessionId is missing
    await expect(createStripeCheckoutSession()).rejects.toThrow('No sessionId returned from the server.')
  })

  it('throws a generic error if something unexpected happens', async () => {
    // This mocks fetch to throw an exception (e.g., network error)
    vi.stubGlobal('fetch', vi.fn(() => {
      throw new Error('Network is down')
    }))

    // The function should throw a custom error with the original error message
    await expect(createStripeCheckoutSession()).rejects.toThrow('Network is down')
  })
})

/**
 * TIPS FOR JUNIOR DEVELOPERS:
 * - You can add more tests for different scenarios as your code grows.
 * - Always mock network requests in unit tests so your tests are fast and reliable.
 * - Use clear names for your tests. It helps you and your team understand what’s being tested.
 * - If you see a failing test, read the error message carefully; it will tell you what went wrong.
 */
