<template>
     <Breadcrumbs title="Inventario"/>
     <div class="container-fluid list-products">
            <div class="row">
                <listView/>
            </div>
     </div>
</template>
<script>

import listView from "./listView.vue"
export default {
    components:{
       listView
    },
   
}
</script>