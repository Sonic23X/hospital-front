<template>
    <Breadcrumbs title="Registrar cita" main="Citas"/>
    <div class="container-fluid list-products">
        <div class="container">
        <form @submit.prevent="registerAppointment">
            <div class="mb-3">
            <label for="appointmentDate" class="form-label">Asignar fecha</label>
            <input type="date" class="form-control" id="appointmentDate" v-model="newAppointment.appointmentDate" required>
            </div>
            <div class="mb-3">
            <label for="appointmentTime" class="form-label">Asignar hora</label>
            <input type="time" class="form-control" id="appointmentTime" v-model="newAppointment.appointmentTime" @change="filterDoctors" required>
            </div>
            <div class="mb-3">
                <label for="consultationType" class="form-label">Tipo de consulta</label>
                <select class="form-control" id="consultationType" v-model="newAppointment.consultationType" @change="handleConsultationTypeChange" required>
                    <option>Público en general</option>
                    <option>Seguro</option>
                    <option>Empresa</option>
                    <option>Municipio</option>
                </select>
            </div>
            <div class="mb-3" v-if="showAdditionalSelect">
                <label for="additionalInfo" class="form-label">{{ additionalSelectLabel }}</label>
                <select class="form-control" id="additionalInfo" v-model="newAppointment.additionalInfo" required>
                    <option v-for="option in additionalOptionsList" :key="option" :value="option">{{ option }}</option>
                </select>
            </div>
            <div class="mb-3">
            <label for="patientName" class="form-label">Nombre paciente</label>
            <input type="text" class="form-control" id="patientName" v-model="newAppointment.patientName" required>
            </div>
            <div class="mb-3">
                <label class="form-label" for="doctorName">Médico</label>
                <select class="form-select digits" id="doctorName" required v-model="newAppointment.doctorName" @change="fillSpecialties">
                    <option v-for="doctor in filteredDoctors" :key="doctor.name" :value="doctor.name">{{ doctor.name }}</option>
                </select>
            </div>
            <div class="mb-3" v-if="availableSpecialties.length > 0">
                <label for="specialty" class="form-label">Especialidad</label>
                <select class="form-control" id="specialty" v-model="newAppointment.specialty" required>
                    <option v-for="specialty in availableSpecialties" :key="specialty" :value="specialty">{{ specialty }}</option>
                </select>
            </div>
            <div class="mb-3">
            <label for="age" class="form-label">Edad</label>
            <input type="number" class="form-control" id="age" v-model="newAppointment.age" required>
            </div>
            <div class="mb-3">
            <label for="phone" class="form-label">Teléfono</label>
            <input type="text" class="form-control" id="phone" v-model="newAppointment.phone" required>
            </div>
            <div class="mb-3">
            <label for="address" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="address" v-model="newAppointment.address" required>
            </div>
            <div class="mb-3">
            <label for="birthDate" class="form-label">Fecha de nacimiento</label>
            <input type="date" class="form-control" id="birthDate" v-model="newAppointment.birthDate" required>
            </div>
            <div class="mb-3">
            <label for="consultationReason" class="form-label">Motivo de consulta</label>
            <textarea class="form-control" id="consultationReason" v-model="newAppointment.consultationReason" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Registrar Cita</button>
        </form>
        </div>
    </div>
</template>
  
