<template>
      <div class="faq-title"><h6>Selling And Buying</h6></div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon9" aria-expanded="false" v-on:click="open()"><vue-feather type="help-circle"></vue-feather> WordPress Site Maintenance ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon9" aria-labelledby="collapseicon9" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                          <div class="card-body">
                            <p>{{ lorem}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon10" aria-expanded="false" aria-controls="collapseicon2" v-on:click="open1()"><vue-feather type="help-circle"></vue-feather>Meta Tags in WordPress ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon10" data-parent="#accordionoc" :class="[isActive1 ? 'block' : 'none', 'content']" v-show="isActive1">
                          <div class="card-body">
                            <p>{{ lorem}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon11" aria-expanded="false" aria-controls="collapseicon2" v-on:click="open2()"><vue-feather type="help-circle"></vue-feather>Validating a Website ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon11" data-parent="#accordionoc" :class="[isActive2 ? 'block' : 'none', 'content']" v-show="isActive2">
                          <div class="card-body"> <p>{{ lorem}}</p> </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon12" aria-expanded="false" aria-controls="collapseicon2" v-on:click="open3()"><vue-feather type="help-circle"></vue-feather>Know Your Sources ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon12" data-parent="#accordionoc" :class="[isActive3 ? 'block' : 'none', 'content']" v-show="isActive3">
                          <div class="card-body"> <p>{{ lorem}}</p> </div>
                        </div>
                      </div>
                <userAccounts/>
</template>
<script>
import userAccounts from "./userAccounts.vue"
export default {
  components:{
     userAccounts
  },
  data(){
    return{
       isActive: false,
       isActive1: false,
          isActive2: false,
          isActive3: false,
       lorem:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
  },
   methods: {
open() {
      this.isActive = !this.isActive
    },
      open1(){
       this.isActive1 = !this.isActive1
    },
      open2(){
       this.isActive2 = !this.isActive2
    },
     open3(){
       this.isActive3 = !this.isActive3
    }
   }
}
</script>