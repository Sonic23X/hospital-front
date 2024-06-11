<template>
    <Breadcrumbs main="Maps" title="Vue Leaflet"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-6 ">
                    <div class="card">
                        <div class="card-header pb-0">
                          <h5>Simple Map</h5>
                      </div>
                      <div class="card-body">
                      <simpleMap/>
                      </div>
                    </div>
                </div>
                <div class="col-xl-6 ">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h5>Multi-language support</h5><span>Display a map with labels in a foreign language</span>
                        </div>
                        <div class="card-body">
                            <multiLanguage/>
                        </div>
                    </div>
                </div>
                  <div class="col-xl-12 ">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h5>Multi-language support</h5><span>Display a map with labels in a foreign language</span>
                        </div>
                        <div class="card-body">
                           <multiLanguage2/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import simpleMap from "./maps/simpleMap.vue"
import multiLanguage from "./maps/multiLanguage.vue"
import multiLanguage2 from "./maps/multiLanguage2.vue"
export default {
    components:{
       simpleMap,
       multiLanguage,
       multiLanguage2
    }
}
</script>