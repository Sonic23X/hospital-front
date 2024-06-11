<template>
     <div class="card mb-0">
                              <div class="card-header d-flex">
                                <h5>Organization</h5><span class="f-14 pull-right mt-0">10 Contacts</span>
                              </div>
                              <div class="card-body p-0">
                                <div class="row list-persons">
                                  <div class="col-xl-4 xl-50 col-md-5 box-col-6">
                                    <div class="nav flex-column nav-pills" id="v-pills-tab1" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link " :class="contact.active" id="v-pills-iduser-tab" data-bs-toggle="pill"  :href="'#v-pills-iduser'+contact.id" role="tab" aria-controls="v-pills-iduser" aria-selected="true" v-for="(contact,index) in contacts" :key="index">
                                        <div class="media"><img class="img-50 img-fluid m-r-20 rounded-circle" :src="getImgUrl(contact.image)" alt="">
                                          <div class="media-body">
                                            <h6>{{contact.name1}}  {{contact.name2}}</h6>
                                            <p>{{contact.email}}</p>
                                          </div>
                                        </div></a>
                                       
                                        </div>
                                  </div>
                                  <organizationDetail/>
                                </div>
                              </div>
                            </div>
</template>
<script>
import { mapState } from "vuex";
import organizationDetail from "./organizationDetail.vue"
export default {
    components:{
      organizationDetail
    },
     data() {
      return {
       
     };
    },
     computed: {
    ...mapState({
      contacts:(state)=>state.contacts.organization,
         
    }),
  },
   methods:{
       getImgUrl(path) {
      return require("../../assets/images/" + path);
    },
    
  } 
}
</script>