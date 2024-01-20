<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-label class="tittle-label">Login Form</v-label>
      <div v-if="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>
      <v-form fast-fail @submit.prevent="handleSubmit">
        <v-text-field v-model="username" label="User Name"></v-text-field>

        <v-text-field v-model="password" label="password"></v-text-field>
        <router-link to="/forgotPassword" class="text-body-2 font-weight-regular float-right mb-3">Forgot Password?</router-link>

        <v-btn type="submit" color="primary" block class="mt-2">
          Sign in
        </v-btn>
<!--        <v-btn type="submit" color="white" block class="mt-2">-->
<!--          <v-icon-->
<!--              start-->
<!--              icon="mdi-gmail"-->
<!--              color="red"-->
<!--          ></v-icon>-->
<!--          Gmail-->
<!--        </v-btn>-->

      </v-form>
<!--      <div class="mt-2">-->
<!--        <p class="text-body-2">Don't have an account? <router-link to="/regist">Sign Up</router-link></p>-->
<!--      </div>-->
    </v-sheet>
  </div>
</template>
<script>
import {HTTP} from "../config/http";
export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      errorMessage: '',
      errors: {
        username: [],
        password: [],
      }
    };
  },
  methods: {
    handleSubmit(){
      HTTP.post('/auth/signin', {
        username: this.username,
        password: this.password
      }).then(response => {
        localStorage.setItem('token', response.data?.accessToken)
        this.$router.push('/dashboard')
      }).catch(error => {
        this.errorMessage = error.response.data.message
        if (this.username.length == 0 && this.password.length == 0) {
          this.$refs.inputUsername.focus()
        }else if (this.username.length == 0 && this.password.length != 0) {
          this.$refs.inputUsername.focus()
        }else if (this.username.length != 0 && this.password.length == 0) {
          this.$refs.inputPassword.focus()
        }
      });
    }
  },
}
</script>

<style>
.tittle-label {
  font-size: 1.5rem;
  line-height: 8.25rem;
  font-weight: bold;
}
</style>