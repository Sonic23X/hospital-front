<template>
    <div class="container-fluid list-invoices">
        <div class="row">
            <invoiceForm :invoiceId="invoiceId"/>
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


        return {
            invoiceId
        };
    }
}
</script>
