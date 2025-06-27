<script setup>
// no need to import anything unless you use dynamic content here
</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  background: linear-gradient(180deg, #2450be, #557de2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  padding: 2rem;
}
</style>
