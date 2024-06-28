<template>
    <div class="row mt-5">
      <!-- Cart Section -->
      <section class="col-md-8 mt-5">
        <div class="card bg-light-gray mb-3">
          <div class="card-header bg-primary text-white">
            <h2>Carrito</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="buscarProducto">
              <div class="mb-3">
                <label for="codigoBarras" class="form-label">Código de Barras del producto</label>
                <input type="text" class="form-control" id="codigoBarras" ref="codigoBarrasInput"
                    v-model="codigoBarras" placeholder="Escanear código de barras">
              </div>
              <button type="submit" class="btn btn-primary d-none">Buscar</button>
            </form>
            <ul class="list-group mt-3">
              <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in carrito" :key="item.id">
                <div>
                  <h6 class="my-0">{{ item.name }}</h6>
                  <small class="text-muted">{{ item.cantidad }} x {{ currency(parseFloat(item.price)) }}</small>
                </div>
                <div class="d-flex align-items-center">
                  <span class="text-muted">{{ currency(item.cantidad * parseFloat(item.price)) }}</span>
                  <button @click="eliminarDelCarrito(item)" class="btn btn-danger btn-sm ms-2">Eliminar</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Totals and Payment Section -->
      <section class="col-md-4 mt-5">
        <div class="card bg-light-gray mb-3">
          <div class="card-header bg-secondary text-white">
            <h2>Totales y Pago</h2>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
              <strong>Total:</strong>
              <strong>{{ currency(totalCarrito) }}</strong>
            </div>
            <form @submit.prevent="procesarCompra">
              <div class="mb-3">
                <label for="formaPago" class="form-label">Forma de Pago</label>
                <select class="form-select" id="formaPago" v-model="formaPago">
                  <option value="efectivo">Efectivo</option>
                  <option value="tarjeta">Tarjeta</option>
                  <option value="transferencia">Transferencia</option>
                </select>
              </div>
              <div v-if="formaPago === 'efectivo'" class="mb-3">
                <label for="montoRecibido" class="form-label">Monto Recibido</label>
                <input type="number" class="form-control" id="montoRecibido" v-model.number="montoRecibido" placeholder="Ingrese el monto recibido">
                <div v-if="cambio >= 0" class="mt-2">
                  <strong>Cambio: </strong>{{ currency(cambio) }}
                </div>
              </div>
              <div v-if="formaPago === 'tarjeta'" class="mb-3">
                <label for="folioCompra" class="form-label">Folio terminal</label>
                <input type="text" class="form-control" id="folioCompra" v-model="folioCompra" placeholder="Ingrese el número de tarjeta">
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="requiereFactura" v-model="requiereFactura">
                  <label class="form-check-label" for="requiereFactura">
                    Requiere Factura
                  </label>
                </div>
                <div v-if="requiereFactura === true" class="mb-3">
                    <label for="correo" class="form-label">Correo electronico</label>
                    <input type="text" class="form-control" id="correo" v-model="email" placeholder="Ingrese el correo del cliente">
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-block w-100">Procesar Compra</button>
            </form>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
    
    import { apiDetails } from "@/constants/api";
    import axios from 'axios';

    export default {
        data() {
            return {
                productos: [
                    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 10, imagen: 'ruta_a_imagen', codigoBarras: 1 },
                    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 20, imagen: 'ruta_a_imagen', codigoBarras: 2 },
                    // Agrega más productos aquí
                ],
                carrito: [],
                codigoBarras: '',
                formaPago: 'efectivo',
                requiereFactura: false,
                montoRecibido: 0,
                folioCompra: '',
                email: '',
                accessToken: 'Bearer ' + localStorage.getItem('token'),
            };
        },
        computed: {
            totalCarrito() {
                return this.carrito.reduce((total, item) => total + item.cantidad * item.precio, 0);
            },
            cambio() {
                return this.montoRecibido - this.totalCarrito;
            }
        },
        methods: {
            async obtenerProductos() {
                try {
                    const response = await axios.get(apiDetails.url + 'api/products', {
                        headers: {
                            'Authorization': `${this.accessToken}` // Incluir el token de acceso en las cabeceras
                        }
                    });
                    this.productos = response.data; // Asignar los productos obtenidos de la API a la variable local
                } catch (error) {
                    alert('Hubo un problema al cargar los productos. Inténtalo de nuevo más tarde.');
                }
            },
            agregarAlCarrito(producto) {
                const itemEnCarrito = this.carrito.find(item => item.id === producto.id);
                if (itemEnCarrito) {
                    itemEnCarrito.cantidad++;
                } else {
                    this.carrito.push({ ...producto, cantidad: 1 });
                }
            },
            buscarProducto() {
                console.log(this.productos);
                this.generarTicket();
                const producto = this.productos.find((p) => {
                    console.log(this.codigoBarras);
                    console.log(p.codigoBarras);
                    return p.codigoBarras == this.codigoBarras;
                });
                
                if (producto) {
                    this.agregarAlCarrito(producto);
                    this.codigoBarras = '';
                } else {
                    alert('Producto no encontrado');
                }

                this.$refs.codigoBarrasInput.focus();
            },
            async procesarCompra() {
                if (this.formaPago === 'efectivo' && this.montoRecibido < this.totalCarrito) {
                    alert('El monto recibido no es suficiente para cubrir el total');
                    return;
                }

                const venta = {
                    total_amount: this.totalCarrito,
                    purchase_date: new Date().toISOString(),
                    payment_method: this.formaPago,
                    status: 'pagado', // Ajusta el estado según tu lógica
                    items: this.carrito.map(item => ({
                        product_id: item.id,
                        quantity: item.cantidad,
                        price: item.price
                    })),
                    notes: '', // Agrega notas si es necesario
                    emailFactura: this.email // Asegúrate de que el campo emailFactura esté disponible
                };
                this.generarTicket();
                alert('Compra procesada');
                    
                    this.carrito = [];
                    this.montoRecibido = 0;
                    this.numeroTarjeta = '';
                    this.emailFactura = '';
                /*try {


                    const response = await axios.post(apiDetails.url + 'api/sales', venta, {
                        headers: {
                            'Authorization': `${this.accessToken}` // Incluir el token de acceso en las cabeceras
                        }
                    });
                    
                } catch (error) {
                    console.error('Error al registrar la venta:', error);
                    alert('Hubo un error al procesar la compra. Inténtalo de nuevo.');
                }*/
            },
            eliminarDelCarrito(producto) {
                const index = this.carrito.indexOf(producto);
                if (index !== -1) {
                    this.carrito.splice(index, 1);
                }
            },
            generarTicket() {
                const ticketWindow = window.open('', '', 'width=400,height=600');
                ticketWindow.document.write('<html><head><title>Ticket de Compra</title></head><body>');
                ticketWindow.document.write('<h1>Punto de Venta</h1>');
                ticketWindow.document.write('<h2>Ticket de Compra</h2>');
                ticketWindow.document.write('<hr>');
                ticketWindow.document.write('<ul>');
                this.carrito.forEach(item => {
                    ticketWindow.document.write(`<li>${item.cantidad} x ${item.nombre} - ${this.currency(item.precio)}: ${this.currency(item.cantidad * item.precio)}</li>`);
                });
                ticketWindow.document.write('</ul>');
                ticketWindow.document.write('<hr>');
                ticketWindow.document.write(`<p>Total: ${this.currency(this.totalCarrito)}</p>`);
                if (this.formaPago === 'efectivo') {
                    ticketWindow.document.write(`<p>Monto Recibido: ${this.currency(this.montoRecibido)}</p>`);
                    ticketWindow.document.write(`<p>Cambio: ${this.currency(this.cambio)}</p>`);
                } else if (this.formaPago === 'tarjeta') {
                    ticketWindow.document.write(`<p>Forma de Pago: Tarjeta</p>`);
                    ticketWindow.document.write(`<p>Número de Tarjeta: ${this.numeroTarjeta}</p>`);
                } else {
                    ticketWindow.document.write(`<p>Forma de Pago: Transferencia</p>`);
                }
                ticketWindow.document.write('<p>Requiere Factura: ' + (this.requiereFactura ? 'Sí' : 'No') + '</p>');
                ticketWindow.document.write('<hr>');
                ticketWindow.document.write('<p>Gracias por su compra</p>');
                ticketWindow.document.write('</body></html>');
                ticketWindow.document.close();
                ticketWindow.print();
            },
            currency(value) {
                return '$' + value.toFixed(2);
            }
        },
        mounted() {
            //this.obtenerProductos(); // Llama a obtenerProductos al montar el componente
            //this.generarTicket();
        }
    }
</script>