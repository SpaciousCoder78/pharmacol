<template>
  <div id="loginarea" class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 id="loginbanner" class="text-2xl font-bold mb-6 text-center">Login</h2>
          
          <!-- User ID field -->
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  User ID
              </label>
              <div class="input-group">
                  <span class="input-group-text">@</span>
                  <input type="text" id="username" class="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="User ID" v-model="email">
              </div>
          </div>

          <!-- Password field -->
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
              </label>
              <div class="input-group">
                  <span class="input-group-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                          <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
                          <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                      </svg>
                  </span>
                  <input type="password" id="password" class="form-control w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" v-model="password">
              </div>
          </div>

          <!-- Login button -->
          <div class="flex items-center justify-between">
              <button type="submit" class="btn btn-dark bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="handleLogin">
                  Login
              </button>
          </div>
      </div>
  </div>
</template>

<script>
import { auth } from '../firebase'; // Adjust the path as necessary
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
data() {
  return {
    email: '',
    password: '',
  };
},
methods: {
  handleLogin() {
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
        alert('User signed in successfully.');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  },
},
};
</script>

<style scoped>
/* No additional styles needed as Tailwind CSS classes are used */
</style>