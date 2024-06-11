<template>
     <div class="dash-xl-50 dash-29 box-col-6 col-md-6 col-xl-3">
                <div class="card our-activities">
                  <div class="card-header card-no-border">
                    <div class="media media-dashboard">
                      <div class="media-body"> 
                        <h5 class="mb-0">Our Activities      </h5>
                      </div>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul> 
                            <li> <a>
                                 Latest </a></li>
                            <li> <a>
                                 Earlist</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table table-bordernone">                          
                        <tbody> 
                          <tr v-for="item in ongoing" :key="item">
                            <td>
                              <div class="media">
                                <div class="icon-wrappar"><i class="fa " :class="item.icon">                                    </i></div>
                                <div class="media-body"><a href="#">
                                    <h5>{{item.title}} </h5></a>
                                  <p>{{item.desc}}</p>
                                </div>
                              </div>
                            </td>
                            <td><span class="badge badge-light-theme-light font-theme-light">{{item.badge}}</span></td>
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
      ongoing:(state)=>state.dashboard.activitie,    
    }),
   },
}
</script>