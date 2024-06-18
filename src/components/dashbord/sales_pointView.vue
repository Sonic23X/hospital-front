<template>
    <Breadcrumbs title="Ventas"/>
    <div class="container-fluid">
        <div class="row pb-2">
            <div class="col-12 text-end">
                <button @click="irAVentaGeneral" type="button" class="btn btn-primary me-2">Venta General</button>
                <button @click="irACobroDeConsulta" type="button" class="btn btn-primary me-2">Cobro de Consulta</button>
                <button @click="irAVentaDeInsumos" type="button" class="btn btn-primary me-2">Venta de Insumos</button>
                <button @click="irAVentaDeMedicamento" type="button" class="btn btn-primary me-2">Venta de Medicamento</button>
                <button @click="irAElaboracionDeEstudios" type="button" class="btn btn-primary me-2">Elaboración de Estudios</button>
                <button @click="exportarPDF" type="button" class="btn btn-success" :disabled="ventasSeleccionadas.length === 0">
                    <vue-feather type="upload" size="16"></vue-feather><span> Exportar</span>
                </button>
            </div>
        </div>
        <div class="row pb-2">
            <div class="col-12">
                <div class="table-responsive m-2">
                    <table class="table">
                        <thead>
                            <tr class="border-bottom-primary">
                                <th scope="col"><input type="checkbox" @change="seleccionarTodos($event)"></th>
                                <th scope="col">Id</th>
                                <th scope="col">Tipo de Venta</th>
                                <th scope="col">Método de Pago</th>
                                <th scope="col">Monto Total</th>
                                <th scope="col">Fecha de Venta</th>
                                <th scope="col">Vendedor</th>
                                <th scope="col">Generó Factura</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="venta in ventas" :key="venta.idVenta">
                                <td><input type="checkbox" v-model="ventasSeleccionadas" :value="venta.idVenta"></td>
                                <th scope="row">{{ venta.idVenta }}</th>
                                <td>{{ venta.tipoDeVenta }}</td>
                                <td>{{ venta.metodoDePago }}</td>
                                <td>${{ venta.montoTotal }}</td>
                                <td>{{ venta.fechaDeVenta }}</td>
                                <td>{{ venta.vendedor }}</td>
                                <td>{{ venta.generoFactura ? 'Sí' : 'No' }}</td>
                                <td>
                                    <button @click="verDetalleVenta(venta.idVenta)" type="button" class="btn btn-sm btn-info m-1">
                                        <vue-feather type="eye" size="16"></vue-feather>
                                    </button>
                                    <button v-if="!venta.generoFactura" @click="abrirModalFactura(venta)" type="button" class="btn btn-sm btn-warning m-1">
                                        <vue-feather type="file-text" size="16"></vue-feather>
                                    </button>
                                    <button v-else disabled type="button" class="btn btn-sm btn-secondary m-1">
                                        <vue-feather type="file-text" size="16"></vue-feather>
                                    </button>
                                    <button @click="exportarPDFIndividual(venta.idVenta)" type="button" class="btn btn-sm btn-success m-1">
                                        <vue-feather type="upload" size="16"></vue-feather>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal para generar factura -->
        <div class="modal fade" id="modalFactura" tabindex="-1" aria-labelledby="modalFacturaLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalFacturaLabel">Generar Factura</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="submitFactura">
                  <div class="mb-3">
                    <label for="rfc" class="form-label">RFC</label>
                    <input type="text" id="rfc" v-model="factura.rfc" class="form-control" required>
                  </div>
                  <div class="mb-3">
                    <label for="razonSocial" class="form-label">Razón Social</label>
                    <input type="text" id="razonSocial" v-model="factura.razonSocial" class="form-control" required>
                  </div>
                  <div class="mb-3">
                    <label for="cfdi" class="form-label">CFDI</label>
                    <input type="text" id="cfdi" v-model="factura.cfdi" class="form-control" required>
                  </div>
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Modal } from 'bootstrap';
import feather from 'feather-icons';

console.log(feather);

