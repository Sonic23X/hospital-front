<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Large Table</h5><span>Example of large table, Add <code>.table-lg</code>class to the <code>.table</code>to create a table with large spacing. larger table all rows have <code>0.9rem</code> height.</span>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-lg">
                      <thead>
                        <tr>
                         <th>Id</th>
                         <th>Employee Name</th>
                         <th>Date</th>
                         <th>Status</th>
                         <th>Hours</th>   
                         <th>Performance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in bootstraplist" :key="item">
                          <th scope="row">{{item.id}}</th>
                         <td>{{item.Name}}</td>
                         <td>{{item.Date}}</td>
                         <td :class="item.statusClass">{{item.Status}}</td>
                         <td>{{item.hours}}</td>
                         <td>{{item.performance}}</td>
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
          bootstraplist: state => state.bootstrap.sizingTablesXl,
        })
      },
    
}
</script>