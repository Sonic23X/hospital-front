<template>
     <Breadcrumbs main="Ui Kits" title="Grid"/>
      <div class="container-fluid">
            <div class="row">
                <gridOptions/>
                <gridColumn/>
                <nestingColumn/>
            </div>
      </div>
</template>
<script>
import gridOptions from "./gridOptions.vue"
import gridColumn from "./gridColumn.vue"
import nestingColumn from "./nestingColumn.vue"
export default {
    components:{
        gridOptions,
        gridColumn,
        nestingColumn
    }
}
</script>