<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
        <h5>Table Footer Styling</h5><span>Use class
          <code>table-info</code>,<code>table-success</code>,<code>table-success</code>,<code>table-info</code>,<code>table-danger</code>,<code>table-primary</code>,<code>table-secondary</code>,<code>table-light</code>,<code>table-active</code>and
          also use <code>bg-*</code> inside tfoot element.</span>
      </div>
      <div class="card-block row">
        <div class="col-sm-12 col-lg-12 col-xl-12">
          <div class="table-responsive table-border-radius">
            <table class="table">
              <thead>
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
                  <th scope="row">{{ data.id }}</th>
                  <td>{{ data.film }}</td>
                  <td>{{ data.released }}</td>
                  <td>{{ data.studio }}</td>
                  <td>{{ data.budget }}</td>
                  <td>{{ data.domestic }}</td>
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