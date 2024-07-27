<template>
    <Breadcrumbs title="Visitas"/>
    <div class="container-fluid list-products">
        <div class="row">
            <listView />
        </div>
    </div>
</template>

<script>
import listView from "./table.vue"

export default {
    components:{
        listView
    },

}
</script>