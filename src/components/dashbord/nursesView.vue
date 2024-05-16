<template>
    <Breadcrumbs title="Enfermería"/>
    <div class="container-fluid">
        <div class="row pb-2">
            <div class="col-12 text-end">
                <button type="button" class="btn btn-primary">Agregar Efermera</button>
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
                                <th scope="col">Departamento</th>
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
                                <td>{{data.department}}</td>
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
        firstName: 'John',
        lastName: 'Doe',
        department: 'Pediatría',
        created: '02-01-2024 08:00',
        updated: '02-03-2024 09:10',
        badgeClass: 'badge-primary', 
        borderColor: 'border-success'
    },
    { 
        id: 2,
        firstName: 'Juan',
        lastName: 'Smith',
        department: 'Urgencias',
        created: '02-02-2024 11:00',
        updated: '02-05-2024 12:15',
        badgeClass: 'badge-success', 
        borderColor: 'border-success'
    },
    { 
        id: 3,
        firstName: 'Laura',
        lastName: 'Johnson',
        department: 'Traumatología',
        created: '02-03-2024 10:30',
        updated: '02-06-2024 13:20',
        badgeClass: 'badge-primary', 
        borderColor: 'border-success'
    },
    { 
        id: 4,
        firstName: 'Maria',
        lastName: 'García',
        department: 'Cardiología',
        created: '02-04-2024 09:45',
        updated: '02-07-2024 14:25',
        badgeClass: 'badge-warning', 
        borderColor: 'border-warning'
    },
    { 
        id: 5,
        firstName: 'Carlos',
        lastName: 'Martínez',
        department: 'Ginecología',
        created: '02-05-2024 08:20',
        updated: '02-08-2024 15:30',
        badgeClass: 'badge-success', 
        borderColor: 'border-success'
    },
    { 
        id: 6,
        firstName: 'Sofía',
        lastName: 'López',
        department: 'Oftalmología',
        created: '02-06-2024 07:15',
        updated: '02-09-2024 16:40',
        badgeClass: 'badge-primary', 
        borderColor: 'border-success'
    },
    { 
        id: 7,
        firstName: 'Roberto',
        lastName: 'Pérez',
        department: 'Endocrinología',
        created: '02-07-2024 06:30',
        updated: '02-10-2024 17:50',
        badgeClass: 'badge-primary', 
        borderColor: 'border-success'
    },
    { 
        id: 8,
        firstName: 'Elena',
        lastName: 'Gómez',
        department: 'Neurología',
        created: '02-08-2024 05:55',
        updated: '02-11-2024 18:10',
        badgeClass: 'badge-success', 
        borderColor: 'border-success'
    },
    { 
        id: 9,
        firstName: 'Jorge',
        lastName: 'Hernández',
        department: 'Oncología',
        created: '02-09-2024 04:40',
        updated: '02-12-2024 19:20',
        badgeClass: 'badge-primary', 
        borderColor: 'border-success'
    },
    { 
        id: 10,
        firstName: 'Ana',
        lastName: 'Álvarez',
        department: 'Cirugía General',
        created: '02-10-2024 03:25',
        updated: '02-13-2024 20:30',
        badgeClass: 'badge-warning', 
        borderColor: 'border-warning'
    }
      ]
    };
  },
}
</script>