<script setup>
import { ref } from 'vue';
import Login from './components/login.vue';
import SignIn from './components/signin.vue';

const currentPage = ref('login'); // 'login' or 'signin'
</script>

<template>
  <div>
    <h1><img src="https://media.discordapp.net/attachments/721629168105685053/1266710421885161544/favicon.png?ex=66a62382&is=66a4d202&hm=4241727ef6b6b140999a29bb0170717872ec3ca9cd3959f31633e64d15b3d197&=&format=webp&quality=lossless&width=733&height=733" width="75" height="auto" loading="lazy">Pharmacol</h1>
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
