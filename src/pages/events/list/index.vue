<template>
  <Breadcrumbs title="Citas" />
  <div class="container-fluid list-products">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header pb-0">
          <h5>Citas registradas</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive product-table">
            <form class="dataTables_wrapper no-footer">
              <div class="mb-3 row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <router-link to="/events/create" class="btn btn-primary w-100">
                    Nueva Cita
                  </router-link>
                </div>
              </div>
              <table class="display table-striped table-hover table-bordered table" id="basic-1">
                <thead>
                  <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Tipo de consulta</th>
                    <th scope="col">Nombre paciente</th>
                    <th scope="col">Nombre médico</th>
                    <th scope="col">Especialidad</th>
                    <th scope="col">Estado consulta</th>
                    <th scope="col">#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="appointment in get_rows" :key="appointment.id">
                    <td>{{ new Date(appointment.appointment_date +" " +appointment.appointment_time).toLocaleDateString('es-MX') }}</td>
                    <td>{{ appointment.consultation_type }}</td>
                    <td>{{ appointment.patient.name }}</td>
                    <td>Test Doctor {{ appointment.doctor_id }}</td>
                    <td>Test Doctor {{ appointment.doctor_id }}</td>
                    <td>{{ appointment.status }}</td>
                    <td>
                      <button v-if="appointment.status != 'done' && appointment.status != 'cancelled'" class="btn btn-primary btn-xs me-2"
                        type="button" @click="markAsDone(appointment.id)" title="done">
                        Finalizar
                      </button>

                      <button v-if="appointment.status != 'done' && appointment.status != 'cancelled'" class="btn btn-danger btn-xs me-2"
                        type="button" @click="markAsCancel(appointment.id)" title="cancel">
                        Cancelar
                      </button>
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
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';
import { apiDetails } from "@/constants/api";

export default {
  data() {
    return {
      elementsPerPage: 10,
      currentPage: 1,
      appointments: [],
      accessToken: 'Bearer ' + localStorage.getItem('token')
    };
  },
  computed: {
    get_rows() {
      const start = (this.currentPage - 1) * this.elementsPerPage;
      const end = start + this.elementsPerPage;
      return this.appointments.slice(start, end);
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const storedAppointments = localStorage.getItem('appointments');
      if (storedAppointments) {
        this.appointments = JSON.parse(storedAppointments);
      }
    },
    async fetchData() {
      try {
        const { data } = await axios.get(apiDetails.url + 'api/appointments', {
          headers: {
            'Authorization': this.accessToken,
          },
        });
        this.appointments = data;
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    },
    viewAppointmentDetails(id) {
      this.$router.push({ name: 'appointmentDetails', params: { id: id } });
    },
    change_page(page) {
      if (page > 0 && page <= this.num_pages()) {
        this.currentPage = page;
      }
    },
    num_pages() {
      return Math.ceil(this.appointments.length / this.elementsPerPage);
    },
    async markAsDone(id) {
      try {
        const { isConfirmed } = await this.$swal({
          title: '¿Estás seguro?',
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, borrarlo!',
          cancelButtonText: 'Cancelar'
        });
        if (!isConfirmed) {
          return;
        }
        const { data } = await axios.post(`${apiDetails.url}api/appointments/done/${id}`, null, {
          headers: {
            'Authorization': this.accessToken,
          },
        });
        Swal.fire(
          'Cerrada',
          'La cita ha sido cerrada exitosamente',
          'success'
        );
        await this.fetchData();
      } catch (error) {
        console.error('Error al cerrar la cita de la API:', error);
      }
    },
    async markAsCancel(id) {
      try {
        const { isConfirmed } = await this.$swal({
          title: '¿Estás seguro?',
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, borrarlo!',
          cancelButtonText: 'Cancelar'
        });
        if (!isConfirmed) {
          return;
        }
        const { data } = await axios.post(`${apiDetails.url}api/appointments/cancel/${id}`, null, {
          headers: {
            'Authorization': this.accessToken,
          },
        });
        Swal.fire(
          'Cancelada',
          'La cita ha sido cancelada exitosamente',
          'success'
        );
        await this.fetchData();
      } catch (error) {
        console.error('Error al cerrar la cita de la API:', error);
      }
    },
  },
};
</script>