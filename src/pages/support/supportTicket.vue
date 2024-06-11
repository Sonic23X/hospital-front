<template>
    <Breadcrumbs main="Apps" title="Support Ticket"/>
      <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Support Ticket List</h5><span>List of ticket opend by customers</span>
                  </div>
                  <div class="card-body">
                    <div class="row">
                        <ticketList/>
                        <ticketList1/>
                    </div>
                    <supportTable/>
                  </div>
                </div>
              </div>
            </div>
      </div>
      
</template>
<script>
import ticketList from "./ticketList.vue"
import ticketList1 from "./ticketList1.vue"
import supportTable from "./supportTable.vue"
export default {
    components:{
        ticketList,
        ticketList1,
        supportTable
    }
}
</script>