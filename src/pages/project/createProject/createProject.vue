<template>
      <Breadcrumbs main="Apps" title="Project Create" />
       <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                      <createForm/>
                  </div>
                </div>
              </div>
            </div>
       </div>
</template>
<script>
import createForm from "./createForm.vue"
export default {
    components:{
        createForm
    }
}
</script>