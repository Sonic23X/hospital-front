<template>
  <div class="card">
    <div class="row product-page-main" v-if="!loading">
      <div class="col-sm-12">
        <ul class="nav nav-tabs border-tab mb-0" id="top-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="top-home-tab" 
              data-bs-toggle="tab" href="#top-home" role="tab" aria-controls="top-home" aria-selected="false">
              Stock
            </a>
            <div class="material-border"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-top-tab" data-bs-toggle="tab" 
              href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="false">
              Información
            </a>
            <div class="material-border"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contact-top-tab" data-bs-toggle="tab" 
              href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="true">
              QR
            </a>
            <div class="material-border"></div>
          </li>
        </ul>
        <div class="tab-content" id="top-tabContent">
          <div class="tab-pane fade active show" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
            <p class="mb-0 m-t-10">
              <form class="form theme-form" @submit.prevent="submitFormStock">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <div class="mb-3">
                        <label class="form-label" for="newStock">Actualizar Stock</label>
                        <input class="form-control" id="newStock" type="number" v-model="this.stock">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-end">
                  <button class="btn btn-primary me-2" type="submit">Actualizar</button>
                </div>
              </form>
            </p>
          </div>
          <div class="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
            <p class="mb-0 m-t-10">
              <form class="form theme-form" @submit.prevent="submitData">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <div class="mb-3">
                        <label class="form-label" for="productName">Nombre</label>
                        <input class="form-control" id="productName" type="text" v-model="name">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="mb-3">
                        <label class="form-label" for="productDesc">Descripción</label>
                        <textarea class="form-control" id="productDesc" rows="3" v-model="description"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="mb-3">
                        <label class="form-label" for="productPrice">Precio</label>
                        <input class="form-control" id="productPrice" type="number" v-model="price">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="mb-3">
                        <label class="form-label" for="productType">Tipo</label>
                        <select class="form-select digits" id="productType" v-model="type">
                          <option value="general">Venta general</option>
                          <option value="farm">Farmacia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="mb-3">
                        <label class="form-label" for="productPrice">Fecha de caducidad</label>
                        <input class="form-control" id="productPrice" type="date" v-model="expiration_date">
                      </div>
                    </div>
                  </div>
                    
                </div>
                <div class="card-footer text-end">
                  <button class="btn btn-primary me-2" type="submit">Actualizar</button>
                </div>
              </form>
            </p>
          </div>
          <div class="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
            <p class="mb-0 m-t-20" id="print">
              <qrcode-vue :value="textToEncode" :size="200" id="qrcode" :render-as="'canvas'"></qrcode-vue>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import QrcodeVue from 'qrcode.vue';
import axios from 'axios';
import { apiDetails } from "@/constants/api";

export default {
  data() {
    return {
      value: 'https://example.com',
      size: 200,
      stock: this.product.stock,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      type: this.product.category,
      expiration_date: this.product.expiry_date,
    }
  },
  components: {
    QrcodeVue,
  },
  methods: {
    submitFormStock() {
      axios.post(apiDetails.url + 'api/products/stock/' + this.product.id, {
        stock: this.product.stock
      },
      {
        headers: {
          'Authorization': `${this.accessToken}` // Incluir el token de acceso en las cabeceras
        }
      })
      .then(response => {
        if (response.status === 200) {
          this.$swal({
            icon: 'success',
            title: 'Stock actualizado',
            text: 'El stock del producto ha sido actualizado correctamente',
            type: 'success',
            confirmButtonColor: 'var(--theme-deafult)',
          });
          this.product.stock = this.stock;
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
    },
    submitData() {
      axios.put(apiDetails.url + 'api/products/' + this.product.id, {
        name: this.name,
        description: this.description,
        price: this.price,
        category: this.type,
        expiry_date: this.expiration_date,
      },
      {
        headers: {
          'Authorization': `${this.accessToken}` // Incluir el token de acceso en las cabeceras
        }
      })
      .then(response => {
        if (response.status === 200) {
          this.$swal({
            icon: 'success',
            title: 'Producto actualizado',
            text: 'El stock del producto ha sido actualizado correctamente',
            type: 'success',
            confirmButtonColor: 'var(--theme-deafult)',
          });
          this.product.name = this.name;
          this.product.description = this.description;
          this.product.price = this.price;
          this.product.category = this.type;
          this.product.expiry_date = this.expiration_date;
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
    }
  },
  props: {
    product: {
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

