<template>
    <div class="signin-container">
      <h2>Sign In</h2>
      <form @submit.prevent="handleSignIn">
        <!-- Change this to an input group -->
        <!-- <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="signInDetails.email" required>
        </div> -->
        <div class="mb-3">
        <label class="form-label" for="email"></label>
        <div class="input-group">
          <span class="input-group-text">
            <svg class="bi bi-person" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM8 9a5.978 5.978 0 00-4.546 2.086A5.978 5.978 0 008 15a5.978 5.978 0 004.546-2.086A5.978 5.978 0 008 9z"/>
            </svg>
          </span>
          <input type="email" id="email" class="form-control" placeholder="Enter Email" v-model="signInDetails.email" required>
        </div>
      </div>
        <!-- <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="signInDetails.password" required>
        </div> -->
        <div class="mb-3">
        <label class="form-label" for="password"></label>
        <div class="input-group">
          <span class="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20px" width="20px" viewBox="0 0 203.096 203.096">
              <g>
                <path d="M153.976,73.236h-3.308V49.115C150.669,22.033,128.634,0,101.549,0C74.465,0,52.43,22.033,52.43,49.115v24.121H49.12c-9.649,0-17.5,7.851-17.5,17.5v94.859c0,9.649,7.851,17.5,17.5,17.5h104.856c9.649,0,17.5-7.851,17.5-17.5V90.736C171.476,81.087,163.626,73.236,153.976,73.236z M67.43,49.115C67.43,30.304,82.736,15,101.549,15c18.813,0,34.119,15.304,34.119,34.115v24.121H67.43V49.115z M156.476,185.596c0,1.355-1.145,2.5-2.5,2.5H49.12c-1.355,0-2.5-1.145-2.5-2.5V90.736c0-1.355,1.145-2.5,2.5-2.5H59.93h83.238h10.808c1.355,0,2.5,1.145,2.5,2.5V185.596z"/>
                <path d="M101.547,116.309c-4.142,0-7.5,3.357-7.5,7.5v28.715c0,4.143,3.358,7.5,7.5,7.5c4.142,0,7.5-3.357,7.5-7.5v-28.715C109.047,119.666,105.689,116.309,101.547,116.309z"/>
              </g>
            </svg>
          </span>
          <input type="password" id="password" class="form-control" placeholder="Password" v-model="signInDetails.password">
        </div>
      </div>
        <!-- <div>
          <label for="cpassword">Confirm Password:</label>
          <input type="password" id="cpassword" v-model="signInDetails.cpassword" required>
        </div> -->
        <div class="mb-3">
        <label class="form-label" for="cpassword"></label>
        <div class="input-group">
          <span class="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" style="width: 22px; height: 22px;" viewBox="0 0 1024 1024" version="1.1"><path d="M718.77 960H305.23c-66.51 0-120.62-54.12-120.62-120.62V502.91c0-66.5 54.11-120.62 120.62-120.62h383.52V275.21c0-97.46-79.29-176.75-176.75-176.75s-176.75 79.29-176.75 176.75v38.89c0 9.52-7.72 17.23-17.23 17.23s-17.23-7.71-17.23-17.23v-38.89C300.79 158.75 395.54 64 512 64s211.21 94.75 211.21 211.21v107.17c64.46 2.34 116.17 55.51 116.17 120.53v336.47c0 66.5-54.1 120.62-120.61 120.62zM305.23 416.76c-47.5 0-86.15 38.65-86.15 86.15v336.47c0 47.5 38.65 86.15 86.15 86.15h413.54c47.5 0 86.15-38.65 86.15-86.15V502.91c0-47.5-38.65-86.15-86.15-86.15H305.23zM512 860.69c-104.51 0-189.54-85.03-189.54-189.52 0-104.53 85.03-189.56 189.54-189.56s189.54 85.03 189.54 189.56c0 104.49-85.03 189.52-189.54 189.52z m0-344.62c-85.51 0-155.08 69.58-155.08 155.09 0 85.5 69.57 155.06 155.08 155.06s155.08-69.56 155.08-155.06c0-85.51-69.57-155.09-155.08-155.09z m-25.11 227.94c-4.57 0-8.95-1.82-12.18-5.05l-61.05-61.06c-6.73-6.73-6.73-17.63 0-24.37s17.63-6.73 24.37 0l48.87 48.88 99.08-99.08c6.73-6.73 17.63-6.73 24.37 0s6.73 17.63 0 24.37L499.08 738.96a17.251 17.251 0 0 1-12.19 5.05z"/></svg>
          </span>
          <input type="password" id="cpassword" class="form-control" placeholder="Confirm Password" v-model="signInDetails.confirmPassword">
        </div>
      </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
import { auth } from '../firebase'; // Adjust the path as necessary
import { createUserWithEmailAndPassword } from "firebase/auth";

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
      if (this.signInDetails.password !== this.signInDetails.cpassword) {
        alert("Passwords do not match.");
        return;
      }
      createUserWithEmailAndPassword(auth, this.signInDetails.email, this.signInDetails.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('User created:', user);
          alert('User created successfully.');
          // You can redirect the user to another page or clear the form here
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(`Error: ${errorMessage}`);
        });
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

  .input-group .form-control {
  flex: 1;
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  }

  
.input-group-text {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  height: 42px;
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




