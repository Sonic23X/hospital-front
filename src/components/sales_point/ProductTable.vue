<template>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="item.id">
            <td>{{ item.nombre }}</td>
            <td>{{ item.descripcion }}</td>
            <td>{{ formatCurrency(item.precio) }}</td>
            <td><input type="number" class="form-control" v-model.number="item.cantidad" @input="actualizarTotal(index)" min="1"></td>
            <td>{{ formatCurrency(item.precio * item.cantidad) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ['items'],
    methods: {
      actualizarTotal(index) {
        this.$emit('actualizar', index);
      },
      formatCurrency(value) {
      return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
    }
    }
  };
  </script>
  