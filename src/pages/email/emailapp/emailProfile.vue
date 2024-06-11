<template>
     <div class="email-top">
                            <div class="row">
                              <div class="col-12">
                                <div class="media">
                                  <label class="email-chek d-block">
                                    <input class="checkbox_animated" type="checkbox" checked="">
                                  </label>
                                  <div class="media-body">                                                                                  
                                    <div class="dropdown">
                                      <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="javascript:void(0)">Refresh</a><a class="dropdown-item" href="javascript:void(0)">Mark as important</a><a class="dropdown-item" href="javascript:void(0)">Move to span</a><a class="dropdown-item" href="javascript:void(0)">Move to trush</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                           <div class="inbox">
                            <div class="media" v-for="email in emails" :key="email">
                              <div class="media-size-email">                                       
                                <label class="d-block mb-0">
                                  <input class="checkbox_animated" type="checkbox" email.box>
                                </label><i :class="email.star" data-feather="star"><vue-feather  type="star"></vue-feather></i><img class="me-3 rounded-circle" :src="getImgUrl(email.image)" alt="">
                              </div>
                              <div class="media-body">
                                <h6>{{email.name}}</h6>
                                <p>{{email.desc}}</p><span>{{email.time}}</span>
                              </div>
                            </div>
                           </div>
</template>
<script>
import { mapState } from "vuex";
export default {
     computed: {
    ...mapState({
      emails:(state)=>state.email.data,
         
    }),
  },
  methods:{
       getImgUrl(path) {
      return require("../../../assets/images/user/" + path);
    },
  }
}
</script>