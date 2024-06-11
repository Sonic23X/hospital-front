<template>
     <Breadcrumbs main="Form Controls" title="Input Groups"/>
       <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                  <basicInput/>
                  <basicInput1/>
              </div>
            </div>
       </div>
</template>
<script>
import basicInput from "./basicInput.vue"
import basicInput1 from "./basicInput1.vue"
export default {
    components:{
        basicInput,
        basicInput1
    }
}
</script>