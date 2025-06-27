<template>
  <div class="login-wrapper">
    <va-card class="login-card">
      <va-card-title>Login</va-card-title>
      <va-card-content>
        <va-input
          v-model="email"
          label="Email"
          type="email"
          required
        />
        <va-input
          v-model="password"
          label="Password"
          type="password"
          required
        />
        <va-button @click="submitLogin" class="mt-4" color="primary">
          Log In
        </va-button>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const submitLogin = () => {
  alert(`Login attempted with:\nEmail: ${email.value}\nPassword: ${password.value}`)
}
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.login-card {
  width: 400px;
}
</style>
