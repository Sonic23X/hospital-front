<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header pb-0">
        <h5>Lista de Doctores</h5>
      </div>
      <div class="card-body">
        <div class="table-responsive product-table">
          <form class="dataTables_wrapper no-footer">
            <div class="mb-3 row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <router-link to="/doctors/details" class="btn btn-primary w-100">
                  Nuevo Doctor
                </router-link>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <input type="text" class="form-control" v-model="searchQuery"
                  placeholder="Buscar por nombre" />
              </div>
            </div>
            <table class="display table-striped table-hover table-bordered table" id="basic-1">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Especialidades</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="doctor in filteredDoctors" :key="doctor.id">
                  <td>{{ doctor.name }}</td>
                  <td>
                    <span v-for="(specialty, index) in doctor.specialties" :key="index" class="mx-2">
                      {{ specialty.name }}
                    </span>
                  </td>
                  <td>
                    <button class="btn btn-primary" @click="viewRecord(doctor.id)">Editar</button>
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
      doctors: [],
      searchQuery: '', 
      accessToken: 'Bearer ' + localStorage.getItem('token')
    };
  },
  created() {
    this.fetchDoctors();
  },
  computed: {
    filteredDoctors() {
      if (!this.searchQuery) {
        return this.get_rows;
      }

      const query = this.searchQuery.toLowerCase();
      return this.doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(query)
      ).slice(this.startIndex, this.endIndex);
    },
    get_rows() {
      return this.doctors;
    },
    startIndex() {
      return (this.currentPage - 1) * this.elementsPerPage;
    },
    endIndex() {
      return this.startIndex + this.elementsPerPage;
    }
  },
  methods: {
    async fetchDoctors() {
      try {
        const { data } = await axios.get(apiDetails.url + 'api/doctors', {
          headers: {
            'Authorization': this.accessToken,
          },
        });
        this.doctors = data;
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    },
    viewRecord(doctorId) {
      this.$router.push({ name: 'doctorsDetails', params: { id: doctorId } });
    },
    change_page(page) {
      if (page > 0 && page <= this.num_pages()) {
        this.currentPage = page;
      }
    },
    num_pages() {
      return Math.ceil(this.filteredDoctors.length / this.elementsPerPage);
    },
  }
};
</script>
