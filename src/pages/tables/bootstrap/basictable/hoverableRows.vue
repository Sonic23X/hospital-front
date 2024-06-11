<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Hoverable rows with Horizontal Border</h5><span>Hoverable row use a class <code>table-hover</code> and for Horizontal border use a class <code>.table-border-horizontal</code> , Solid border Use a class <code>.border-solid</code> <code>.table</code> class.</span>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-hover table-border-horizontal">
                      <thead>
                        <tr>
                           <th scope="col">Id</th>
                           <th scope="col">Status</th>
                           <th scope="col">Signal Name</th>
                           <th scope="col">Security</th>
                           <th scope="col">Stage</th>
                           <th scope="col">Schedule</th>
                           <th scope="col">Team Lead</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="data in bootstraplist" :key="data">
                        <th scope="row">{{data.id}}</th>
                        <td :Class=" data.status"> 
                        <div class="media align-items-center hover-icon">
                        <div >
                        <vue-feather class=" me-2" :class="data.bgClass" :type="data.icon"></vue-feather>
                        </div>
                       {{data.status}}
                        </div>
                        </td>
                        <td>{{data.signalName}}</td>
                        <td>{{data.security}}</td>
                        <td>{{data.stage}}</td>
                        <td>{{data.schedule}}</td>
                        <td>{{data.teamLead}}</td>
                         </tr>
                       
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
          bootstraplist: state => state.bootstrap.hoverable,
        })
      },
      methods:{
        getImgUrl(path) {
        return require('@/assets/images/avtar/'+path);
      },
       
      }
}
</script>