<template>
     <div class="col-lg-12 faq-articles">
                  <div class="header-faq">
                    <h3 class="mb-0">Latest articles and videos</h3>
                  </div>
                  <div class="row">
                    <div class="col-xl-4 col-md-6">
                      <div class="row">
                        <div class="col-sm-12" v-for="item in faq" :key="item">
                          <div class="card">
                            <div class="card-body">
                              <div class="media"><i class="m-r-30" data-feather="codepen"><vue-feather :type="item.icon"></vue-feather></i>
                                <div class="media-body">
                                  <h6 class="f-w-600">{{item.title}}</h6>
                                  <p>{{item.desc}}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div class="col-xl-4 col-md-6">
                      <div class="row">
                        <div class="col-sm-12" v-for="item in faq1" :key="item">
                          <div class="card">
                            <div class="card-body">
                              <div class="media"><i class="m-r-30" data-feather="codepen"><vue-feather :type="item.icon"></vue-feather></i>
                                <div class="media-body">
                                  <h6 class="f-w-600">{{item.title}}</h6>
                                  <p>{{item.desc}}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                     <div class="col-xl-4 col-md-6">
                      <div class="row">
                        <div class="col-sm-12" v-for="item in faq2" :key="item">
                          <div class="card">
                            <div class="card-body">
                              <div class="media"><i class="m-r-30" data-feather="codepen"><vue-feather :type="item.icon"></vue-feather></i>
                                <div class="media-body">
                                  <h6 class="f-w-600">{{item.title}}</h6>
                                  <p>{{item.desc}}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
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
      faq:(state)=>state.faq.articles, 
       faq1:(state)=>state.faq.articles1, 
       faq2:(state)=>state.faq.articles2, 
    }),
   },
   
}
</script>