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
                                <th scope="col">Fecha de Nacimiento</th>
                                <th scope="col">Genero</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Email</th>
                                <th scope="col">Historial</th>
                                <th scope="col">Alergias</th>
                                <th scope="col">Tipo de Sangre</th>
                                <th scope="col">Seguro Médico</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr :class="data.borderColor" v-for="data in bootstraplist" :key="data">
                                <td scope="row">{{data.idPaciente}}</td>
                                <td>{{data.nombre}}</td>
                                <td>{{data.apellido}}</td>
                                <td>{{data.fechaNacimiento}}</td>
                                <td>{{data.genero}}</td>
                                <td>{{data.direccion}}</td>
                                <td>{{data.telefono}}</td>
                                <td>{{data.correoElectronico}}</td>
                                <td>{{data.historialMedico}}</td>
                                <td>{{data.alergias}}</td>
                                <td>{{data.grupoSanguineo}}</td>
                                <td>{{data.seguroMedico}}</td>
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
        idPaciente: 1,
        nombre: 'María',
        apellido: 'González',
        fechaNacimiento: '1990-03-15',
        genero: 'Femenino',
        direccion: 'Calle 123, Ciudad',
        telefono: '123-456-7890',
        correoElectronico: 'maria@example.com',
        historialMedico: 'Hipertensión arterial',
        alergias: 'Polen',
        grupoSanguineo: 'O+',
        seguroMedico: 'Seguro A'
    },
    { 
        idPaciente: 2,
        nombre: 'Juan',
        apellido: 'Martínez',
        fechaNacimiento: '1985-07-20',
        genero: 'Masculino',
        direccion: 'Avenida 456, Ciudad',
        telefono: '987-654-3210',
        correoElectronico: 'juan@example.com',
        historialMedico: 'Diabetes tipo 2',
        alergias: 'Ninguna',
        grupoSanguineo: 'A-',
        seguroMedico: 'Seguro B'
    },
    { 
        idPaciente: 3,
        nombre: 'Ana',
        apellido: 'López',
        fechaNacimiento: '1978-11-10',
        genero: 'Femenino',
        direccion: 'Paseo 789, Ciudad',
        telefono: '456-789-0123',
        correoElectronico: 'ana@example.com',
        historialMedico: 'Asma',
        alergias: 'Penicilina',
        grupoSanguineo: 'AB+',
        seguroMedico: 'Seguro C'
    },
    { 
        idPaciente: 4,
        nombre: 'Pedro',
        apellido: 'Sánchez',
        fechaNacimiento: '1982-05-25',
        genero: 'Masculino',
        direccion: 'Plaza 567, Ciudad',
        telefono: '789-012-3456',
        correoElectronico: 'pedro@example.com',
        historialMedico: 'Artritis',
        alergias: 'Frutas cítricas',
        grupoSanguineo: 'B+',
        seguroMedico: 'Seguro D'
    },
    { 
        idPaciente: 5,
        nombre: 'Laura',
        apellido: 'Rodríguez',
        fechaNacimiento: '1995-09-03',
        genero: 'Femenino',
        direccion: 'Avenida 890, Ciudad',
        telefono: '012-345-6789',
        correoElectronico: 'laura@example.com',
        historialMedico: 'Depresión',
        alergias: 'Ácaros',
        grupoSanguineo: 'O-',
        seguroMedico: 'Seguro E'
    },
    { 
        idPaciente: 6,
        nombre: 'Carlos',
        apellido: 'Hernández',
        fechaNacimiento: '1970-02-18',
        genero: 'Masculino',
        direccion: 'Calle 234, Ciudad',
        telefono: '234-567-8901',
        correoElectronico: 'carlos@example.com',
        historialMedico: 'Hipotiroidismo',
        alergias: 'Mariscos',
        grupoSanguineo: 'A+',
        seguroMedico: 'Seguro F'
    },
    { 
        idPaciente: 7,
        nombre: 'Elena',
        apellido: 'Gómez',
        fechaNacimiento: '1988-08-08',
        genero: 'Femenino',
        direccion: 'Paseo 678, Ciudad',
        telefono: '567-890-1234',
        correoElectronico: 'elena@example.com',
        historialMedico: 'Anemia',
        alergias: 'Polvo',
        grupoSanguineo: 'B-',
        seguroMedico: 'Seguro G'
    },
    { 
        idPaciente: 8,
        nombre: 'José',
        apellido: 'Fernández',
        fechaNacimiento: '1980-04-30',
        genero: 'Masculino',
        direccion: 'Plaza 123, Ciudad',
        telefono: '890-123-4567',
        correoElectronico: 'jose@example.com',
        historialMedico: 'Epilepsia',
        alergias: 'Lácteos',
        grupoSanguineo: 'AB-',
        seguroMedico: 'Seguro H'
    },
    { 
        idPaciente: 9,
        nombre: 'Sofía',
        apellido: 'Pérez',
        fechaNacimiento: '1992-01-12',
        genero: 'Femenino',
        direccion: 'Avenida 345, Ciudad',
        telefono: '678-901-2345',
        correoElectronico: 'sofia@example.com',
        historialMedico: 'Obesidad',
        alergias: 'Polen',
        grupoSanguineo: 'A-',
        seguroMedico: 'Seguro I'
    },
    { 
        idPaciente: 10,
        nombre: 'Miguel',
        apellido: 'López',
        fechaNacimiento: '1975-06-22',
        genero: 'Masculino',
        direccion: 'Calle 567, Ciudad',
        telefono: '901-234-5678',
        correoElectronico: 'miguel@example.com',
        historialMedico: 'Hipertensión arterial',
        alergias: 'Nueces',
        grupoSanguineo: 'O+',
        seguroMedico: 'Seguro J'
    }
      ]
    };
  },
}
</script>