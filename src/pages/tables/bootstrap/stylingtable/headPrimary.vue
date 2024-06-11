<template>
    <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Table head options With Primary Background</h5><span>Use background classes<code>.bg-*</code>and <code>table-primary</code>,<code>table-secondary</code>,<code>table-success</code>,<code>table-danger</code> ,<code>table-info</code>,<code>table-warning</code>  to make custom <code>thead</code> background. You can also use Stack Admin color palette classes for background.</span>
                  </div>
                  <div class="card-block row">
                    <div class="col-sm-12 col-lg-12 col-xl-12">
                      <div class="table-responsive">
                        <table class="table">
                          <thead class="bg-primary">
                            <tr>
                              <th scope="col">Id</th>
                              <th scope="col">Film Title</th>
                              <th scope="col">Released</th>
                              <th scope="col">Studio</th>
                              <th scope="col">Budget</th>
                              <th scope="col">Domestic Gross</th>
                            </tr>
                          </thead>
                           <tbody>
                            <tr v-for="data in bootstraplist" :key="data">
                              <th scope="row">{{data.id}}</th>
                              <td>{{data.film}}</td>
                              <td>{{data.released}}</td>
                              <td>{{data.studio}}</td>
                              <td>{{data.budget}}</td>
                              <td>{{data.domestic}}</td>
                            </tr>
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="card-block row">
                    <div class="col-sm-12 col-lg-12 col-xl-12">
                      <div class="table-responsive">
                        <table class="table">
                          <thead class="table-success">
                            <tr>
                              <th scope="col">Id</th>
                              <th scope="col">Film Title</th>
                              <th scope="col">Released</th>
                              <th scope="col">Studio</th>
                              <th scope="col">Budget</th>
                              <th scope="col">Domestic Gross</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="data in bootstraplist" :key="data">
                              <th scope="row">{{data.id}}</th>
                              <td>{{data.film}}</td>
                              <td>{{data.released}}</td>
                              <td>{{data.studio}}</td>
                              <td>{{data.budget}}</td>
                              <td>{{data.domestic}}</td>
                            </tr>
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
          bootstraplist: state => state.bootstrap.tableData2,
        })
      },
    
}
</script>