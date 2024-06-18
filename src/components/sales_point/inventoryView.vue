<template>
    <Breadcrumbs title="Punto De Venta"/>
    <div class="container">
      <ProductSearch @producto-agregado="agregarProductoALaLista"/>
      <ProductTable :items="items" @actualizar="actualizarSubtotal"/>
      <Summary :subtotal="subtotal" @cancelar="cancelar"/>
    </div>
  </template>
  
  <script>
  import ProductSearch from './ProductSearch.vue';
  import ProductTable from './ProductTable.vue';
  import Summary from './Summary.vue';
  
  export default {
    components: {
      ProductSearch,
      ProductTable,
      Summary
    },
    data() {
      return {
        items: [],
        subtotal: 0
      };
    },
    methods: {
      agregarProductoALaLista(producto) {
        const existingItem = this.items.find(item => item.id === producto.id);
        if (existingItem) {
          existingItem.cantidad++;
        } else {
          this.items.push({ ...producto, cantidad: 1 });
        }
        this.actualizarSubtotal();
      },
      actualizarSubtotal() {
        this.subtotal = this.items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
      },
      cancelar() {
        this.items = [];
        this.subtotal = 0;
      }
    }
  };
  </script>
  
  <style>
  /* Estilos adicionales opcionales */
  </style>
  