<template>
  <div class="login">
    <!-- <img src="../assets/dc_logo.jpg" width="300px"> -->
    <h3>Login com Firebase</h3>
    <input
      type="text"
      v-model="email"
      placeholder="teste@gmail.com"
      class="input"
      required>
    <br/>
    <input
      type="password"
      v-model="password"
      placeholder="*******"
      class="input"
      required>
    <br/>
    <b-button v-on:click="login" class="btn-success">Enter</b-button>
    <p><router-link to="/signup">
     Criar conta
    </router-link></p>
  </div>
</template>
<script>
import firebase from '../Firebase'
  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/home')
        }).catch((err) => {
          alert(err.message)
        })
      }
    }
  }
</script>
