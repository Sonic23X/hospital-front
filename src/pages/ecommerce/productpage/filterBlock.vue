<template>
  <div class="box-col-6 xl-50 proorder-lg-1 col-md-6 col-xl-2" v-if="!loading">
    <div class="card">
      <div class="card-body">

        <div class="filter-block">
          <h4>Nombre: {{ product.name }}</h4>
          <h5>Stock: {{ product.stock }}</h5>
          <h5>Precio: ${{ product.price }}</h5>
          <h6 class="mt-5">Descripción:</h6>
          {{ product.description }}
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="collection-filter-block">
          <ul class="pro-services">
            <li>
              <div class="media"><i data-feather="truck"><vue-feather type="truck"></vue-feather></i>
                <div class="media-body">
                  <h5>Proveedor: {{ product.supplier.name }}</h5>
                  <h6>Contacto</h6>
                  <p>{{ product.supplier.contact_info }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default { 
  props: {
    product: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    }
  }
}

</script>
