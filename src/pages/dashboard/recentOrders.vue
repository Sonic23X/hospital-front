<template>
     <div class="dash-35  dash-xl-50 dash-lg-100 box-col-12 col-md-12 col-xl-5">
                <div class="card ongoing-project recent-orders">
                  <div class="card-header card-no-border">
                    <div class="media media-dashboard">
                      <div class="media-body"> 
                        <h5 class="mb-0">Recent Orders</h5>
                      </div>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul> 
                            <li> <a>
                                 Done</a></li>
                            <li> <a>
                                 Pending</a></li>
                            <li> <a>
                                 Rejected</a></li>
                            <li> <a>In Progress</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table table-bordernone">
                        <thead> 
                          <tr> 
                            <th> <span>Product Name</span></th>
                            <th> <span>Customer</span></th>
                            <th> <span>Price                                     </span></th>
                            <th> <span>Quantity</span></th>
                            <th> <span>Status</span></th>
                          </tr>
                        </thead>
                        <tbody> 
                          <tr  v-for="table in ongoing" :key="table">
                            <td>
                              <div class="media">
                                <div class="square-box me-2"><img class="img-fluid b-r-5" :src="getImageUrl(table.image)" alt=""></div>
                                <div class="media-body ps-2">
                                  <div class="avatar-details"><router-link to="/ecommerce/details/1">
                                     
                                       <h6>{{table.name}}</h6></router-link><span>{{table.name1}}</span></div>
                                </div>
                              </div>
                            </td>
                            <td class="img-content-box">
                               <h6>{{table.date}}</h6><span>{{table.date1}}</span>
                            </td>
                            <td>
                               <h6>{{table.project}}</h6><span>{{table.project1}}</span>
                            </td>
                            <td> 
                              <h6>{{table.Quantity}}</h6>
                            </td>
                            <td>
                              <div class="badge " :class="table.StatusClass">{{table.badge}}</div>
                            </td>
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
      ongoing:(state)=>state.dashboard.delivery,    
    }),
   },
     methods: {
    getImageUrl(path) {
      return require("@/assets/images/dashboard-2/" + path);
    },
  },
}
</script>