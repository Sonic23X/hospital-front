<template>
    <div class="container-fluid list-doctors">
        <div class="row">
            <DoctorForm :doctorId="doctorId"/>
        </div>
    </div>
</template>

<script>
import DoctorForm from "./doctorForm.vue";
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    components: {
        DoctorForm
    },
    setup() {
        const route = useRoute();
        const doctorId = computed(() => {
            const id = route.params.id;
            return id ? parseInt(id) : null;
        });

        return {
            doctorId
        };
    }
}
</script>
