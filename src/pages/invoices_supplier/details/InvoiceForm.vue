<template>
    <Breadcrumbs v-if="invoice" :title="`Factura con folio ${invoice.folio}`" main="Facturas Proveedores" />
    <Breadcrumbs v-else :title="`Crear factura proveedor`" main="Facturas Proveedores" />
    <div class="card mt-3">
        <div class="card-body">
            <!-- Condición para mostrar el formulario de carga de archivo si no hay invoice -->
            <div v-if="!invoice">
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <button class="btn btn-primary w-100" @click="triggerFileInput">
                                <i data-feather="plus"></i> Subir archivo XML
                            </button>
                            <input type="file" ref="fileInput" class="d-none" accept=".xml" @change="handleFileUpload">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Si existe el invoice, mostramos la información de manera informativa -->
            <div v-if="invoice">
                <!-- RFC Field -->
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><b>RFC</b></label>
                            <p class="form-control-plaintext">{{ invoice.rfc }}</p>
                        </div>
                    </div>
                </div>
                <!-- Business Name Field -->
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><b>Razón Social</b></label>
                            <p class="form-control-plaintext">{{ invoice.business_name }}</p>
                        </div>
                    </div>
                </div>
                <!-- Fiscal Regime Field -->
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><b>Régimen Fiscal</b></label>
                            <p class="form-control-plaintext">{{ invoice.fiscal_regime }}</p>
                        </div>
                    </div>
                </div>
                <!-- CFDI Use Field -->
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><b>Uso del CFDI</b></label>
                            <p class="form-control-plaintext">{{ invoice.cfdi_use }}</p>
                        </div>
                    </div>
                </div>
                <!-- Sale Details -->
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><b>Método de pago</b></label>
                            <p class="form-control-plaintext">{{ invoice.payment_method }}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><b>Subtotal</b></label>
                            <p class="form-control-plaintext">{{ invoice.subtotal }}</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><b>IVA</b></label>
                            <p class="form-control-plaintext">{{ invoice.iva }}</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><b>Descuento</b></label>
                            <p class="form-control-plaintext">{{ invoice.total_amount < invoice.subtotal ? parseFloat(invoice.subtotal - invoice.total_amount).toFixed(2) : '0.00' }}</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label class="form-label"><b>Total</b></label>
                            <p class="form-control-plaintext">{{ invoice.total_amount }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer text-end">
            <RouterLink to="/invoices-supplier" class="btn btn-light me-2">Regresar</RouterLink>
        </div>
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
        }
    },
    data() {
        return {
            invoice: null,
            cfdiuses: [],
            regimes: [],
            xmlFile: null,
            accessToken: 'Bearer ' + localStorage.getItem('token'),
        };
    },
    methods: {
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        handleFileUpload(event) {
            this.xmlFile = event.target.files[0];
            this.save();
        },
        fetchDataInvoice() {
            if (this.invoiceId) {
                axios.get(`${apiDetails.url}api/invoice-supplier/${this.invoiceId}`, {
                    headers: {
                        'Authorization': this.accessToken
                    }
                })
                    .then(response => {
                        this.invoice = response.data;
                    })
                    .catch(error => {
                        this.$router.push({ name: 'invoicesSupplierDetails' });
                        
                        console.error('Error al obtener los datos de la API:', error);
                    });
            }
        },
        async save() {
            if (!this.xmlFile) {
                this.$swal.fire({
                    title: 'Error',
                    html: 'Por favor, selecciona un archivo XML.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
                return;
            }

            const formData = new FormData();
            formData.append('xml', this.xmlFile);

            try {
                const response = await axios.post(`${apiDetails.url}api/invoice-supplier`, formData, {
                    headers: {
                        'Authorization': this.accessToken,
                        'Content-Type': 'multipart/form-data'
                    }
                });
                this.$refs.fileInput.value = null;
                this.invoice = response.data;
                this.$router.push({ name: 'invoicesSupplierDetails', params: { id: response.data.id } });
            } catch (error) {
                this.$refs.fileInput.value = null;
                if (error.response && error.response.data.errors) {
                    const errorMessage = this.getErrorMessages(error.response.data.errors);
                    this.$swal.fire({
                        title: 'Error',
                        html: errorMessage,
                        icon: 'error',
                        confirmButtonText: 'Aceptar',
                    });
                }
                else if (error.response && error.response.data.message) {
                    this.$swal.fire({
                        title: 'Error',
                        html: error.response.data.message,
                        icon: 'error',
                        confirmButtonText: 'Aceptar',
                    });
                } else {
                    
                    console.error('Error al subir el XML:', error);
                }
            }
        },
        getErrorMessages(errors) {
            const errorArray = Object.values(errors).flat();
            return errorArray.join('<br>');
        },
    },
    created() {
        this.fetchDataInvoice();
    }
}
</script>
