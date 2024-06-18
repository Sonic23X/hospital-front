<template>
    <div class="mb-3">
      <input type="text" class="form-control" v-model="searchQuery" placeholder="Buscar producto..." @input="buscarProducto">
      <ul class="list-group mt-2" v-if="searchResults.length">
        <li class="list-group-item" v-for="producto in searchResults" :key="producto.id">
          <button class="btn btn-primary" @click="agregarProducto(producto)">{{ producto.nombre }}</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import productos from '@/assets/products/inventory.json';
  
  export default {
    data() {
      return {
        searchQuery: '',
        searchResults: []
      };
    },
    methods: {
      buscarProducto() {
        if (this.searchQuery.length > 0) {
          this.searchResults = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        } else {
          this.searchResults = [];
        }
      },
      agregarProducto(producto) {
        this.$emit('producto-agregado', producto);
        this.searchQuery = '';
        this.searchResults = [];
      }
    }
  };
  </script>
  