<template>
    <div class="container-fluid list-hospitalizations">
        <div class="row">
            <HospitalizationForm :hospitalizationId="hospitalizationId"/>
        </div>
    </div>
</template>

<script>
import HospitalizationForm from "./hospitalizationForm.vue";
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    components: {
        HospitalizationForm
    },
    setup() {
        const route = useRoute();
        const hospitalizationId = computed(() => {
            const id = route.params.id;
            return id ? parseInt(id) : null;
        });

        return {
            hospitalizationId
        };
    }
}
</script>
