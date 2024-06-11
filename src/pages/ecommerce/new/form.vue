<template>
    <div class="card">
        <form class="form theme-form" @submit.prevent="saveProduct">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="productName">Nombre</label>
                            <input class="form-control" id="productName" type="text" v-model="name" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="productDesc">Descripción</label>
                            <textarea class="form-control" id="productDesc" rows="3" required v-model="description"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="productPrice">Precio</label>
                            <input class="form-control" id="productPrice" type="number" required v-model="price">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="productStock">Unidades</label>
                            <input class="form-control" id="productStock" type="number" required v-model="stock">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="productType">Tipo</label>
                            <select class="form-select digits" id="productType" required v-model="type">
                                <option value="general">Venta general</option>
                                <option value="farm">Farmacia</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row" v-if="type == 'farm'">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="productSubstance">Sustancia activa</label>
                            <input class="form-control" id="productSubstance" type="text" v-model="active_substance">
                        </div>
                    </div>
                </div>
                <div class="row" v-if="type == 'farm'">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="productSubstance">Lote</label>
                            <input class="form-control" id="productSubstance" type="text" v-model="batch">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="productPrice">Fecha de caducidad</label>
                            <input class="form-control" id="productPrice" type="date" required v-model="expiration_date">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="productSupplier">Proveedor</label>
                            <select class="form-select digits" id="productSupplier" v-model="supplier">
                                <option v-for="supplier in supliers" :value="supplier.id">{{ supplier.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="productImage">Imagenes</label>
                            <DropZone
                                :maxFileSize="Number(7000000)"
                                :uploadOnDrop="false"
                                :multipleUpload="true"
                                :parallelUpload="2"
                                :maxFiles="5"
                                @addedFile="onFileAdd"
                                @removedFile="onFileRemove"
                            />
                        </div>
                    </div>
                </div>
                      
                <div class="card-footer text-end">
                    <RouterLink to="/inventary" class="btn btn-light me-2">Cancelar</RouterLink>
                    <button class="btn btn-primary" type="submit">Guardar producto</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import axios from 'axios';
import DropZone from "dropzone-vue";
import { apiDetails } from "@/constants/api";

export default {
    data() {
        return {
            name: '',
            description: '',
            price: '',
            stock: '',
            type: 'general',
            expiration_date: '',
            active_substance: '',
            batch: '',
            supplier: '',
            files: [],
            supliers: [],
            accessToken: 'Bearer ' + localStorage.getItem('token')
        }
    },
    components: {
        DropZone
    },
    methods: {
        saveProduct() {
            let is_pharmaceutical = 0;
            if (this.type == 'farm') {
                is_pharmaceutical = 1;
            }

            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('description', this.description);
            formData.append('price', this.price);
            formData.append('type', this.type);
            formData.append('expiration_date', this.expiration_date);
            formData.append('active_substance', this.active_substance);
            formData.append('batch', this.batch);
            formData.append('stock', this.stock);
            formData.append('is_pharmaceutical', is_pharmaceutical);
            formData.append('supplier_id', this.supplier);

            if (this.files.length == 0) {
                this.$swal({
                    title: 'Error',
                    text: 'Debe subir al menos una imagen',
                    icon: 'error'
                });
                return;
            }

            this.files.forEach(file => {
                formData.append('images[]', file.file);
            });

            axios.post(apiDetails.url + "api/products", formData, {
                headers: {
                    'Authorization': this.accessToken
                }
            }).then(response => {
                if (response.status == 201) {
                    this.$swal({
                        title: 'Producto guardado',
                        text: 'El producto ha sido guardado correctamente',
                        icon: 'success'
                    }).then(() => {
                        this.$router.push('/inventary');
                    });
                } else {
                    this.$swal({
                        title: 'Error',
                        text: 'Ha ocurrido un error al guardar el producto, por favor intente de nuevo',
                        icon: 'error'
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        },
        onFileAdd(file) {
            this.files.push(file);
        },
        onFileRemove(file) {
            this.files = this.files.filter(f => f.id !== file.id);
        },
        getSuppliers() {
            axios.get(apiDetails.url + "api/suppliers", {
                headers: {
                    'Authorization': this.accessToken
                }
            }).then(response => {
                this.supliers = response.data;
            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.getSuppliers();
    }
}

</script>
<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>