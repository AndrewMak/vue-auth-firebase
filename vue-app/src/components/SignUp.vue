<template>
  <div class="sign-up">
    <h3>Criar Conta</h3>
    <input
      v-model="email"
      type="text"
      class="input"
      placeholder="Email"
      required>
    <br>
    <input
      v-model="password"
      type="password"
      class="input"
      placeholder="Password"
      required>
    <br>
    <b-button v-on:click="signUp" class="btn-success">Criar</b-button>
    <b-button class="btn-default">
      <router-link to="/login">
        Voltar
      </router-link>
    </b-button>
  </div>
</template>
<script>
import firebase from '../Firebase'
  export default {
    name: 'signup',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/login')
        }).catch((err) => {
          alert(err.message)
        });
      }
    }
  }
</script>
