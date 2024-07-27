<script setup>
import { ref } from 'vue';
import Login from './components/login.vue';
import SignIn from './components/signin.vue';

const currentPage = ref('login'); // 'login' or 'signin'
</script>

<template>
  <div>
    <h1>Pharmacol</h1>
    <button @click="currentPage = 'login'">Login</button>
    <button @click="currentPage = 'signin'">Sign In</button>
    <Login v-if="currentPage === 'login'"/>
    <SignIn v-else-if="currentPage === 'signin'"/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
