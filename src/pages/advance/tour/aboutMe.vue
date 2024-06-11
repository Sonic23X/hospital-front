<template>
      <div class="col-xl-3 col-lg-12 box-col-3 col-md-5 xl-30">
                  <div class="default-according style-1 faq-accordion job-accordion">
                    <div class="row">
                        <div class="col-xl-12">
                        <div class="card">
                          <div class="card-header" id="info-bar-tour">
                            <h5 class="p-0">
                              <button class="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon2" aria-expanded="true" aria-controls="collapseicon2"  :class="[isActive ? 'active' : '']" v-on:click="toggle">About Me</button>
                            </h5>
                          </div>
                          <div  :class="[isActive ? 'block' : ' show']" v-show="isActive">
                            <div class="card-body post-about">
                              <ul>
                                <li>
                                  <div class="icon"><vue-feather type="briefcase"></vue-feather></div>
                                  <div>
                                    <h5>UX desginer at Pixelstrap</h5>
                                    <p>banglore - 2021</p>
                                  </div>
                                </li>
                                <li>
                                  <div class="icon"><vue-feather type="book"></vue-feather></div>
                                  <div>
                                    <h5>studied computer science</h5>
                                    <p>at london univercity - 2023</p>
                                  </div>
                                </li>
                                <li>
                                  <div class="icon"><vue-feather type="heart"></vue-feather></div>
                                  <div>
                                    <h5>relationship status</h5>
                                    <p>single</p>
                                  </div>
                                </li>
                                <li>
                                  <div class="icon"><vue-feather type="map-pin"></vue-feather></div>
                                  <div>
                                    <h5>lived in london</h5>
                                    <p>last 5 year</p>
                                  </div>
                                </li>
                                <li>
                                  <div class="icon"><vue-feather type="droplet"></vue-feather></div>
                                  <div>
                                    <h5>blood group</h5>
                                    <p>O+ positive</p>
                                  </div>
                                </li>
                              </ul>
                              <div class="social-network theme-form"><span class="f-w-600">Social Networks</span>
                                <button class="btn social-btn btn-fb mb-2 text-center"><i class="fa fa-facebook m-r-5"></i>Facebook</button>
                                <button class="btn social-btn btn-twitter mb-2 text-center"><i class="fa fa-twitter m-r-5"></i>Twitter</button>
                                <button class="btn social-btn btn-google text-center"><i class="fa fa-dribbble m-r-5"></i>Dribbble</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <followersView/>
                      <followingView/>
                      <latestPhotos/>
                      <friendsView/>
                    </div>
                  </div>
      </div>
</template>
<script>
import followersView from "../../users/userprofile/followersView.vue"
import followingView from "../../users/userprofile/followingView.vue"
import latestPhotos from  "../../users/userprofile/latestPhotos.vue"
import friendsView from "../../users/userprofile/friendsView.vue"
export default {
    components:{
       followersView,
       followingView,
       latestPhotos,
       friendsView
    },
    data(){
        return{
            isActive: true,
        }
    },
     methods: {
     toggle() {
      this.isActive = !this.isActive
    },
}
}
</script>