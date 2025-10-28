<template>
  <va-card class="stripe-checkout-card">
    <va-card-title>
      Stripe Checkout Example
    </va-card-title>
    <va-card-content>
      <va-alert v-if="error" color="danger" class="mb-2" dense>
        {{ error }}
      </va-alert>
      <va-alert v-if="sessionId" color="success" class="mb-2" dense>
        <strong>Session ID received:</strong> {{ sessionId }}
      </va-alert>
      <va-button
        :loading="loading"
        :disabled="loading"
        color="primary"
        @click="handleCheckout"
      >
        Start Stripe Checkout
      </va-button>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createStripeCheckoutSession } from '@/services/stripe/stripeCheckout'

const loading = ref(false)
const sessionId = ref('')
const error = ref('')

const handleCheckout = async () => {
  error.value = ''
  sessionId.value = ''
  loading.value = true
  try {
    // Call your service to create a Stripe Checkout session
    const id = await createStripeCheckoutSession()
    sessionId.value = id
    // In a real app, you would redirect:
    // window.location.href = `https://checkout.stripe.com/pay/${id}`
  } catch (err: any) {
    error.value = err.message || 'Something went wrong'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.stripe-checkout-card {
  max-width: 400px;
  margin: 2rem auto;
}
</style>
