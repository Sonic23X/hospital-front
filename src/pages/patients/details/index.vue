<template>
    <Breadcrumbs :title="`Expediente de ${patient.name}`" main="Pacientes"/>
    <div class="container-fluid list-products">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <h3>Información personal</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-6 col-sm-12 mb-3">
                                <strong>ID:</strong> {{ patient.id }}
                            </div>
                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <strong>Nombre:</strong> {{ patient.name }}
                            </div>
                            <div class="col-md-6 col-lg-6 col-sm-12 mb-3">
                                <strong>Edad:</strong> {{ patient.age || 'No disponible' }}
                            </div>
                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <strong>Fecha de nacimiento:</strong> {{ patient.birthDate }}
                            </div>
                            <div class="col-md-6 col-lg-6 col-sm-12 mb-3">
                                <strong>Género:</strong> {{ patient.gender || 'No disponible' }}
                            </div>
                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <strong>Dirección:</strong> {{ patient.address || 'No disponible' }}
                            </div>
                            <div class="col-md-6 col-lg-6 col-sm-12">
                                <strong>Teléfono:</strong> {{ patient.phone || 'No disponible' }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-header pb-0">
                        <h5>Estudios</h5>
                    </div>
                    <div class="card-body">
                        <span>Sin registros</span>

                        <div class="mt-5">
                            <button class="btn btn-primary w-100">
                                <i data-feather="plus"></i> Registrar estudio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-header pb-0">
                        <h5>Insumos</h5>
                    </div>
                    <div class="card-body">
                        <span>Sin registros</span>

                        <div class="mt-5">
                            <button class="btn btn-primary w-100">
                                <i data-feather="plus"></i> Registrar insumo consumido
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-header pb-0">
                        <h5>Citas pasadas</h5>
                    </div>
                    <div class="card-body">
                        <span v-if="pastAppointments.length === 0">Sin registros</span>
                        <ul v-else>
                            <li v-for="appointment in pastAppointments" :key="appointment.id">
                                <strong>
                                    {{ new Date(appointment.appointmentDate).toLocaleDateString('es-MX') }}:
                                </strong> 
                                {{ appointment.consultationType }} con {{ appointment.doctorName }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-header pb-0">
                        <h5>Registros del doctor</h5>
                    </div>
                    <div class="card-body">
                        <span>Sin registros</span>

                        <div class="mt-5">
                            <button class="btn btn-primary w-100">
                                <i data-feather="plus"></i> Subir archivo 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        patient: null,
        pastAppointments: []
      };
    },
    created() {
      this.fetchPatientRecord();
    },
    methods: {
      fetchPatientRecord() {
        const patientId = this.$route.params.id;
        const storedPatients = localStorage.getItem('patients');
        if (storedPatients) {
          const patients = JSON.parse(storedPatients);
          this.patient = patients.find(patient => patient.id === parseInt(patientId));
        }
        const storedAppointments = localStorage.getItem('appointments');
        if (storedAppointments) {
          const appointments = JSON.parse(storedAppointments);
          this.pastAppointments = appointments.filter(appointment => appointment.patientName === this.patient.name);
        }
      }
    }
  };
</script>