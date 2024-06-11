<template>
     <div class="col-xl-6 xl-50 box-col-12">
                <div class="card user-status">
                  <div class="card-header pb-0">
                    <div class="media">
                      <div class="media-body">
                        <h5>Product cart</h5>
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
                            <li> <a>In Progress                  </a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive mb-0">
                      <table class="table table-bordernone">
                        <thead>
                          <tr>
                            <th scope="col">Details</th>
                            <th scope="col">Qty.</th>
                            <th scope="col">Price</th>
                            <th class="text-end" scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="table in general" :key="table">
                            <td>{{table.name}}</td>
                            <td class="digits">{{table.date}}</td>
                            <td class="digits font-primary">$6523</td>
                            <td class="text-end"><span class="badge" :class="table.StatusClass"> {{table.badge}}</span></td>
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
      general:(state)=>state.general.table,    
    }),
   },
}
</script>