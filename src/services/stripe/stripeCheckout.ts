/**
 * Service for creating a Stripe Checkout session.
 * This function will call your backend API endpoint to get a sessionId,
 * which you can use to redirect the user to Stripe's Checkout page.
 * 
 * Usage:
 *   import { createStripeCheckoutSession } from '@/services/stripe/stripeCheckout';
 *   const sessionId = await createStripeCheckoutSession();
 */

export async function createStripeCheckoutSession(): Promise<string> {
  try {
    // Make a POST request to your backend endpoint
    // The endpoint should be handled by your backend (mock or real)
    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Tell the server we're sending JSON
      },
      // If you need to pass data (like cart contents), add it in the body
      // For now, we send an empty object
      body: JSON.stringify({}),
    });

    // Check if the response was successful (HTTP status 200-299)
    if (!response.ok) {
      // If not, throw an error with the status text (e.g., "Not Found", "Internal Server Error")
      throw new Error(`Failed to create Stripe Checkout session: ${response.statusText}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Our backend should return an object with a sessionId property
    if (!data.sessionId) {
      // If not, throw an error so the UI or developer knows something went wrong
      throw new Error('No sessionId returned from the server.');
    }

    // Return the sessionId so the caller can use it (e.g., to redirect to Stripe)
    return data.sessionId;
  } catch (error: any) {
    // If any error occurs above, we catch it here and throw a new error
    // The calling code (like your Vue component) can show an error message
    throw new Error(error.message || 'Unknown error creating Stripe Checkout session');
  }
}
