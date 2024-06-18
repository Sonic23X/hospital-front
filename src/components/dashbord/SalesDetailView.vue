<template>
  <Breadcrumbs title="Ventas"/>
  <div class="container-fluid">
     
      
          
    <div class="row">
      <div class="col-md-12 text-end mb-3">
        <router-link :to="{ name: 'sales_point' }" class="btn btn-secondary">
          Volver
        </router-link>
      </div>
    </div>
    
    <h2 class="text-center mb-4">Detalle de Venta</h2>
    
    <div v-if="sale" class="card">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th scope="row" style="width: 30%;">ID de Venta:</th>
                <td>{{ sale.idVenta }}</td>
              </tr>
              <tr>
                <th scope="row">Tipo de Venta:</th>
                <td>{{ sale.tipoDeVenta }}</td>
              </tr>
              <tr>
                <th scope="row">Método de Pago:</th>
                <td>{{ sale.metodoDePago }}</td>
              </tr>
              <tr>
                <th scope="row">Monto Total:</th>
                <td>${{ sale.montoTotal }}</td>
              </tr>
              <tr>
                <th scope="row">Fecha de Venta:</th>
                <td>{{ sale.fechaDeVenta }}</td>
              </tr>
              <tr>
                <th scope="row">Vendedor:</th>
                <td>{{ sale.vendedor }}</td>
              </tr>
              <tr>
                <th scope="row">Género de Factura:</th>
                <td>{{ sale.generoFactura }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <hr>
  
        <h5 class="mb-3">Productos o Estudios</h5>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in sale.productos" :key="index">
                <td>{{ product.nombreProducto }}</td>
                <td>{{ product.descripcion }}</td>
                <td>${{ product.precio }}</td>
                <td>{{ product.cantidad }}</td>
                <td>${{ product.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['idVenta'],
  data() {
    return {
      sale: null,
      sales: [],
    };
  },
  mounted() {
    this.loadSales();
  },
  methods: {
    async loadSales() {
      try {
        const response = await axios.get('/assets/products/sales.json');
        this.sales = response.data.ventas;
        this.cargarVenta();
      } catch (error) {
        console.error('Error al cargar las ventas:', error);
      }
    },
    cargarVenta() {
      const saleId = Number(this.idVenta);
      this.sale = this.sales.find(sale => sale.idVenta === saleId);
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.card-body {
  padding: 20px;
}

.table th, .table td {
  vertical-align: middle;
}

.table th {
  width: 30%;
  font-weight: normal;
}
</style>
