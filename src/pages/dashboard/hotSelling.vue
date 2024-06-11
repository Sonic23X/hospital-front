<template>
     <div class="dash-lgorder-1 dash-xl-33 dash-lg-50 box-col-6 col-md-6 col-xl-4">
                <div class="card hot-selling">
                  <div class="card-header card-no-border">
                    <div class="header-top">
                      <h5 class="m-0">Hot Selling Products</h5>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul> 
                            <li> <a>
                                 Today</a></li>
                            <li> <a>
                                 Yesterday</a></li>
                            <li> <a>
                                 Tommorow</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="table-responsive">        
                      <table class="table table-bordernone">                          
                        <tbody> 
                          <tr  v-for="card in ongoing" :key="card">
                            <td>
                              <div class="media"><img class="img-fluid me-3 b-r-5" :src="getImageUrl(card.image)" alt="">
                                <div class="media-body"><router-link to="/ecommerce/details/1">
                                    <h5>{{card.title}}</h5></router-link>
                                  <p>{{card.decs}}</p>
                                </div>
                              </div>
                            </td>
                            <td><span class="badge badge-light-theme-light font-theme-light">{{card.badge}}</span></td>
                          </tr>
                         
                        </tbody>
                      </table>
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
      ongoing:(state)=>state.dashboard.selling,    
    }),
   },
     methods: {
    getImageUrl(path) {
      return require("@/assets/images/dashboard-2/" + path);
    },
  },
}
</script>