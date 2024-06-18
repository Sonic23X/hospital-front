<template>
    <Breadcrumbs title="Reporte de Pagos"/>
    <div class="container-fluid">
        <div class="row pb-2">
            <div class="col-12 text-end">
                <button type="button" class="btn btn-primary m-1">Registrar Venta</button>
                <button type="button" class="btn btn-danger m-1">Exportar</button>
            </div>
        </div>
        <div class="row pb-2">
            <div class="col-12">
                <div class="table-responsive m-2">
                    <table class="table">
                        <thead>
                            <tr class="border-bottom-primary">
                                <th scope="col">Id</th>
                                <th scope="col">Id de Usuario</th>
                                <th scope="col">Fecha de Pago</th>
                                <th scope="col">Monto</th>
                                <th scope="col">Método</th>
                                <th scope="col">Estatus</th>
                                <th scope="col">Factura</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Transacción</th>
                                <th scope="col">Método de Confirmación</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr :class="data.borderColor" v-for="data in bootstraplist" :key="data">
                                <th scope="row">{{data.idPago}}</th>
                                <td>{{data.idUsuario}}</td>
                                <td>{{data.fechaPago}}</td>
                                <td>${{data.monto}}</td>
                                <td>{{data.metodoPago}}</td>
                                <td>{{data.estadoPago}}</td>
                                <td>nom-2024-{{data.idFactura}}</td>
                                <td>{{data.descripcion}}</td>
                                <td>{{data.idTransaccion}}</td>
                                <td>{{data.metodoConfirmacion}}</td>
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
        idPago: 1,
        idUsuario: 101,
        fechaPago: '2024-05-01 10:30:00',
        monto: 50.00,
        metodoPago: 'Tarjeta de crédito',
        estadoPago: 'Completado',
        idFactura: 123,
        descripcion: 'Pago por membresía',
        idTransaccion: 'ABC123XYZ',
        metodoConfirmacion: 'Automático'
    },
    { 
        idPago: 2,
        idUsuario: 102,
        fechaPago: '2024-05-02 11:45:00',
        monto: 75.00,
        metodoPago: 'PayPal',
        estadoPago: 'Completado',
        idFactura: 124,
        descripcion: 'Pago por servicios',
        idTransaccion: 'DEF456UVW',
        metodoConfirmacion: 'Automático'
    },
    { 
        idPago: 3,
        idUsuario: 103,
        fechaPago: '2024-05-03 09:15:00',
        monto: 100.00,
        metodoPago: 'Transferencia bancaria',
        estadoPago: 'Completado',
        idFactura: 125,
        descripcion: 'Pago por productos',
        idTransaccion: 'GHI789LMN',
        metodoConfirmacion: 'Automático'
    },
    { 
        idPago: 4,
        idUsuario: 104,
        fechaPago: '2024-05-04 14:20:00',
        monto: 120.00,
        metodoPago: 'Tarjeta de débito',
        estadoPago: 'Completado',
        idFactura: 126,
        descripcion: 'Pago por suscripción',
        idTransaccion: 'JKL012OPQ',
        metodoConfirmacion: 'Automático'
    },
    { 
        idPago: 5,
        idUsuario: 105,
        fechaPago: '2024-05-05 16:50:00',
        monto: 90.00,
        metodoPago: 'Efectivo',
        estadoPago: 'Completado',
        idFactura: 127,
        descripcion: 'Pago por servicios adicionales',
        idTransaccion: 'RST345XYZ',
        metodoConfirmacion: 'Automático'
    },
    { 
        idPago: 6,
        idUsuario: 106,
        fechaPago: '2024-05-06 12:40:00',
        monto: 60.00,
        metodoPago: 'Tarjeta de crédito',
        estadoPago: 'Completado',
        idFactura: 128,
        descripcion: 'Pago por consultas médicas',
        idTransaccion: 'UVW678ABC',
        metodoConfirmacion: 'Automático'
    },
    { 
        idPago: 7,
        idUsuario: 107,
        fechaPago: '2024-05-07 08:55:00',
        monto: 80.00,
        metodoPago: 'PayPal',
        estadoPago: 'Completado',
        idFactura: 129,
        descripcion: 'Pago por servicios de emergencia',
        idTransaccion: 'XYZ901DEF',
        metodoConfirmacion: 'Automático'
    },
    { 
        idPago: 8,
        idUsuario: 108,
        fechaPago: '2024-05-08 13:10:00',
        monto: 110.00,
        metodoPago: 'Transferencia bancaria',
        estadoPago: 'Completado',
        idFactura: 130,
        descripcion: 'Pago por medicamentos',
        idTransaccion: 'LMN234GHI',
        metodoConfirmacion: 'Automático'
    },
    { 
        idPago: 9,
        idUsuario: 109,
        fechaPago: '2024-05-09 10:00:00',
        monto: 70.00,
        metodoPago: 'Tarjeta de débito',
        estadoPago: 'Completado',
        idFactura: 131,
        descripcion: 'Pago por análisis clínicos',
        idTransaccion: 'OPQ567JKL',
        metodoConfirmacion: 'Automático'
    },
    { 
        idPago: 10,
        idUsuario: 110,
        fechaPago: '2024-05-10 15:30:00',
        monto: 95.00,
        metodoPago: 'Efectivo',
        estadoPago: 'Completado',
        idFactura: 132,
        descripcion: 'Pago por consulta dental',
        idTransaccion: 'XYZ890RST',
        metodoConfirmacion: 'Automático'
    }
      ]
    };
  },
}
</script>