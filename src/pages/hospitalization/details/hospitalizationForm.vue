<template>
    <div class="card">
        <form class="form theme-form" @submit.prevent="saveHospitalization">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="room_id">Número de habitación</label>
                            <select class="form-select digits" id="room_id" v-model="form.room_id" required :disabled="isReadOnly">
                                <option v-for="room in rooms" :value="room.id" :key="room.id">{{ room.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="patient_id">Paciente</label>
                            <select class="form-select digits" id="patient_id" v-model="form.patient_id" required :disabled="isReadOnly">
                                <option v-for="patient in patients" :value="patient.id" :key="patient.id">{{ patient.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="date_in">Fecha de ingreso</label>
                            <input class="form-control" id="date_in" type="datetime-local" v-model="form.date_in" required :disabled="isReadOnly">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="date_out">Fecha de salida</label>
                            <input class="form-control" id="date_out" type="datetime-local" v-model="form.date_out" :disabled="isReadOnly">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="patient_familiar_name">Nombre del familiar</label>
                            <input class="form-control" id="patient_familiar_name" type="text" v-model="form.patient_familiar_name" :disabled="isReadOnly">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="patient_familiar_phone">Teléfono del familiar</label>
                            <input class="form-control" id="patient_familiar_phone" type="text" v-model="form.patient_familiar_phone" :disabled="isReadOnly">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <RouterLink to="/hospitalizations" class="btn btn-light me-2">Cancelar</RouterLink>
                <button v-if="!isReadOnly" class="btn btn-primary" type="submit">Guardar hospitalización</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { apiDetails } from "@/constants/api";

export default {
    props: {
        hospitalizationId: {
            type: Number,
            required: false
        }
    },
    data() {
        return {
            form: {
                room_id: '',
                date_in: '',
                date_out: '',
                patient_id: '',
                patient_familiar_name: '',
                patient_familiar_phone: ''
            },
            rooms: [
                { id: 1, name: "Habitación 101" },
                { id: 2, name: "Habitación 102" }
            ],
            patients: [],
            isReadOnly: false,
            accessToken: 'Bearer ' + localStorage.getItem('token')
        };
    },
    methods: {
        fetchData() {
            if (this.hospitalizationId) {
                axios.get(`${apiDetails.url}api/hospitalizations/${this.hospitalizationId}`, {
                    headers: {
                        'Authorization': this.accessToken
                    }
                })
                .then(response => {
                    this.form = response.data;
                    this.isReadOnly = this.form.date_out !== null;
                })
                .catch(error => {
                    console.error('Error al obtener los datos de la API:', error);
                });
            }
        },
        getPatients() {
            axios.get(`${apiDetails.url}api/patients`, {
                headers: {
                    'Authorization': this.accessToken
                }
            })
            .then(response => {
                this.patients = response.data;
            })
            .catch(error => {
                console.error('Error al obtener los datos de la API:', error);
            });
        },
        saveHospitalization() {
            const method = this.hospitalizationId ? 'put' : 'post';
            const url = this.hospitalizationId 
                ? `${apiDetails.url}api/hospitalizations/${this.hospitalizationId}`
                : `${apiDetails.url}api/hospitalizations`;

            axios[method](url, this.form, {
                headers: {
                    'Authorization': this.accessToken
                }
            })
            .then(response => {
                this.$swal({
                    title: 'Hospitalización guardada',
                    text: 'Los datos de la hospitalización se han guardado correctamente',
                    icon: 'success'
                }).then(() => {
                    if(this.hospitalizationId) {
                        this.fetchData();
                    }
                    else{
                        this.$router.push('/hospitalizations');
                    }
                });
            })
            .catch(error => {
                const errorMessage = this.getErrorMessages(error.response.data.errors) ?? 'Error al guardar la hospitalización.';
                this.$swal.fire({
                title: 'Error',
                html: errorMessage,
                icon: 'error',
                confirmButtonText: 'Aceptar',
                });
            });
        },
        getErrorMessages(errors) {
            const errorArray = Object.values(errors).flat();
            return errorArray.join('<br>');
        },
    },
    created() {
        this.getPatients();
        this.fetchData();
    }
}
</script>
