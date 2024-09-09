<template>
    <div class="container-fluid list-invoices">
        <div class="row">
            <invoiceForm :invoiceId="invoiceId" :saleId="saleId"/>
        </div>
    </div>
</template>

<script>
import invoiceForm from "./InvoiceForm.vue";
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    components: {
        invoiceForm
    },
    setup() {
        const route = useRoute();
        const invoiceId = computed(() => {
            const id = route.params.id;
            return id ? parseInt(id) : null;
        });
        const saleId = computed(() => {
            const sale_id = route.params.sale_id;
            return sale_id ? parseInt(sale_id) : null;
        });

        return {
            invoiceId,
            saleId
        };
    }
}
</script>
