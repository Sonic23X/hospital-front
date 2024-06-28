<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header pb-0">
       <h5>Ventas registradas</h5>
     </div>
     <div class="card-body">
       <div class="table-responsive product-table">
         <form class="dataTables_wrapper no-footer">
            <div class="mb-3 row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <router-link to="/sales/checkout" class="btn btn-primary w-100">
                  Ir a punto de venta
                </router-link>
              </div>
            </div>
           <table class="display table-striped table-hover table-bordered table" id="basic-1">
             <thead>
               <tr>
                 <th class="sorting_asc" scope="col" >Folio</th>
                 <th class="sorting_asc" scope="col" >Fecha</th>
                 <th class="sorting_asc" scope="col" >Metodo de pago</th>
                 <th class="sorting_asc" scope="col" >Monto final</th>
                 <th class="sorting_asc" scope="col" >#</th>
               </tr>
             </thead>
             <tbody>
                <tr class="odd" v-for="row in get_rows" :key="row">
                  <td class="sorting_1">
                    <router-link :to="'/inventary/details/' + row.id">
                      <h6>{{row.id}}</h6>
                    </router-link>
                  </td>
                  <td class="sorting_1">{{new Date(row.created_at).toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}}</td>
                  <td class="sorting_1">
                    {{row.stock}}
                  </td>
                  <td class="sorting_1">${{row.total_amount}}</td>
                  <td>
                    <button class="btn btn-primary btn-xs me-2" type="button" 
                      data-original-title="btn btn-danger btn-xs" @click='seeSaleDetails(row.id)' title="details">
                      Ver detalles
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
          <ul class="pagination p-2 justify-content-end" >
            <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
            <li  class="page-item" v-for="i in num_pages()" :key="i" v-bind:class="[i == currentPage ? 'active' : '']" v-on:click="change_page(i)">
              <a class="page-link">{{ i }}</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
          </ul>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productList from "@/mixins/productList";
import { apiDetails } from "@/constants/api";
import { mapState } from "vuex";
import axios from 'axios';

export default {
  mixins: [productList],
  data() {
    return {
      elementsPerPage: 10,
      currentPage: 1,
      ascending: false,
      sortColumn: "",
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filterQuery: "",
      allData: [],
      accessToken: 'Bearer ' + localStorage.getItem('token'),
      url: apiDetails.urlImage,
    }
  },
  watch: {
    filterQuery(search) {
      var filteredData = this.productlist.filter((row) => {
        return (
          row.productName.toLowerCase().includes(search.toLowerCase()) ||
          row.productSubName.toLowerCase().includes(search.toLowerCase()) ||
          row.startData.toLowerCase().includes(search.toLowerCase())
        );
      });
      search == "" ? this.allData = this.productlist : this.allData = filteredData
    },
  },
  computed: {
    ...mapState({
      productlist: (state) => state.productlist.list,    
    }),
    columns() {
      if (this.allData.length == 0) {
        return [];
      }
      return Object.keys(this.allData[0]);
    },
    get_rows() {
      var start = (this.currentPage - 1) * this.elementsPerPage;
      var end = start + this.elementsPerPage;
      return this.allData.slice(start, end);
    },
  },
  created() {
    //this.allData = this.productlist;
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get(apiDetails.url + 'api/sales', {
        headers: {
          'Authorization': `${this.accessToken}` // Incluir el token de acceso en las cabeceras
        }
      })
      .then(response => {
        this.allData = response.data;
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
    },
    seeSaleDetails(id) {
      this.$router.push({ name: 'salesDetails', params: { id: id } });
    },
  }
}
</script>