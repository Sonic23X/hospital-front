<template>
    <div>
      <p class="h5">Subtotal: {{ formatCurrency(subtotal) }}</p>
      <p class="h5">IVA (16%): {{ formatCurrency(iva) }}</p>
      <p class="h5">Total: {{ formatCurrency(total) }}</p>
      <button class="btn btn-success m-2" @click="pagar">Pagar</button>
      <button class="btn btn-primary m-2" @click="facturar">Facturar</button>
      <button class="btn btn-danger m-2" @click="cancelar">Cancelar</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['subtotal'],
    computed: {
      iva() {
        return this.subtotal * 0.16;
      },
      total() {
        return this.subtotal + this.iva;
      }
    },
    methods: {
      pagar() {
        alert('Pagando...');
      },
      facturar() {
        alert('Facturando...');
      },
      cancelar() {
        this.$emit('cancelar');
      },
      formatCurrency(value) {
      return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
    }
    }
  };
  </script>
  