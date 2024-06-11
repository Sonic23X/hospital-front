<template>
<Breadcrumbs main="Ui Kits" title="Spinners"/>
    <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Loader Style</h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                        <spinnersView/>
                        <loaderView/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
</template>
<script>
import spinnersView from "./spinnersView.vue"
import loaderView from "./loaderView.vue"
export default {
    components:{
        spinnersView,
        loaderView
    }
}
</script>