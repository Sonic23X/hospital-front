<template>
    <div class="container mt-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="text-center mb-0 mt-4">Alta de Nueva Venta</h2>
        <button @click="volver" type="button" class="btn btn-secondary mt-4">Volver</button>
      </div>
      <form @submit.prevent="agregarVenta">
        <div class="mb-3">
          <label for="tipoDeVenta" class="form-label">Tipo de Venta</label>
          <select id="tipoDeVenta" v-model="venta.tipoDeVenta" @change="cambiarTipoDeVenta" class="form-select" required>
            <option value="" disabled selected>Seleccione el tipo de venta</option>
            <option value="Cobro de consulta">Cobro de consulta</option>
            <option value="Venta de medicamento">Venta de medicamento</option>
            <option value="Realización de estudios">Realización de estudios</option>
            <option value="Venta de insumos">Venta de insumos</option>
          </select>
        </div>
        
        <div v-if="mostrarCamposGenerales">
          <div class="mb-3">
            <label for="metodoDePago" class="form-label">Método de Pago</label>
            <select id="metodoDePago" v-model="venta.metodoDePago" class="form-select" required>
              <option value="" disabled selected>Seleccione el método de pago</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Tarjeta de crédito">Tarjeta de crédito</option>
              <option value="Tarjeta de débito">Tarjeta de débito</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="montoTotal" class="form-label">Monto Total</label>
            <input type="number" id="montoTotal" v-model="venta.montoTotal" class="form-control" required readonly>
          </div>
          <div class="mb-3">
            <label for="fechaDeVenta" class="form-label">Fecha de Venta</label>
            <input type="date" id="fechaDeVenta" v-model="venta.fechaDeVenta" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="vendedor" class="form-label">Vendedor</label>
            <input type="text" id="vendedor" v-model="venta.vendedor" class="form-control" required>
          </div>
          <div class="form-check mb-3">
            <input type="checkbox" id="generoFactura" v-model="venta.generoFactura" class="form-check-input">
            <label for="generoFactura" class="form-check-label">Generar Factura</label>
          </div>
        </div>
        
        <div v-if="venta.tipoDeVenta">
          <h5>Buscar Producto</h5>
          <div class="input-group mb-3">
            <input type="text" v-model="busquedaProducto" @input="buscarProducto" class="form-control" placeholder="Buscar producto">
            <button class="btn btn-outline-secondary" type="button" @click="limpiarBusqueda">Borrar</button>
          </div>
          <ul class="list-group">
            <li v-for="producto in productosFiltrados" :key="producto.nombreProducto" class="list-group-item d-flex justify-content-between align-items-center">
              <span>{{ producto.nombreProducto }} - ${{ producto.precio }}</span>
              <button @click="seleccionarProducto(producto)" type="button" class="btn btn-sm btn-primary">Añadir</button>
            </li>
          </ul>
        </div>
        
        <div v-if="productos.length">
          <h5>Productos Agregados</h5>
          <table class="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(prod, index) in productos" :key="index">
                <td>{{ prod.nombreProducto }}</td>
                <td>{{ prod.descripcion }}</td>
                <td><input type="number" v-model.number="prod.cantidad" @change="actualizarTotal(prod)" class="form-control"></td>
                <td>{{ formatCurrency(prod.precio) }}</td>
                <td>{{ formatCurrency(prod.total) }}</td>
              </tr>
            </tbody>
          </table>
          
          <div class="row">
            <div class="col text-end">
              <p><strong>Subtotal:</strong> {{ formatCurrency(subtotal) }}</p>
              <p><strong>IVA (16%):</strong> {{ formatCurrency(iva) }}</p>
              <p><strong>Total:</strong> {{ formatCurrency(total) }}</p>
            </div>
          </div>
        </div>
        
        <div class="row">
            <div class="col-6">
                <button @click="confirmarCancelar" type="button" class="btn btn-danger" style="width: 100%;">Cancelar</button>
            </div>
            <div class="col-6">
                <button type="submit" class="btn btn-success" style="width: 100%;">Guardar Venta</button>
            </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        venta: {
          tipoDeVenta: '',
          metodoDePago: '',
          montoTotal: '',
          fechaDeVenta: '',
          vendedor: '',
          generoFactura: false,
          productos: []
        },
        productos: [],
        productosFiltrados: [],
        productosDisponibles: [],
        busquedaProducto: ''
      };
    },
    computed: {
      mostrarCamposGenerales() {
        return this.venta.tipoDeVenta !== '';
      },
      subtotal() {
        return this.productos.reduce((acc, prod) => acc + prod.total, 0);
      },
      iva() {
        return this.subtotal * 0.16;
      },
      total() {
        return this.subtotal + this.iva;
      }
    },
    mounted() {
      this.cargarVentas();
    },
    methods: {
      cargarVentas() {
        const ventas = localStorage.getItem('ventas');
        if (ventas) {
          this.ventas = JSON.parse(ventas);
        } else {
          this.cargarVentasDesdeJson();
        }
      },
      async cargarVentasDesdeJson() {
        try {
          const response = await axios.get('/assets/products/sales.json');
          this.ventas = response.data.ventas;
          localStorage.setItem('ventas', JSON.stringify(this.ventas));
        } catch (error) {
          console.error('Error al cargar ventas desde JSON:', error);
        }
      },
      cambiarTipoDeVenta() {
        this.productos = [];
        this.busquedaProducto = '';
        this.productosFiltrados = [];
        this.productosDisponibles = [];
        this.venta.montoTotal = 0;
        this.cargarProductos();
      },
      async cargarProductos() {
        let url;
        switch (this.venta.tipoDeVenta) {
          case 'Cobro de consulta':
            url = '/assets/products/consultas.json';
            break;
          case 'Venta de medicamento':
            url = '/assets/products/medicamentos.json';
            break;
          case 'Realización de estudios':
            url = '/assets/products/estudios.json';
            break;
          case 'Venta de insumos':
            url = '/assets/products/insumos.json';
            break;
        }
        try {
          const response = await axios.get(url);
          this.productosDisponibles = response.data.productos;
        } catch (error) {
          console.error('Error al cargar productos:', error);
        }
      },
      buscarProducto() {
        const term = this.busquedaProducto.toLowerCase();
        if (term) {
          this.productosFiltrados = this.productosDisponibles.filter(producto =>
            producto.nombreProducto.toLowerCase().includes(term) ||
            producto.descripcion.toLowerCase().includes(term)
          );
        } else {
          this.productosFiltrados = [];
        }
      },
      limpiarBusqueda() {
        this.busquedaProducto = '';
        this.productosFiltrados = [];
      },
      seleccionarProducto(producto) {
        const prod = { ...producto, cantidad: 1, total: producto.precio };
        this.productos.push(prod);
        this.actualizarTotales();
      },
      actualizarTotal(producto) {
        producto.total = producto.precio * producto.cantidad;
        this.actualizarTotales();
      },
      actualizarTotales() {
        this.venta.montoTotal = this.total;
      },
      agregarVenta() {
        this.venta.productos = this.productos;
        const ventas = JSON.parse(localStorage.getItem('ventas')) || [];
        const nuevaVenta = { idVenta: ventas.length + 1, ...this.venta };
        ventas.push(nuevaVenta);
        localStorage.setItem('ventas', JSON.stringify(ventas));
        this.descargarJson(ventas);
        alert('Venta guardada exitosamente');
      },
      descargarJson(ventas){
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ ventas }));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "sales.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      },    
      confirmarCancelar() {
        if (confirm("¿Está seguro de que desea cancelar esta venta? Se perderán todos los datos ingresados.")){
            this.volver();
        }
      },
      volver() {
        this.$router.push({ name: 'sales_point' });
      },
      formatCurrency(value) {
        return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
      }
    }
};
</script>
<style scoped>
.container {
  max-width: 800px;
}

.form-label {
  font-weight: bold;
}

.btn-success {
  width: 100%;
}
</style>
