<template>
     <div class="faq-title"> <h6>User Accounts</h6></div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon13" aria-expanded="false" v-on:click="open()" ><vue-feather type="help-circle" ></vue-feather>Integrating WordPress with Your Website ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon13" aria-labelledby="collapseicon13" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                          <div class="card-body">  <p>{{lorem}}</p></div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon14" aria-expanded="false" aria-controls="collapseicon2" v-on:click="open1()"><vue-feather type="help-circle"></vue-feather>WordPress Site Maintenance ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon14" data-parent="#accordionoc" :class="[isActive1 ? 'block' : 'none', 'content']" v-show="isActive1">
                          <div class="card-body"><p>{{lorem}}</p> </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon16" aria-expanded="false" aria-controls="collapseicon2" v-on:click="open2()"><vue-feather type="help-circle"></vue-feather> WordPress in Your Language ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon16" data-parent="#accordionoc" :class="[isActive2 ? 'block' : 'none', 'content']" v-show="isActive2">
                          <div class="card-body"><p>{{lorem}}</p></div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon17" aria-expanded="false" aria-controls="collapseicon2" v-on:click="open3()"><vue-feather type="help-circle"></vue-feather>  Validating a Website ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon17" data-parent="#accordionoc" :class="[isActive3 ? 'block' : 'none', 'content']" v-show="isActive3">
                          <div class="card-body"><p>{{lorem}}</p> </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon18" aria-expanded="false" aria-controls="collapseicon2" v-on:click="open4()"><vue-feather type="help-circle"></vue-feather>Meta Tags in WordPress ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon18" data-parent="#accordionoc" :class="[isActive4 ? 'block' : 'none', 'content']" v-show="isActive4">
                          <div class="card-body"><p>{{lorem}}</p>  </div>
                        </div>
                      </div>
</template>
<script>
export default {
  components:{  
  },
  data(){
    return{
       isActive: false,
       isActive1: false,
          isActive2: false,
          isActive3: false,
           isActive4: false,
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
    },
     open4(){
       this.isActive4 = !this.isActive4
    }
   }
}
</script>