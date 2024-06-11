<template>
    <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Vertical Borders</h5><span>Example of <code>Vertical </code> table borders. This is a default table border style attached to <code> .table</code> class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using<code> .table-border-vertical</code>class added to the table with <code>.table</code>class.</span>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-border-vertical">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Classname</th>
                          <th scope="col">Type</th>
                          <th scope="col">Hours</th>
                          <th scope="col">Trainer</th>
                          <th scope="col">Spots</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in bootstraplist" :key="item">
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