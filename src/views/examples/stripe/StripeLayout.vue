<template>
  <va-card class="stripe-layout-card">
    <va-card-title>
      Stripe Area
    </va-card-title>
    <va-card-content>
      <router-view />
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
// This file serves as a layout shell for all Stripe-related child pages.
// It provides a consistent look and feel for the /stripe route and its children.
</script>

<style scoped>
.stripe-layout-card {
  max-width: 700px;
  margin: 2rem auto;
  min-height: 250px;
  padding-bottom: 2rem;
}
</style>
