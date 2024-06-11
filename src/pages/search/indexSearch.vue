<template>
    <Breadcrumbs main="Search Pages" title="Search Website" />
    <div class="container-fluid search-page">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                     <div class="card-header pb-0">
                    <form class="search-form">
                      <div class="form-group m-0">
                        <label class="sr-only">Email</label>
                      </div>
                      <div class="form-group mb-0">
                        <div class="input-group"><span class="input-group-text"><i class="icon-search"></i></span>
                          <input class="form-control-plaintext" type="search" placeholder="Search..">
                        </div>
                      </div>
                    </form>
                  </div>
                  <saerchTab/>
                </div>
              </div>
            </div>
    </div>
</template>
<script>
import saerchTab from "./saerchTab.vue"
export default {
    components:{
        saerchTab
    }
}
</script>