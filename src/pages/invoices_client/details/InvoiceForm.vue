<template>
    <div class="card">
        <form class="form theme-form" @submit.prevent="save">
            <div class="card-body">
                <!-- RFC Field -->
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="rfc">RFC</label>
                            <input class="form-control" id="rfc" type="text" v-model="form.rfc" :readonly="isReadOnly" required>
                        </div>
                    </div>
                </div>
                <!-- Business Name Field -->
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="business_name">Razón Social</label>
                            <input class="form-control" id="business_name" type="text" v-model="form.business_name" :readonly="isReadOnly" required>
                        </div>
                    </div>
                </div>
                <!-- Fiscal Regime Field -->
                <div class="row">
                    <div class="col">
                        <div class="mb-3" v-if="regimes">
                            <label class="form-label" for="fiscal_regime">Régimen Fiscal</label>
                            <multiselect v-model="form.fiscal_regime" tag-placeholder="Régimen Fiscal"
                                placeholder="Régimen Fiscal" label="concat_description" track-by="code" :options="regimes"
                                :multiple="false" :taggable="true" :disabled="isReadOnly" />
                        </div>
                    </div>
                </div>
                <!-- CFDI Use Field -->
                <div class="row">
                    <div class="col">
                        <div class="mb-3" v-if="cfdiuses">
                            <label class="form-label" for="cfdi_use">Uso del CFDI</label>
                            <multiselect v-model="form.cfdi_use" tag-placeholder="Uso del CFDI"
                                placeholder="Uso del CFDI" label="concat_description" track-by="code" :options="cfdiuses"
                                :multiple="false" :taggable="true" :disabled="isReadOnly" />
                        </div>
                    </div>
                </div>
                <!-- Address Fields Group -->
                <h5>Dirección</h5>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="street">Calle</label>
                            <input class="form-control" id="street" type="text" v-model="form.street" :readonly="isReadOnly" required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="exterior_number">Número Exterior</label>
                            <input class="form-control" id="exterior_number" type="text" v-model="form.exterior_number" :readonly="isReadOnly" required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="interior_number">Número Interior</label>
                            <input class="form-control" id="interior_number" type="text" v-model="form.interior_number" :readonly="isReadOnly">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="neighborhood">Colonia</label>
                            <input class="form-control" id="neighborhood" type="text" v-model="form.neighborhood" :readonly="isReadOnly" required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="locality">Localidad</label>
                            <input class="form-control" id="locality" type="text" v-model="form.locality" :readonly="isReadOnly" required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="municipality">Municipio</label>
                            <input class="form-control" id="municipality" type="text" v-model="form.municipality" :readonly="isReadOnly" required>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="state">Estado</label>
                            <input class="form-control" id="state" type="text" v-model="form.state" :readonly="isReadOnly" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="zipcode">Código Postal</label>
                            <input class="form-control" id="zipcode" type="text" v-model="form.zipcode" :readonly="isReadOnly" required>
                        </div>
                    </div>
                </div>
                <h5 v-if="sale">Detalles de Venta</h5>
                <div class="row" v-if="sale">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="subtotal">Subtotal</label>
                            <input class="form-control" id="subtotal" type="text" v-model="sale.subtotal" readonly>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="iva">IVA</label>
                            <input class="form-control" id="iva" type="text" v-model="sale.iva" readonly>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label" for="total_amount">Total</label>
                            <input class="form-control" id="total_amount" type="text" v-model="sale.total_amount" readonly>
                        </div>
                    </div>
                </div>
                <!-- Submit and Cancel Buttons -->
                <div class="card-footer text-end">
                    <RouterLink to="/invoices" class="btn btn-light me-2">Cancelar</RouterLink>
                    <button class="btn btn-primary" type="submit" :disabled="isReadOnly">Guardar Factura</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { apiDetails } from "@/constants/api";

export default {
    props: {
        invoiceId: {
            type: Number,
            required: false
        },
        saleId: {
            type: Number,
            required: false
        },
    },
    data() {
        return {
            form: {
                rfc: '',
                business_name: '',
                fiscal_regime: '',
                cfdi_use: '',
                zipcode: '',
                street: '',
                exterior_number: '',
                interior_number: '',
                neighborhood: '',
                locality: '',
                municipality: '',
                state: '',
                email: '',
                last_digits_card: '',
                sale_id: null
            },
            sale: null,
            cfdiuses: [],
            regimes: [],
            accessToken: 'Bearer ' + localStorage.getItem('token'),
            isReadOnly: false
        };
    },
    methods: {
        fetchDataInvoice() {
            if (this.invoiceId) {
                axios.get(`${apiDetails.url}api/invoice/${this.invoiceId}`, {
                    headers: {
                        'Authorization': this.accessToken
                    }
                })
                    .then(response => {
                        this.form = response.data;
                        this.isReadOnly = true; // Set fields to readonly mode
                    })
                    .catch(error => {
                        console.error('Error al obtener los datos de la API:', error);
                    });
            }
        },
        fetchDataSale() {
            if (this.saleId) {
                axios.get(`${apiDetails.url}api/sales/${this.saleId}`, {
                    headers: {
                        'Authorization': this.accessToken
                    }
                })
                    .then(response => {
                        this.sale = response.data;
                    })
                    .catch(error => {
                        console.error('Error al obtener los datos de la API:', error);
                    });
            }
        },
        getCfdiUses() {
            axios.get(`${apiDetails.url}api/invoices-cfdiuses`, {
                headers: {
                    'Authorization': this.accessToken
                }
            })
                .then(response => {
                    this.cfdiuses = response.data;
                })
                .catch(error => {
                    console.error('Error al obtener los datos de la API:', error);
                });
        },
        getRegimes() {
            axios.get(`${apiDetails.url}api/invoices-regimes`, {
                headers: {
                    'Authorization': this.accessToken
                }
            })
                .then(response => {
                    this.regimes = response.data;
                })
                .catch(error => {
                    console.error('Error al obtener los datos de la API:', error);
                });
        },
        save() {
            const url = `${apiDetails.url}api/invoices-client`;

            axios.post(url, this.form, {
                headers: {
                    'Authorization': this.accessToken
                }
            })
                .then(response => {
                    this.$swal({
                        title: 'Factura guardada',
                        text: 'Los datos de la factura se han guardado correctamente',
                        icon: 'success'
                    }).then(() => {
                        this.$router.push('/invoices-client');
                    });
                })
                .catch(error => {
                    const errorMessage = this.getErrorMessages(error.response.data.errors) ?? 'Error al guardar la factura.';
                    this.$swal.fire({
                        title: 'Error',
                        html: errorMessage,
                        icon: 'error',
                        confirmButtonText: 'Aceptar',
                    });
                    console.error('Error al guardar la factura:', error);
                });
        },
        getErrorMessages(errors) {
            const errorArray = Object.values(errors).flat();
            return errorArray.join('<br>');
        },
    },
    created() {
        this.getCfdiUses();
        this.getRegimes();
        this.fetchDataSale();
        this.fetchDataInvoice();
    }
}
</script>
