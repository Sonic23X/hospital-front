<template>
     <div class="col-sm-12">
       <div class="card">
         <div class="card-header pb-0">
          <h5>Lista de productos registrados</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive product-table">
            <form class="dataTables_wrapper no-footer">
              <div class="mb-3 row">
                <router-link to="/inventary/add" class="btn btn-primary">
                  Agregar producto
                </router-link>
              </div>
              <table class="display table-striped table-hover table-bordered table" id="basic-1">
                <thead>
                  <tr>
                    <th class="sorting_asc" scope="col">Imagen</th>
                    <th class="sorting_asc" scope="col" >Nombre</th>
                    <th class="sorting_asc" scope="col" >Precio</th>
                    <th class="sorting_asc" scope="col" >Stock</th>
                    <th class="sorting_asc" scope="col" >#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd" v-for="row in get_rows" :key="row">
                    <td class="sorting_1">
                      <router-link :to="'/inventary/details/' + row.id">
                        <div v-if="row.images != null">
                          <img :src="url + row.images[0]" alt="product-img" class="img-fluid" />
                        </div>
                        <div v-else>
                          <span> Sin imagenes </span>
                        </div>
                      </router-link>
                    </td>
                    <td class="sorting_1">
                      <router-link :to="'/inventary/details/' + row.id">
                        <h6>{{row.name}}</h6>
                      </router-link>
                      <span>{{row.description}}</span>
                    </td>
                    <td class="sorting_1">${{row.price}}</td>
                    <td class="sorting_1">{{row.stock}}</td>
                    <td>
                      <button class="btn btn-danger btn-xs me-2" type="button" 
                        data-original-title="btn btn-danger btn-xs" @click='deleteProduct(row.id)' title="">
                        Borrar
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
      axios.get(apiDetails.url + 'api/products', {
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
    deleteProduct(id) {
      this.$swal({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, borrarlo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(apiDetails.url + 'api/products/' + id, {
            headers: {
              'Authorization': `${this.accessToken}`
            }
          })
          .then(response => {
            if (response.status == 200) {
              this.fetchData();
              this.$swal(
                '¡Borrado!',
                'El producto ha sido eliminado.',
                'success'
              );
            }
          })
          .catch(error => {
            console.error('Error al obtener los datos de la API:', error);
          });
        }
      })
    },
  }
}
</script>