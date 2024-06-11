<template>
     <Breadcrumbs main="Bonus Ui" title="Tree View"/>
      <div class="container-fluid">
            <div class="row">
                <basicTree/>
                <checkboxTree/>
            </div>
      </div>
</template>
<script>
import basicTree from "./basicTree.vue"
import checkboxTree from "./checkboxTree.vue"
export default {
    components:{
        basicTree,
        checkboxTree
    }
}
</script>