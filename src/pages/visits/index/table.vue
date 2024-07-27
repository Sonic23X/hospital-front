<template>
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header pb-0">
          <h5>Visitas registradas</h5>
        </div>
        <div class="card-body">
          <div class="table-responsive product-table">
            <form class="dataTables_wrapper no-footer">
              <div class="mb-3 row">
                <div class="col-lg-6 col-md-6 col-sm-12"></div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <router-link to="/visits/create" class="btn btn-primary w-100">
                        Registrar visita
                    </router-link>
                </div>
              </div>
              <table class="display table-striped table-hover table-bordered table" id="basic-1">
                <thead>
                  <tr>
                    <th scope="col">Número de cuarto</th>
                    <th scope="col">Nombre de visitante p.</th>
                    <th scope="col">Número de personas</th>
                    <th scope="col">Fecha inicio</th>
                    <th scope="col">Fecha fin</th>
                    <th scope="col">#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in get_rows" :key="row.id">
                    <td>{{ row.roomNumber }}</td>
                    <td>{{ row.personName }}</td>
                    <td>{{ row.numberOfPeople }}</td>
                    <td>{{ new Date(row.startDate).toLocaleString('es-MX') }}</td>
                    <td>{{ row.endDate != null ? new Date(row.endDate).toLocaleString('es-MX') : 'En curso' }}</td>
                    <td>
                      <button v-if="row.endDate == null" class="btn btn-primary btn-xs me-2" type="button" @click="closeVisit(row.id)" title="details">
                        Finalizar visita
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul class="pagination p-2 justify-content-end">
                <li class="page-item"><a class="page-link" href="#" @click.prevent="change_page(currentPage - 1)">Anterior</a></li>
                <li class="page-item" v-for="i in num_pages()" :key="i" :class="{ 'active': i === currentPage }" @click="change_page(i)">
                  <a class="page-link" href="#">{{ i }}</a>
                </li>
                <li class="page-item"><a class="page-link" href="#" @click.prevent="change_page(currentPage + 1)">Siguiente</a></li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
    import Swal from 'sweetalert2';

    export default {
        data() {
            return {
                elementsPerPage: 10,
                currentPage: 1,
                visits: [],
            };
        },
        computed: {
            get_rows() {
                const start = (this.currentPage - 1) * this.elementsPerPage;
                const end = start + this.elementsPerPage;
                return this.visits.slice(start, end);
            },
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                const storedVisits = localStorage.getItem('visits');
                if (storedVisits) {
                    this.visits = JSON.parse(storedVisits);
                }
            },
            change_page(page) {
                if (page > 0 && page <= this.num_pages()) {
                    this.currentPage = page;
                }
            },
            num_pages() {
                return Math.ceil(this.visits.length / this.elementsPerPage);
            },
            closeVisit(id) {
                const visitIndex = this.visits.findIndex(visit => visit.id === id);
                if (visitIndex !== -1) {
                    Swal.fire({
                    title: '¿Estás seguro?',
                    text: "No podrás revertir esta acción",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, cerrar visita',
                    cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.visits[visitIndex].endDate = new Date().toISOString();
                            localStorage.setItem('visits', JSON.stringify(this.visits));
                            Swal.fire(
                                'Cerrada',
                                'La visita ha sido cerrada.',
                                'success'
                            );
                        }
                    });
                }
            },
        },
    };
</script>