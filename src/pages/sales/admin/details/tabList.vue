<template>
  <div class="card" v-if="!loading">
    <div class="row product-page-main" >
      <div class="col-sm-12">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="mb-3 row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <h4>No. de folio</h4>
                  <span>#{{sale.id}}</span>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <h4>Fecha de la venta</h4>
                  <span>{{new Date(sale.created_at).toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}}</span>
                </div>
              </div>
              <div class="mb-3 row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <h4>Método de pago</h4>
                  <span>{{sale.payment_method}}</span>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <h4>Subtotal</h4>
                  <span>${{sale.subtotal}}</span>
                </div>
              </div>
              <div class="mb-3 row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <h4>IVA</h4>
                  <span>${{sale.iva}}</span>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <h4>Monto final</h4>
                  <span>${{sale.total_amount}}</span>
                </div>
              </div>
              <div class="mb-3 row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <h4>Estatus</h4>
                  <span>{{sale.status == 1 ? 'Realizada' : 'No valida'}}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="mb-3 row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <h4>Productos vendidos</h4>
                </div>
              </div>
              <div class="mb-3 row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <table class="display table-striped table-hover table-bordered table text-center" id="basic-1">
                    <thead>
                      <tr>
                        <th class="sorting_asc" scope="col" >Nombre</th>
                        <th class="sorting_asc" scope="col" >Precio</th>
                        <th class="sorting_asc" scope="col" >Cantidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd" v-for="row in sale.items" :key="row">
                        <td class="sorting_1">
                          <span>{{row.product.name}}</span>
                        </td>
                        <td class="sorting_1">${{row.product.price}}</td>
                        <td class="sorting_1">{{row.quantity}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sale: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
    }
  }
}

</script>

