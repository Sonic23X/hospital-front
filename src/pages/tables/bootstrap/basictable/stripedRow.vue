<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Striped Row </h5><span>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code></code>. This styling doesn't work in IE8 and below as :nth-child CSS selector isn't supported.</span>
                  </div>
                  <div class="card-block row">
                    <div class="col-sm-12 col-lg-12 col-xl-12">
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Id</th>
                              <th scope="col">First Name</th>
                              <th scope="col">Last Name</th>
                              <th scope="col">Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in bootstraplist" :key="item">
                             <th scope="row">{{item.id}}</th>
                              <td>{{item.firstName}}</td>
                              <td>{{item.lastName}}</td>
                              <td>{{item.userName}}</td>
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
          bootstraplist: state => state.bootstrap.table2,
        })
      },
    
}
</script>