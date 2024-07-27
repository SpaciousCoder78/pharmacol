<template>
  <div id="loginarea" class="d-flex align-items-center justify-content-center min-vh bg-light">
    <div class="bg-white p-4 rounded shadow w-100 max-w-md">
      <h2 id="loginbanner" class="text-center mb-4">Login</h2>
      
      <!-- User ID field -->
      <div class="mb-3">
        
        <div class="input-group">
          <span class="input-group-text">
            <svg class="bi bi-person" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM8 9a5.978 5.978 0 00-4.546 2.086A5.978 5.978 0 008 15a5.978 5.978 0 004.546-2.086A5.978 5.978 0 008 9z"/>
            </svg>
          </span>
          <input type="text" id="username" class="form-control" placeholder="User ID" v-model="email">
        </div>
      </div>

      <!-- Password field -->
      <div class="mb-3">
        
        <div class="input-group">
          <span class="input-group-text">
            <svg class="bi bi-lock" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a3 3 0 00-3 3v3H4a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2v-5a2 2 0 00-2-2h-1V4a3 3 0 00-3-3zM5 4a3 3 0 016 0v3H5V4zm-1 5h8v5H4v-5z"/>
            </svg>
          </span>
          <input type="password" id="password" class="form-control" placeholder="Password" v-model="password">
        </div>
      </div>

      <!-- Login button -->
      <div class="d-grid">
        <button type="submit" class="btn btn-primary" @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebase'; // Adjust the path as necessary
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async handleLogin() {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        console.log('User signed in:', user);
        this.router.push('/add-meds'); // Ensure this line is correct
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      }
    },
  },
};
</script>

<style scoped>
#loginarea {
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
}

.bg-white {
  background-color: #ffffff !important;
}

.max-w-md {
  max-width: 400px;
}

.input-group-text {
  background-color: #e9ecef;
  border: 1px solid #ced4da;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>