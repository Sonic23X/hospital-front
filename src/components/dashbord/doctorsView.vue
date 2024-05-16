<template>
    <Breadcrumbs title="Médicos"/>
    <div class="container-fluid">
        <div class="row pb-2">
            <div class="col-12 text-end">
                <button type="button" class="btn btn-primary">Agregar Médico</button>
            </div>
        </div>
        <div class="row pb-2">
            <div class="col-12">
                <div class="table-responsive m-2">
                    <table class="table">
                        <thead>
                            <tr class="border-bottom-primary">
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Especialidad</th>
                                <th scope="col">Esquema</th>
                                <th scope="col">Creación</th>
                                <th scope="col">Edición</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr :class="data.borderColor" v-for="data in bootstraplist" :key="data">
                                <th scope="row">{{data.id}}</th>
                                <td>{{data.firstName}}</td>
                                <td>{{data.lastName}}</td>
                                <td>{{data.specialty}}</td>
                                <td>{{data.scheme}}</td>
                                <td>{{data.created}}</td>
                                <td>{{data.updated}}</td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-info me-2">
                                        <i class="bi bi-eye"></i> Ver
                                    </button>
                                    <button type="button" class="btn btn-sm btn-warning me-2">
                                        <i class="bi bi-pencil"></i> Editar
                                    </button>
                                    <button type="button" class="btn btn-sm btn-danger">
                                        <i class="bi bi-trash"></i> Eliminar
                                    </button>
                                </td>
                                <td>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      bootstraplist: [
        { 
          id: 1,
          firstName: 'Maria',
          lastName: 'Pérez',
          specialty: 'Dermatología',
          scheme: 'Honorarios',
          created: '02-01-2024 08:00',
          updated: '02-03-2024 09:10',
          badgeClass: 'badge-primary', 
          borderColor: 'border-success'
        },
        { 
          id: 2,
          firstName: 'Juan',
          lastName: 'Vázquez',
          specialty: 'Cirugía General',
          scheme: 'Mensualidad',
          created: '02-01-2024 08:00',
          updated: '02-03-2024 09:10',
          badgeClass: 'badge-primary', 
          borderColor: 'border-success'
        },
        { 
            id: 3,
            firstName: 'Roberto',
            lastName: 'Pérez',
            specialty: 'Neurología',
            scheme: 'Seguro Médico',
            created: '02-01-2024 08:00',
            updated: '02-03-2024 09:10',
            badgeClass: 'badge-primary', 
            borderColor: 'border-success'
        },
        { 
            id: 4,
            firstName: 'Ana',
            lastName: 'Vázquez',
            specialty: 'Traumatología',
            scheme: 'Particular',
            created: '02-01-2024 08:00',
            updated: '02-03-2024 09:10',
            badgeClass: 'badge-primary', 
            borderColor: 'border-success'
        },
        { 
            id: 5,
            firstName: 'Pedro',
            lastName: 'Pérez',
            specialty: 'Pediatria',
            scheme: 'Honorarios',
            created: '02-01-2024 08:00',
            updated: '02-03-2024 09:10',
            badgeClass: 'badge-primary', 
            borderColor: 'border-success'
        },
        { 
            id: 6,
            firstName: 'Elena',
            lastName: 'Vázquez',
            specialty: 'Oncología',
            scheme: 'Seguro Médico',
            created: '02-01-2024 08:00',
            updated: '02-03-2024 09:10',
            badgeClass: 'badge-primary', 
            borderColor: 'border-success'
        },
        { 
            id: 7,
            firstName: 'Luis',
            lastName: 'Pérez',
            specialty: 'Ginecología',
            scheme: 'Particular',
            created: '02-01-2024 08:00',
            updated: '02-03-2024 09:10',
            badgeClass: 'badge-primary', 
            borderColor: 'border-success'
        },
        { 
            id: 8,
            firstName: 'María',
            lastName: 'Vázquez',
            specialty: 'Cardiología',
            scheme: 'Seguro Médico',
            created: '02-01-2024 08:00',
            updated: '02-03-2024 09:10',
            badgeClass: 'badge-primary', 
            borderColor: 'border-success'
        },
        { 
            id: 9,
            firstName: 'Jorge',
            lastName: 'Pérez',
            specialty: 'Endocrinología',
            scheme: 'Honorarios',
            created: '02-01-2024 08:00',
            updated: '02-03-2024 09:10',
            badgeClass: 'badge-primary', 
            borderColor: 'border-success'
        },
        { 
            id: 10,
            firstName: 'Sofía',
            lastName: 'Vázquez',
            specialty: 'Psiquiatría',
            scheme: 'Particular',
            created: '02-01-2024 08:00',
            updated: '02-03-2024 09:10',
            badgeClass: 'badge-primary', 
            borderColor: 'border-success'
        },
        { 
            id: 11,
            firstName: 'Carlos',
            lastName: 'Pérez',
            specialty: 'Urología',
            scheme: 'Mensualidad',
            created: '02-01-2024 08:00',
            updated: '02-03-2024 09:10',
            badgeClass: 'badge-primary', 
            borderColor: 'border-success'
        },
        { 
            id: 12,
            firstName: 'Laura',
            lastName: 'Vázquez',
            specialty: 'Oftalmología',
            scheme: 'Seguro Médico',
            created: '02-01-2024 08:00',
            updated: '02-03-2024 09:10',
            badgeClass: 'badge-primary', 
            borderColor: 'border-success'
        }
      ]
    };
  },
}
</script>