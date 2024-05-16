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
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio Unitario</th>
                                <th scope="col">Fecha de Entrada</th>
                                <th scope="col">Proveedor</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr :class="data.borderColor" v-for="data in bootstraplist" :key="data">
                                <td scope="row">{{data.idProducto}}</td>
                                <td>{{data.nombreProducto}}</td>
                                <td>{{data.cantidadDisponible}}</td>
                                <td>${{data.precioUnitario}}</td>
                                <td>{{data.fechaEntrada}}</td>
                                <td>{{data.proveedor}}</td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-info me-2">
                                        <i class="bi bi-eye"></i> Ver
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
        idProducto: 1,
        nombreProducto: 'Termómetro digital',
        cantidadDisponible: 50,
        precioUnitario: 25,
        fechaEntrada: '2024-05-01',
        proveedor: 'MedicalSuppliesCo'
    },
    { 
        idProducto: 2,
        nombreProducto: 'Estetoscopio',
        cantidadDisponible: 30,
        precioUnitario: 50,
        fechaEntrada: '2024-04-20',
        proveedor: 'HealthTech'
    },
    { 
        idProducto: 3,
        nombreProducto: 'Esfigmomanómetro',
        cantidadDisponible: 40,
        precioUnitario: 35,
        fechaEntrada: '2024-05-05',
        proveedor: 'MedicalSuppliesCo'
    },
    { 
        idProducto: 4,
        nombreProducto: 'Oxímetro de pulso',
        cantidadDisponible: 25,
        precioUnitario: 75,
        fechaEntrada: '2024-04-25',
        proveedor: 'HealthTech'
    },
    { 
        idProducto: 5,
        nombreProducto: 'Desfibrilador externo automático (DEA)',
        cantidadDisponible: 10,
        precioUnitario: 1500,
        fechaEntrada: '2024-05-10',
        proveedor: 'MedicalSuppliesCo'
    },
    { 
        idProducto: 6,
        nombreProducto: 'Kit de primeros auxilios',
        cantidadDisponible: 20,
        precioUnitario: 100,
        fechaEntrada: '2024-05-03',
        proveedor: 'EmergencySupplyCo'
    },
    { 
        idProducto: 7,
        nombreProducto: 'Férula para fracturas',
        cantidadDisponible: 15,
        precioUnitario: 30,
        fechaEntrada: '2024-04-28',
        proveedor: 'OrthoTech'
    },
    { 
        idProducto: 8,
        nombreProducto: 'Lámpara de examen médico',
        cantidadDisponible: 35,
        precioUnitario: 80,
        fechaEntrada: '2024-05-08',
        proveedor: 'MedicalSuppliesCo'
    },
    { 
        idProducto: 9,
        nombreProducto: 'Mascarilla quirúrgica',
        cantidadDisponible: 100,
        precioUnitario: 1,
        fechaEntrada: '2024-04-30',
        proveedor: 'HealthTech'
    },
    { 
        idProducto: 10,
        nombreProducto: 'Guantes de látex',
        cantidadDisponible: 200,
        precioUnitario: 0.5,
        fechaEntrada: '2024-05-02',
        proveedor: 'MedicalSuppliesCo'
    }
      ]
    };
  },
}
</script>