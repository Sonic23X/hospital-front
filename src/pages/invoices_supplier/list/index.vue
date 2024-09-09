<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header pb-0">
        <h5>Facturas de proveedores</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive product-table">
          <form class="dataTables_wrapper no-footer">
            <div class="mb-3 row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <router-link to="/invoices-supplier/details/1" class="btn btn-primary w-100">
                  Nueva Factura Proveedor
                </router-link>
              </div>
              <!-- Single Search Input -->
              <div class="col-lg-6 col-md-6 col-sm-12">
                <input type="text" class="form-control" v-model="searchQuery"
                  placeholder="Buscar por Folio, Proveedor o RFC " />
              </div>
            </div>
            <table class="display table-striped table-hover table-bordered table" id="basic-1">
              <thead>
                <tr>
                  <th>Folio</th>
                  <th>Proveedor</th>
                  <th>RFC</th>
                  <th>Total</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="invoice in filteredInvoices" :key="invoice.id">
                  <td>{{ invoice.folio }}</td>
                  <td>{{ invoice.supplier.name }}</td>
                  <td>{{ invoice.rfc }}</td>
                  <td>{{ invoice.total_amount }}</td>
                  <td>
                    <button class="btn btn-primary btn-xs me-2" @click="viewRecord(invoice.id)">Ver</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Pagination -->
            <ul class="pagination p-2 justify-content-end">
              <li class="page-item"><a class="page-link" href="#"
                  @click.prevent="change_page(currentPage - 1)">Anterior</a></li>
              <li class="page-item" v-for="i in num_pages()" :key="i" :class="{ 'active': i === currentPage }"
                @click="change_page(i)">
                <a class="page-link" href="#">{{ i }}</a>
              </li>
              <li class="page-item"><a class="page-link" href="#"
                  @click.prevent="change_page(currentPage + 1)">Siguiente</a></li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { apiDetails } from "@/constants/api";

export default {
  data() {
    return {
      elementsPerPage: 10,
      currentPage: 1,
      invoices: [],
      searchQuery: '', 
      accessToken: 'Bearer ' + localStorage.getItem('token')
    };
  },
  created() {
    this.fetchInvoices();
  },
  computed: {
    filteredInvoices() {
      let filtered = this.invoices;

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(invoice =>
          invoice.business_name.toLowerCase().includes(query) ||
          invoice.rfc.toLowerCase().includes(query) ||
          invoice.folio.toLowerCase().includes(query)
        );
      }

      return filtered.slice(this.startIndex, this.endIndex);
    },
    startIndex() {
      return (this.currentPage - 1) * this.elementsPerPage;
    },
    endIndex() {
      return this.startIndex + this.elementsPerPage;
    }
  },
  methods: {
    async fetchInvoices() {
      try {
        const { data } = await axios.get(apiDetails.url + 'api/invoices-supplier', {
          headers: {
            'Authorization': this.accessToken,
          },
        });
        this.invoices = data;
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    },
    viewRecord(invoiceId) {
      this.$router.push({ name: 'invoicesSupplierDetails', params: { id: invoiceId } });
    },
    change_page(page) {
      if (page > 0 && page <= this.num_pages()) {
        this.currentPage = page;
      }
    },
    num_pages() {
      return Math.ceil(this.filteredInvoices.length / this.elementsPerPage);
    },
  }
};
</script>
