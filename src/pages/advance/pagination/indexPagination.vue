<template>
     <Breadcrumbs main="Bonus Ui" title="Pagination"/>
      <div class="container-fluid">
            <div class="row">
                <simplePagination/>
                <paginationIcons/>
                <paginationAlignment/>
                <paginationDisabled/>
                <paginationColor/>
                <paginationSizing/>
            </div>
      </div>
</template>
<script>
import simplePagination from "./simplePagination.vue"
import paginationIcons from "./paginationIcons.vue"
import paginationAlignment from "./paginationAlignment.vue"
import paginationDisabled from "./paginationDisabled.vue"
import paginationColor from "./paginationColor"
import paginationSizing from "./paginationSizing.vue"
export default {
    components:{
        simplePagination,
        paginationIcons,
        paginationAlignment,
        paginationDisabled,
        paginationColor,
        paginationSizing
    }
}
</script>