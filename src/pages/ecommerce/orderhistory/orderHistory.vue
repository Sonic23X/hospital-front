<template>
    <Breadcrumbs main="E-commerce" title="Recent Orders"/>
     <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Order history</h5>
                  </div>
                  <div class="card-body">
                      <orderTable/>
                  </div>
                </div>
              </div>
            </div>
     </div>
    
</template>
<script>
import orderTable from "./orderTable.vue"
export default {
    components:{
        orderTable
    }
}
</script>