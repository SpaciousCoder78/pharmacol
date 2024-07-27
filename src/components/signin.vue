<template>
    <div class="signin-container">
      <h2>Sign In</h2>
      <form @submit.prevent="handleSignIn">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="signInDetails.email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="signInDetails.password" required>
        </div>
        <div>
          <label for="cpassword">Confirm Password:</label>
          <input type="password" id="cpassword" v-model="signInDetails.cpassword" required>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        signInDetails: {
          email: '',
          password: '',
          cpassword: '',
        },
      };
    },
    methods: {
      handleSignIn() {
        // Here you would handle the sign-in logic, possibly sending the signInDetails to your backend
        console.log('Sign-In details:', this.signInDetails);
        alert('Check console for sign-in details.');
      },
    },
  };
  </script>
  
  <style scoped>
  .signin-container {
    max-width: 400px;
    margin: auto;
    padding: 1em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  label {
    display: block;
    margin-bottom: 0.5em;
  }
  
  input[type="email"], input[type="password"] {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
  }
  
  button {
    padding: 0.5em 1em;
    background-color: #646cff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #5555ff;
  }
  </style>