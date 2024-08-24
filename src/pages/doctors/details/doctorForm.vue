<template>
    <div class="card">
        <form class="form theme-form" @submit.prevent="save">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <div class="mb-3" v-if="specialties">
                            <label class="form-label" for="specialty_ids">Especialidades</label>
                            <multiselect  
                            v-model="specialty_ids" 
                            tag-placeholder="Especialidades" 
                            placeholder="Especialidades" 
                            label="name" 
                            track-by="id" 
                            :options="specialties" 
                            :multiple="true" 
                            :taggable="true" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="name">Nombre</label>
                            <input class="form-control" id="name" type="text" v-model="form.name">
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <RouterLink to="/doctors" class="btn btn-light me-2">Cancelar</RouterLink>
                    <button class="btn btn-primary" type="submit">Guardar Doctor</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { apiDetails } from "@/constants/api";

export default {
    props: {
        doctorId: {
            type: Number,
            required: false
        }
    },
    data() {
        return {
            form: {
                name: '',
                specialty_ids: []
            },
            specialty_ids: [],
            specialties: [],
            isReadOnly: false,
            accessToken: 'Bearer ' + localStorage.getItem('token')
        };
    },
    methods: {
        fetchData() {
            if (this.doctorId) {
                axios.get(`${apiDetails.url}api/doctors/${this.doctorId}`, {
                    headers: {
                        'Authorization': this.accessToken
                    }
                })
                    .then(response => {
                        this.form = response.data;
                        this.form.specialty_ids = [];
                        this.specialty_ids = response.data.specialties;
                        this.isReadOnly = this.form.date_out !== null;
                    })
                    .catch(error => {
                        console.error('Error al obtener los datos de la API:', error);
                    });
            }
        },
        getSpecialities() {
            axios.get(`${apiDetails.url}api/specialties`, {
                headers: {
                    'Authorization': this.accessToken
                }
            })
                .then(response => {
                    this.specialties = response.data;
                })
                .catch(error => {
                    console.error('Error al obtener los datos de la API:', error);
                });
        },
        save() {
            for (let index = 0; index < this.specialty_ids.length; index++) {
                const element = this.specialty_ids[index];
                this.form.specialty_ids.push(element.id);
            }
            const method = this.doctorId ? 'put' : 'post';
            const url = this.doctorId
                ? `${apiDetails.url}api/doctors/${this.doctorId}`
                : `${apiDetails.url}api/doctors`;

            axios[method](url, this.form, {
                headers: {
                    'Authorization': this.accessToken
                }
            })
                .then(response => {
                    this.$swal({
                        title: 'Doctor guardado',
                        text: 'Los datos del doctor se han guardado correctamente',
                        icon: 'success'
                    }).then(() => {
                        if (this.doctorId) {
                            this.fetchData();
                        }
                        else {
                            this.$router.push('/doctors');
                        }
                    });
                })
                .catch(error => {
                    const errorMessage = this.getErrorMessages(error.response.data.errors) ?? 'Error al guardar el doctor.';
                    this.$swal.fire({
                        title: 'Error',
                        html: errorMessage,
                        icon: 'error',
                        confirmButtonText: 'Aceptar',
                    });
                    console.error('Error al guardar el doctor:', error);
                });
        },
        getErrorMessages(errors) {
            const errorArray = Object.values(errors).flat();
            return errorArray.join('<br>');
        },
    },
    created() {
        this.getSpecialities();
        this.fetchData();
    }
}
</script>