<script>
    export default {
        data() {
            return {
                newAppointment: {
                appointmentDate: '',
                appointmentTime: '',
                consultationType: '',
                patientName: '',
                doctorName: '',
                specialty: '',
                age: '',
                phone: '',
                address: '',
                birthDate: '',
                usedSupplies: [],
                performedStudies: [],
                totalCost: 0,
                appointmentStatus: 'pendiente',
                consultationReason: ''
                },
                doctors: [
                    {
                        name: 'Dr. Juan Pérez',
                        specialties: ['Cardiología', 'Medicina Interna'],
                        schedules: ['08:00', '09:00', '10:00']
                    },
                    {
                        name: 'Dra. Ana Gómez',
                        specialties: ['Neurología', 'Psiquiatría'],
                        schedules: ['10:00', '11:00', '12:00']
                    },
                    {
                        name: 'Dr. Carlos Martínez',
                        specialties: ['Dermatología', 'Cirugía'],
                        schedules: ['13:00', '14:00', '15:00']
                    }
                ],
                filteredDoctors: [],
                availableSpecialties: [],
                showAdditionalSelect: false,
                additionalSelectLabel: '',
                additionalOptions: {
                    Seguro: ['Seguro A', 'Seguro B', 'Seguro C'],
                    Empresa: ['Empresa X', 'Empresa Y', 'Empresa Z'],
                    Municipio: ['Municipio 1', 'Municipio 2', 'Municipio 3']
                }
            };
        },
        methods: {
            registerAppointment() {
                const appointment = {
                    id: Math.floor(Math.random() * 1000000),
                    appointmentDate: new Date(this.newAppointment.appointmentDate + 'T' + this.newAppointment.appointmentTime).toISOString(),
                    consultationType: this.newAppointment.consultationType,
                    patientName: this.newAppointment.patientName,
                    doctorName: this.newAppointment.doctorName,
                    specialty: this.newAppointment.specialty,
                    age: this.newAppointment.age,
                    phone: this.newAppointment.phone,
                    address: this.newAppointment.address,
                    birthDate: this.newAppointment.birthDate,
                    usedSupplies: this.newAppointment.usedSupplies,
                    performedStudies: this.newAppointment.performedStudies,
                    totalCost: this.newAppointment.totalCost,
                    appointmentStatus: this.newAppointment.appointmentStatus,
                    consultationReason: this.newAppointment.consultationReason
                };
        
                let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
                appointments.push(appointment);
                localStorage.setItem('appointments', JSON.stringify(appointments));

                this.ensurePatientRecordExists();

                this.$router.push('/events');
            },
            timeToMinutes(time) {
                const [hours, minutes] = time.split(':').map(Number);
                return hours * 60 + minutes;
            },
            ensurePatientRecordExists() {
                const patientId = Math.floor(Math.random() * 1000000);
                const patient = {
                    id: patientId,
                    name: this.newAppointment.patientName,
                    age: this.newAppointment.patientAge,
                    gender: this.newAppointment.patientGender,
                    address: this.newAppointment.address,
                    phone: this.newAppointment.phone,
                    birthDate: this.newAppointment.birthDate,
                    medicalHistory: [],
                    pastAppointments: []
                };

                let patients = JSON.parse(localStorage.getItem('patients')) || [];
                const existingPatient = patients.find(p => p.name === this.newAppointment.patientName && p.birthDate === this.newAppointment.birthDate);

                if (!existingPatient) {
                    patients.push(patient);
                    localStorage.setItem('patients', JSON.stringify(patients));
                }
            },
            filterDoctors() {
                const selectedTime = this.timeToMinutes(this.newAppointment.appointmentTime);
                console.log(selectedTime);
                this.filteredDoctors = this.doctors.filter(doctor => 
                    doctor.schedules.some(schedule => this.timeToMinutes(schedule) === selectedTime)
                );
                this.availableSpecialties = [];
                this.newAppointment.specialty = '';
            },
            fillSpecialties() {
                const selectedDoctor = this.doctors.find(doctor => doctor.name === this.newAppointment.doctorName);
                if (selectedDoctor) {
                    this.availableSpecialties = selectedDoctor.specialties;
                    if (this.availableSpecialties.length === 1) {
                    this.newAppointment.specialty = this.availableSpecialties[0];
                    } else {
                    this.newAppointment.specialty = '';
                    }
                } else {
                    this.availableSpecialties = [];
                    this.newAppointment.specialty = '';
                }
            },
            handleConsultationTypeChange() {
                const consultationType = this.newAppointment.consultationType;
                if (consultationType === 'Público en general') {
                    this.showAdditionalSelect = false;
                    this.newAppointment.additionalInfo = '';
                } else {
                    this.showAdditionalSelect = true;
                    this.additionalSelectLabel = consultationType;
                    this.newAppointment.additionalInfo = '';
                }
            }
        },
        computed: {
            additionalOptionsList() {
                return this.additionalOptions[this.newAppointment.consultationType] || [];
            }
        },
        created() {
            this.filteredDoctors = this.doctors;
        }
    };
</script>
    