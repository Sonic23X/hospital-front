<template>
     <div class="col-xl-6 xl-50 box-col-12">
                <div class="card employee-status">
                  <div class="card-header pb-0">
                    <div class="media">
                      <div class="media-body">
                        <h5>EMPLOYEE STATUS</h5>
                      </div>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul> 
                            <li> <a> Done</a></li>
                            <li> <a> Pending</a></li>
                            <li> <a> Rejected</a></li>
                            <li> <a>In Progress                  </a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordernone">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Skill Level</th>
                            <th scope="col">Experience</th>
                          </tr>
                        </thead>
                         <tbody>
                          <tr v-for="item in general" :key="item">
                            <td>
                              <div class="media">                             <img :src="getImageUrl(item.img)" alt="">
                                <div class="media-body">
                                  <h5>{{item.name}} <span class="text-muted">({{item.online}})</span></h5>
                                </div>
                              </div>
                            </td>
                            <td>{{item.position}}</td>
                            <td>
                              <div class="progress-showcase">
                                <div class="progress" style="height: 8px;">
                                  <div :class="item.skill" role="progressbar" :style="{'width':item.progress}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </td>
                            <td>{{item.exp}}</td>
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
      general:(state)=>state.general.employee,    
    }),
   },
    methods: {
    getImageUrl(path) {
      return require("@/assets/images/user/" + path);
    },}
}
</script>