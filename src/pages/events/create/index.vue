<template>
    <Breadcrumbs title="Registrar cita" main="Citas" />
    <div class="container-fluid list-products">
        <div class="container">
            <form @submit.prevent="registerAppointment">
                <div class="mb-3">
                    <label for="appointment_date" class="form-label">Asignar fecha</label>
                    <input type="date" class="form-control" id="appointment_date"
                        v-model="form.appointment_date" required @change="filterDoctors">
                </div>
                <div class="mb-3">
                    <label for="appointment_time" class="form-label">Asignar hora</label>
                    <input type="time" class="form-control" id="appointment_time"
                        v-model="form.appointment_time" @change="filterDoctors" required>
                </div>
                <div class="mb-3">
                    <label for="consultation_type" class="form-label">Tipo de consulta</label>
                    <select class="form-control" id="consultation_type" v-model="form.consultation_type"
                        @change="handleConsultationTypeChange" required>
                        <option>Público en general</option>
                        <option>Seguro</option>
                        <option>Empresa</option>
                        <option>Municipio</option>
                    </select>
                </div>
                <div class="mb-3" v-if="showAdditionalSelect">
                    <label for="additionalInfo" class="form-label">{{ additionalSelectLabel }}</label>
                    <select class="form-control" id="additionalInfo" v-model="form.additionalInfo" required>
                        <option v-for="option in additionalOptionsList" :key="option" :value="option">{{ option }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="patient_name" class="form-label">Nombre paciente</label>
                    <input type="text" class="form-control" id="patient_name" v-model="form.patient_name"
                        required>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="doctor_id">Médico</label>
                    <select class="form-select digits" id="doctor_id" required v-model="form.doctor_id"
                        @change="fillSpecialties">
                        <option v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">{{ doctor.name }}
                        </option>
                    </select>
                </div>
                <div class="mb-3" v-if="availableSpecialties.length > 0">
                    <label for="specialty" class="form-label">Especialidad</label>
                    <select class="form-control" id="specialty" v-model="form.specialty_id" required>
                        <option v-for="specialty in availableSpecialties" :key="specialty.id" :value="specialty.id">{{ specialty.name }}</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="patient_phone" class="form-label">Teléfono</label>
                    <input type="text" class="form-control" id="patient_phone" v-model="form.patient_phone" required>
                </div>
                <div class="mb-3">
                    <label for="patient_address" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="patient_address" v-model="form.patient_address" required>
                </div>
                <div class="mb-3">
                    <label for="patient_birthdate" class="form-label">Fecha de nacimiento</label>
                    <input type="date" class="form-control" id="patient_birthdate" v-model="form.patient_birthdate" required>
                </div>
                <div class="mb-3">
                    <label for="gender" class="form-label">Género</label>
                    <select class="form-control" id="gender" v-model="form.patient_gender" required>
                        <option v-for="option in genders" :key="option" :value="option">{{ option }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="reason" class="form-label">Motivo de consulta</label>
                    <textarea class="form-control" id="reason" v-model="form.reason"
                        required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Registrar Cita</button>
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
                appointment_date: '',
                appointment_time: '',
                consultation_type: '',
                patient_name: '',
                doctor_id: '',
                specialty_id: '',
                patient_phone: '',
                patient_address: '',
                patient_birthdate: '',
                usedSupplies: [],
                performedStudies: [],
                totalCost: 0,
                reason: '',
                patient_gender: '',
            },
            doctors: [],
            genders: ["Masculino", "Femenino", "Otro"],
            availableSpecialties: [],
            showAdditionalSelect: false,
            additionalSelectLabel: '',
            additionalOptions: {
                Seguro: ['Seguro A', 'Seguro B', 'Seguro C'],
                Empresa: ['Empresa X', 'Empresa Y', 'Empresa Z'],
                Municipio: ['Municipio 1', 'Municipio 2', 'Municipio 3']
            },
            accessToken: 'Bearer ' + localStorage.getItem('token')
        };
    },
    methods: {
        async registerAppointment() {
            axios.post(`${apiDetails.url}api/appointments`, this.form, {
                headers: {
                    'Authorization': this.accessToken
                }
            })
            .then(response => {
                this.$swal({
                    title: 'Cita guardada',
                    text: 'Los datos de la cita se han guardado correctamente',
                    icon: 'success'
                }).then(() => {
                    // this.ensurePatientRecordExists();

                    this.$router.push('/events');
                });
            })
            .catch(error => {
                const errorMessage = this.getErrorMessages(error.response.data.errors) ?? 'Error al guardar la cita.';
                this.$swal.fire({
                    title: 'Error',
                    html: errorMessage,
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
                console.error('Error al guardar la cita:', error);
            });
        },
        getErrorMessages(errors) {
            const errorArray = Object.values(errors).flat();
            return errorArray.join('<br>');
        },
        timeToMinutes(time) {
            const [hours, minutes] = time.split(':').map(Number);
            return hours * 60 + minutes;
        },
        ensurePatientRecordExists() {
            const patientId = Math.floor(Math.random() * 1000000);
            const patient = {
                id: patientId,
                name: this.form.patient_name,
                age: this.form.patientAge,
                gender: this.form.patientGender,
                patient_address: this.form.patient_address,
                patient_phone: this.form.patient_phone,
                patient_birthdate: this.form.patient_birthdate,
                medicalHistory: [],
                pastAppointments: []
            };

            let patients = JSON.parse(localStorage.getItem('patients')) || [];
            const existingPatient = patients.find(p => p.name === this.form.patient_name && p.patient_birthdate === this.form.patient_birthdate);

            if (!existingPatient) {
                patients.push(patient);
                localStorage.setItem('patients', JSON.stringify(patients));
            }
        },
        filterDoctors() {
            if (!this.form.appointment_time || !this.form.appointment_date) {
                return;
            }
            const params = {
                time: this.form.appointment_time,
                date: this.form.appointment_date
            }
            axios.get(`${apiDetails.url}api/doctors`, {
                params: params,
                headers: {
                    'Authorization': this.accessToken
                }
            })
            .then(response => {
                this.doctors = response.data;
            })
            .catch(error => {
                console.error('Error al obtener los datos de la API:', error);
            });
        },
        fillSpecialties() {
            const selectedDoctor = this.doctors.find(doctor => doctor.id === this.form.doctor_id);
            if (selectedDoctor) {
                this.availableSpecialties = selectedDoctor.specialties;
                if (this.availableSpecialties.length === 1) {
                    this.form.specialty_id = this.availableSpecialties[0].id;
                } else {
                    this.form.specialty_id = null;
                }
            } else {
                this.availableSpecialties = [];
                this.form.specialty_id = null;
            }
        },
        handleConsultationTypeChange() {
            // const consultation_type = this.form.consultation_type;
            // if (consultation_type === 'Público en general') {
            //     this.showAdditionalSelect = false;
            //     this.form.additionalInfo = '';
            // } else {
            //     this.showAdditionalSelect = true;
            //     this.additionalSelectLabel = consultation_type;
            //     this.form.additionalInfo = '';
            // }
        }
    },
    computed: {
        additionalOptionsList() {
            return this.additionalOptions[this.form.consultation_type] || [];
        }
    },
};
</script>