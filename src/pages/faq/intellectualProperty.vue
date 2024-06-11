<template>
     <div class="faq-title"> <h6>Intellectual Property</h6> </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link " data-bs-toggle="collapse" data-bs-target="#collapseicon5" aria-expanded="false"  v-on:click="open()"><vue-feather type="help-circle"></vue-feather> WordPress Site Maintenance ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon5" aria-labelledby="collapseicon5" data-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                          <div class="card-body"><p>{{lorem}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link " data-bs-toggle="collapse" data-bs-target="#collapseicon7" aria-expanded="false" aria-controls="collapseicon7" v-on:click="open1()"><vue-feather type="help-circle"></vue-feather>  WordPress in Your Language ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon7" data-parent="#accordionoc" :class="[isActive1 ? 'block' : 'none', 'content']" v-show="isActive1">
                          <div class="card-body"><p>{{lorem}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link " data-bs-toggle="collapse" data-bs-target="#collapseicon8" aria-expanded="false" aria-controls="collapseicon8" v-on:click="open2()"><vue-feather type="help-circle"></vue-feather>Integrating WordPress with Your Website ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon8" data-parent="#accordionoc" :class="[isActive2 ? 'block' : 'none', 'content']" v-show="isActive2">
                          <div class="card-body"><p>{{lorem}}</p>
                          </div>
                        </div>
                      </div>
</template>
<script>
export default {
  data(){
    return{
        isActive: false,
         isActive1: false,
          isActive2: false,
       lorem:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
  },
  methods: {
     open(){
       this.isActive = !this.isActive
    },
      open1(){
       this.isActive1 = !this.isActive1
    },
      open2(){
       this.isActive2 = !this.isActive2
    }
}
}
</script>