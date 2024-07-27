<template>
    <Breadcrumbs main="Visitas" title="Registrar visita"/>
    <div class="container-fluid list-products">
        <div class="row">
            <div class="card">
                <form class="form theme-form" @submit.prevent="saveVisit">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label class="form-label" for="person">Nombre de la persona</label>
                                    <input class="form-control" id="person" type="text" v-model="person" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label class="form-label" for="numPersons">No. personas</label>
                                    <input class="form-control" id="numPersons" type="number" required v-model="numPersons">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label class="form-label" for="room">Habitación</label>
                                    <select class="form-select digits" id="room" required v-model="room">
                                        <option value="1">Habitacion 1</option>
                                        <option value="2">Habitacion 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                            
                        <div class="card-footer text-end">
                            <RouterLink to="/visits" class="btn btn-light me-2">Cancelar</RouterLink>
                            <button class="btn btn-primary" type="submit">Registrar visita</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            room: '',
            person: '',
            numPersons: '',
            accessToken: 'Bearer ' + localStorage.getItem('token')
        }
    },
    methods: {
        saveVisit() {
            const visit = {
                id: Math.floor(Math.random() * 1000000),
                roomNumber: this.room,
                personName: this.person,
                numberOfPeople: this.numPersons,
                startDate: new Date(),
                endDate: null
            };

            let visits = JSON.parse(localStorage.getItem('visits')) || [];
            visits.push(visit);
            localStorage.setItem('visits', JSON.stringify(visits));
            this.$router.push('/visits');
        },
    },
}

</script>