<template>
    <Breadcrumbs title="Registrar cita" main="Citas" />
    <div class="container-fluid list-products">
        <div class="container">
            <form @submit.prevent="save">

                <div class="mb-3">
                    <label for="name" class="form-label">Nombre paciente</label>
                    <input type="text" class="form-control" id="name" v-model="form.name" required>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Teléfono</label>
                    <input type="text" class="form-control" id="phone" v-model="form.phone" required>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="address" v-model="form.address" required>
                </div>
                <div class="mb-3">
                    <label for="birthdate" class="form-label">Fecha de nacimiento</label>
                    <input type="date" class="form-control" id="birthdate" v-model="form.birthdate" required>
                </div>
                <div class="mb-3">
                    <label for="gender" class="form-label">Género</label>
                    <select class="form-control" id="gender" v-model="form.gender" required>
                        <option v-for="option in genders" :key="option" :value="option">{{ option }}
                        </option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Registrar Paciente</button>
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import { apiDetails } from "@/constants/api";

export default {
    data() {
        return {
            form: {
                name: '',
                phone: '',
                address: '',
                birthdate: '',
                reason: '',
                gender: '',
            },
            genders: ["Masculino", "Femenino", "Otro"],
            accessToken: 'Bearer ' + localStorage.getItem('token')
        };
    },
    methods: {
        async save() {
            axios.post(`${apiDetails.url}api/patients`, this.form, {
                headers: {
                    'Authorization': this.accessToken
                }
            })
                .then(response => {
                    this.$swal({
                        title: 'Paciente guardado',
                        text: 'Los datos del paciente se han guardado correctamente',
                        icon: 'success'
                    }).then(() => {
                        this.$router.push('/patients');
                    });
                })
                .catch(error => {
                    const errorMessage = this.getErrorMessages(error.response.data.errors) ?? 'Error al guardar el paciente.';
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
    }
};
</script>