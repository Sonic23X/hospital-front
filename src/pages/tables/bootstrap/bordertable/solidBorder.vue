<template>
    <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Solid Border</h5><span>Example of a <code>solid</code> border inside table <code>thead</code>. This border inherits all styling options from the default border style, the only difference is it has <code>2px</code> width. Sometimes it could be useful for visual separation and addition highlight. To use this border add <code>.border-solid</code> to the table head row. This border style works only with row borders.</span>
                  </div>
                  <div class="table-responsive">
                    <table class="table">
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