<template>
    <Breadcrumbs main="Inventario" title="Nuevo producto"/>
    <div class="container-fluid list-products">
        <div class="row">
            <formProduct/>
        </div>
    </div>
</template>


<script>
import formProduct from "./form.vue"

export default {
    components:{
        formProduct
    },
}
</script>