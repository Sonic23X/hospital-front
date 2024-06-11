<template>
      <div class="col-lg-12 ">
                  <div class="header-faq">
                    <h3 class="mb-0">Quick Questions are answered</h3>
                  </div>
                  <div class="row default-according style-1 faq-accordion" id="accordionoc">
                    <div class="col-xl-8 xl-60 col-lg-6 col-md-7 box-col-8e">
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false"  aria-controls="collapseicon"  v-on:click="open3()"><vue-feather type="help-circle"></vue-feather> Integrating WordPress with Your Website?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon"  data-bs-parent="#accordionoc" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                          <div class="card-body"><p>{{lorem}}</p></div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon2" aria-expanded="false" aria-controls="collapseicon2" @click="open2()"><vue-feather type="help-circle"></vue-feather> WordPress Site Maintenance ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon2" data-parent="#accordionoc" :class="[ show2 ? 'block' : 'none', 'content']" v-show="show2">
                          <div class="card-body"><p>{{lorem}}</p></div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon3" aria-expanded="false" aria-controls="collapseicon3" @click="open()"><vue-feather type="help-circle"></vue-feather>Meta Tags in WordPress ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon3" data-parent="#accordionoc" :class="[show ? 'block' : 'none', 'content']" v-show="show">
                          <div class="card-body"><p>{{lorem}}</p></div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon4" aria-expanded="false" aria-controls="collapseicon4" @click="open1()"><vue-feather type="help-circle"></vue-feather>   WordPress in Your Language ?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon4" data-parent="#accordionoc" :class="[show1 ? 'block' : 'none', 'content']" v-show="show1">
                          <div class="card-body"><p>{{lorem}}</p></div>
                        </div>
                      </div>
                     <intellectualProperty/>
                   <quickQuestions2/>
                    </div>
                   <navigationView/>
                  </div>
      </div>
</template>
<script>
import intellectualProperty from "./intellectualProperty.vue"
import quickQuestions2 from "./quickQuestions2.vue"
import navigationView from "./navigationView.vue"
export default {
  components:{quickQuestions2,navigationView,intellectualProperty},
  data(){
    return{
       show :false,
       show1 :false, 
       isActive: false,
       show2:false,
       lorem:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
  },
  methods: {
open3() {
      this.isActive = !this.isActive
    },
    open(){
        this.show = !this.show
      },
       open1(){
        this.show1= !this.show1
      },
         open2(){
        this.show2= !this.show2
      },
}
}
</script>