export default {
  components: {
    
  },
  data() {
    return {
      ventas: [],
      ventasSeleccionadas: [],
      ventaSeleccionada: null,
      factura: {
        rfc: '',
        razonSocial: '',
        cfdi: ''
      }
    };
  },
  mounted() {
    this.cargarVentas();
    // feather.replace();
  },
  methods: {
    cargarVentas() {
      let url_1 = "../../assets/products/sales.json" 
      axios.get(url_1)
        .then(response => {
          this.ventas = response.data.ventas;
        })
        .catch(error => {
          console.error('Error al cargar las ventas:', error);
        });
    },
    seleccionarTodos(event) {
      if (event.target.checked) {
        this.ventasSeleccionadas = this.ventas.map(venta => venta.idVenta);
      } else {
        this.ventasSeleccionadas = [];
      }
    },
    irAVentaGeneral() {
      this.$router.push({ name: 'SalesAddView' });  
    },
    irACobroDeConsulta() {
      this.$router.push({ name: 'CobroDeConsultaView' });
    },
    irAVentaDeInsumos() {
      this.$router.push({ name: 'VentaDeInsumosView' });
    },
    irAVentaDeMedicamento() {
      this.$router.push({ name: 'VentaDeMedicamentoView' });
    },
    irAElaboracionDeEstudios() {
      this.$router.push({ name: 'ElaboracionDeEstudiosView' });
    },
    verDetalleVenta(idVenta) {
      this.$router.push({ name: 'SalesDetailView', params: { idVenta } });
    },
    abrirModalFactura(venta) {
      this.ventaSeleccionada = venta;
      const modalElement = document.getElementById('modalFactura');
      const modal = new Modal(modalElement);
      modal.show();
    },
    async submitFactura() {
      try {
        // Aquí podrías añadir lógica adicional para generar la factura
        this.ventaSeleccionada.generoFactura = true;
        // Actualizar el archivo JSON
        await axios.post('/path/to/save/sales', { ventas: this.ventas });
        alert(`Factura generada para la venta ${this.ventaSeleccionada.idVenta}`);

        // Limpiar el formulario de factura y cerrar el modal
        this.factura.rfc = '';
        this.factura.razonSocial = '';
        this.factura.cfdi = '';
        const modalElement = document.getElementById('modalFactura');
        const modal = Modal.getInstance(modalElement);
        modal.hide();
      } catch (error) {
        console.error('Error al generar la factura:', error);
      }
    },
    async exportarPDF() {
      const doc = new jsPDF();

      for (let idVenta of this.ventasSeleccionadas) {
        const venta = this.ventas.find(venta => venta.idVenta === idVenta);
        doc.text(`Venta ID: ${venta.idVenta}`, 10, 10);
        doc.text(`Tipo de Venta: ${venta.tipoDeVenta}`, 10, 20);
        doc.text(`Método de Pago: ${venta.metodoDePago}`, 10, 30);
        doc.text(`Monto Total: $${venta.montoTotal}`, 10, 40);
        doc.text(`Fecha de Venta: ${venta.fechaDeVenta}`, 10, 50);
        doc.text(`Vendedor: ${venta.vendedor}`, 10, 60);
        doc.text(`Generó Factura: ${venta.generoFactura ? 'Sí' : 'No'}`, 10, 70);

        const productos = venta.productos.map(producto => [
          producto.nombreProducto,
          producto.descripcion,
          `$${producto.precio}`,
          producto.cantidad,
          `$${producto.total}`
        ]);

        doc.autoTable({
          startY: 80,
          head: [['Nombre del Producto', 'Descripción', 'Precio', 'Cantidad', 'Total']],
          body: productos
        });

        doc.addPage();
      }

      doc.save('ventas.pdf');
    },
    async exportarPDFIndividual(idVenta) {
      const doc = new jsPDF();
      const venta = this.ventas.find(venta => venta.idVenta === idVenta);
      doc.text(`Venta ID: ${venta.idVenta}`, 10, 10);
      doc.text(`Tipo de Venta: ${venta.tipoDeVenta}`, 10, 20);
      doc.text(`Método de Pago: ${venta.metodoDePago}`, 10, 30);
      doc.text(`Monto Total: $${venta.montoTotal}`, 10, 40);
      doc.text(`Fecha de Venta: ${venta.fechaDeVenta}`, 10, 50);
      doc.text(`Vendedor: ${venta.vendedor}`, 10, 60);
      doc.text(`Generó Factura: ${venta.generoFactura ? 'Sí' : 'No'}`, 10, 70);

    const productos = venta.productos.map(producto => [
        producto.nombreProducto,
        producto.descripcion,
        `$${producto.precio}`,
        producto.cantidad,
        `$${producto.total}`
    ]);

    doc.autoTable({
        startY: 80,
        head: [['Nombre del Producto', 'Descripción', 'Precio', 'Cantidad', 'Total']],
        body: productos
    });

    doc.save(`venta_${idVenta}.pdf`);
    }
}
}
</script>
<style scoped>
.container {
  max-width: 1200px;
}

.form-label {
  font-weight: bold;
}
</style>
