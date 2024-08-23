<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header pb-0">
        <h5>Lista de Expedientes</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive product-table">
          <form class="dataTables_wrapper no-footer">
            <div class="mb-3 row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <router-link to="/patients/create" class="btn btn-primary w-100">
                  Nuevo paciente
                </router-link>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <input type="text" class="form-control" v-model="searchQuery"
                  placeholder="Buscar por nombre o teléfono" />
              </div>
            </div>
            <table class="display table-striped table-hover table-bordered table" id="basic-1">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha nacimiento</th>
                  <th>Teléfono</th>
                  <th>Dirección</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="patient in filteredPatients" :key="patient.id">
                  <td>{{ patient.name }}</td>
                  <td>{{ patient.birthdate }}</td>
                  <td>{{ patient.phone }}</td>
                  <td>{{ patient.address }}</td>
                  <td>
                    <button class="btn btn-primary" @click="viewRecord(patient.id)">Ver Expediente</button>
                  </td>
                </tr>
              </tbody>
            </table>
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
      patients: [],
      searchQuery: '', // Añadido para almacenar la consulta de búsqueda
      accessToken: 'Bearer ' + localStorage.getItem('token')
    };
  },
  created() {
    this.fetchPatients();
  },
  computed: {
    filteredPatients() {
      if (!this.searchQuery) {
        return this.get_rows;
      }

      const query = this.searchQuery.toLowerCase();
      return this.patients.filter(patient =>
        patient.name.toLowerCase().includes(query) ||
        patient.phone.toLowerCase().includes(query)
      ).slice(this.startIndex, this.endIndex);
    },
    get_rows() {
      return this.patients;
    },
    startIndex() {
      return (this.currentPage - 1) * this.elementsPerPage;
    },
    endIndex() {
      return this.startIndex + this.elementsPerPage;
    }
  },
  methods: {
    async fetchPatients() {
      try {
        const { data } = await axios.get(apiDetails.url + 'api/patients', {
          headers: {
            'Authorization': this.accessToken,
          },
        });
        this.patients = data;
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    },
    viewRecord(patientId) {
      this.$router.push({ name: 'patientsDetails', params: { id: patientId } });
    },
    change_page(page) {
      if (page > 0 && page <= this.num_pages()) {
        this.currentPage = page;
      }
    },
    num_pages() {
      return Math.ceil(this.filteredPatients.length / this.elementsPerPage);
    },
  }
};
</script>
