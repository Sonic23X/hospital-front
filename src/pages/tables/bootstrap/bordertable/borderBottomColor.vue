<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Border Bottom Color </h5><span>EExample of a table head border with<code>custom </code>  color. According to the custom color system options, you can set any of predefined colors by adding  <code>.border-bottom-*</code> class to the table head row. This technique works with all border styles demonstrated above.</span>
                  </div>
                  <div class="table-responsive">
                    <table class="table">
                     <thead>
                        <tr class="border-bottom-primary">
                          <th scope="col">Id</th>
                          <th scope="col">Classname</th>
                          <th scope="col">Type</th>
                          <th scope="col">Hours</th>
                          <th scope="col">Trainer</th>
                          <th scope="col">Spots</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr :class="item.bottom" v-for="item in bootstraplist" :key="item">
                          <th scope="row">{{item.id}}</th>
                          <td>{{item.className}}</td>
                          <td>{{item.type}}</td>
                          <td>{{item.hours}}</td>
                          <td>{{item.trainer}}</td>
                          <td>{{item.spot}}</td>
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
          bootstraplist: state => state.bootstrap.tableData,
        })
      },
    
}
</script>