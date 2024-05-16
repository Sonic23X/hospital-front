<template>
    <Breadcrumbs title="Usuarios"/>
    <div class="container-fluid">
        <div class="row pb-2">
            <div class="col-12 text-end">
                <button type="button" class="btn btn-primary">Agregar Usuario</button>
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
                                <th scope="col">Usuario</th>
                                <th scope="col">Rol</th>
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
                                <td>{{data.userName}}</td>
                                <td><div class="badge " :class="data.badgeClass">
                                {{data.role}}
                                </div></td>
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
          userName: 'johndoe',
          role: 'Developer',
          created: '02-01-2024 08:00',
          updated: '02-03-2024 09:10',
          badgeClass: 'badge-primary', 
          borderColor: 'border-success'
        },
        { 
          id: 2,
          firstName: 'Juan',
          lastName: 'Smith',
          userName: 'juansmith',
          role: 'Admin',
          created: '02-02-2024 11:00',
          updated: '02-05-2024 12:15',
          badgeClass: 'badge-success', 
          borderColor: 'border-success'
        },
      ]
    };
  },
}
</script>