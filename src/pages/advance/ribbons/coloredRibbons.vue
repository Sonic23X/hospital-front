<template>
      <div class="row">
              <div class="col-sm-12 col-md-12 col-xl-12">
                <div class="card">
                  <div class="card-header"><h5>Colored Ribbons</h5><span>use class <code>.ribbons-colored .bg-primary</code></span></div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in ribbon" :key="item">
                        <div class="card">
                          <div class="ribbon-wrapper">
                            <div class="card-body">
                              <div class="ribbon ribbon-primary ribbon-space-bottom">Ribbon</div>
                              <p>{{item.lorn}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-xl-4" v-for="item in ribbonItem" :key="item">
                <div class="ribbon-wrapper card">
                  <div class="card-body">
                    <div class="ribbon " :class="item.class">Ribbon</div>
                    <p>{{item.lorn}}</p>
                  </div>
                </div>
              </div>
             
            </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      ribbon:(state)=>state.ribbon.colored, 
      ribbonItem:(state)=>state.ribbon.left,    
    }),
   },
}
</script>