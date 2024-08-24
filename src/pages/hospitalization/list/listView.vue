<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header pb-0">
        <h5>Lista de hospitalizaciones</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive product-table">
          <div class="dataTables_wrapper no-footer">
            <div class="mb-3 row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <router-link to="/hospitalizations/details" class="btn btn-primary w-100">
                  Agregar hospitalización
                </router-link>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <input 
                  v-model="filterQuery" 
                  type="text" 
                  class="form-control" 
                  placeholder="Buscar por nombre, fecha de ingreso, fecha de salida o habitación" 
                />
              </div>
            </div>
            <table class="display table-striped table-hover table-bordered table" id="basic-1">
              <thead>
                <tr>
                  <th @click="sortBy('room_id')" class="sorting_asc" scope="col">Habitación</th>
                  <th @click="sortBy('patient_id')" class="sorting_asc" scope="col">Nombre del Paciente</th>
                  <th @click="sortBy('patient_familiar_name')" class="sorting_asc" scope="col">Familiar del Paciente</th>
                  <th @click="sortBy('date_in')" class="sorting_asc" scope="col">Fecha de Ingreso</th>
                  <th @click="sortBy('date_out')" class="sorting_asc" scope="col">Fecha de Salida</th>
                  <th @click="sortBy('patient_familiar_phone')" class="sorting_asc" scope="col">Teléfono Familiar</th>
                  <th class="sorting_asc" scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd" v-for="row in get_rows" :key="row.id">
                  <td class="sorting_1">{{ row.room_id }}</td>
                  <td class="sorting_1">
                    <router-link :to="'/hospitalizations/details/' + row.id">
                        <h6>{{ row.patient_name }}</h6>
                    </router-link>
                  </td>
                  <td class="sorting_1">{{ row.patient_familiar_name }}</td>
                  <td class="sorting_1">{{ row.date_in }}</td>
                  <td class="sorting_1">{{ row.date_out }}</td>
                  <td class="sorting_1">{{ row.patient_familiar_phone }}</td>
                  <td>
                    <button class="btn btn-danger btn-xs me-2" type="button" 
                      @click='deleteHospitalization(row.id)' title="">
                      Borrar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul class="pagination p-2 justify-content-end">
              <li class="page-item">
                <a class="page-link" href="#" @click.prevent="change_page(currentPage - 1)">Anterior</a>
              </li>
              <li class="page-item" v-for="i in num_pages()" :key="i" :class="{ active: i == currentPage }">
                <a class="page-link" href="#" @click.prevent="change_page(i)">{{ i }}</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" @click.prevent="change_page(currentPage + 1)">Siguiente</a>
              </li>
            </ul>
          </div>
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
      ascending: false,
      sortColumn: "",
      filterQuery: "",
      allData: [], 
      hospitalizations: [], 
      accessToken: 'Bearer ' + localStorage.getItem('token'), // Token de acceso
    };
  },
  watch: {
    filterQuery(search) {
      this.filterData(search);
    },
  },
  computed: {
    get_rows() {
      let sortedData = this.sortData(this.allData);
      let start = (this.currentPage - 1) * this.elementsPerPage;
      let end = start + this.elementsPerPage;
      if (sortedData) {
        start = (this.currentPage - 1) * this.elementsPerPage;
        end = start + this.elementsPerPage;
        return sortedData.slice(start, end);
      }
      return this.allData.slice(start, end);
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await axios.get(apiDetails.url + 'api/hospitalizations', {
          headers: {
            'Authorization': this.accessToken,
          },
        });

        this.allData = data;
        this.hospitalizations = data;
        this.filterData(this.filterQuery); 
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    },
    filterData(query) {
      console.log(query);
      const data = this.hospitalizations;
      if (!query) {
        this.allData = this.hospitalizations;
        return;
      }
      this.allData = data.filter((row) => {
        return (
          row.patient_familiar_name.toLowerCase().includes(query.toLowerCase()) ||
          row.date_in.includes(query) ||
          (row.date_out && row.date_out.includes(query)) ||
          row.room_id.toString().includes(query)
        );
      });
    },
    sortBy(column) {
      this.ascending = this.sortColumn === column ? !this.ascending : true;
      this.sortColumn = column;
    },
    sortData(data) {
      if (!this.sortColumn) return data;
      return data.slice().sort((a, b) => {
        if (a[this.sortColumn] < b[this.sortColumn]) return this.ascending ? -1 : 1;
        if (a[this.sortColumn] > b[this.sortColumn]) return this.ascending ? 1 : -1;
        return 0;
      });
    },
    change_page(page) {
      if (page < 1 || page > this.num_pages()) return;
      this.currentPage = page;
    },
    num_pages() {
      return Math.ceil(this.allData.length / this.elementsPerPage);
    },
    deleteHospitalization(id) {
      const hospitalization = this.allData.find((row) => row.id === id);

      if (hospitalization.date_out !== null) {
        this.$swal({
          title: 'Error',
          text: 'No se puede eliminar el registro porque ya tiene una fecha de salida.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        return;
      }

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
          axios.delete(apiDetails.url + 'api/hospitalizations/' + id, {
            headers: {
              'Authorization': `${this.accessToken}`
            }
          })
          .then(response => {
            if (response.status === 204) {
              this.fetchData();
              this.$swal(
                '¡Borrado!',
                'El registro ha sido eliminado.',
                'success'
              );
            }
          })
          .catch(error => {
            console.error('Error al obtener los datos de la API:', error);
          });
        }
      });
    }
  },
};
</script>