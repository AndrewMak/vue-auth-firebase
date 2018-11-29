<template>
  <b-row>
    <b-col cols="12">
      <button class="button logout" v-on:click="logout">Sair</button>
      <h2>Lista Produto</h2>
      <b-table striped hover :items="produtos" :fields="fields">
        <template slot="actions" slot-scope="row">
          <b-btn size="sm" @click.stop="removerProduto(row.item)">Remover</b-btn>
        </template>
      </b-table>
    </b-col>
    <b-col cols="12">
      <h2>Adicionar Produtos</h2>
      <form @submit="AddProduto(name, image)">
        <input v-model="name" placeholder="Nome" class="form-control" required>
        <input v-model="image" placeholder="url da imagem" class="form-control" required>
        <b-button type="submit" class="btn-success">Adicionar Produto</b-button>
      </form>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'Home',
  data () {
    return {
      fields: {
        name: { label: 'Nome', sortable: true, 'class': 'text-left' },
        image: { label: 'Url Imagem', sortable: true, 'class': 'text-left' },
        actions: { label: '', 'class': 'text-center' }
      },
      produtos: [],
      errors: [],
      name: '',
      image: '',
      ref: firebase.firestore().collection('produtos'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.produtos = [];
      querySnapshot.forEach((doc) => {
        this.produtos.push({
          key: doc.id,
          name: doc.data().name,
          image: doc.data().image
        });
      });
    });
  },
  methods: {
    details (produto) {
      router.push({ name: 'Showproduto', params: { id: produto.key }})
    },
    AddProduto(name, image){
     const createdAt = new Date()
      firebase.firestore().collection('produtos').add({ name, image, createdAt })
      this.name = ''
      this.image = ''
    },
    removerProduto(id){
      firebase.firestore().collection('produtos').doc(id.key).delete()
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
      }
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>
