<template>
    <Breadcrumbs main="Form Widgets" title="Date Picker"/>
     <div class="container-fluid">
            <div class="card">
              <div class="card-header pb-0">
                <h5>Date Picker</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="date-picker">
                      <form class="theme-form">
                          <defaultDate/>
                          <multipleDates/>
                          <monthSelection/>
                          <minimumMaximum/>
                          <rangeDates/>
                          <disableDays/>
                          <orientationDate/>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     </div>
     
</template>
<script>
import defaultDate from "./defaultDate.vue"
import multipleDates from "./multipleDates.vue"
import monthSelection from "./monthSelection.vue"
import minimumMaximum from "./minimumMaximum.vue"
import rangeDates from "./rangeDates.vue"
import disableDays from "./disableDays.vue"
import orientationDate from "./orientationDate.vue"
export default {
    components:{
        defaultDate,
        multipleDates,
        monthSelection,
        minimumMaximum,
        rangeDates,
        disableDays,
        orientationDate
    }
}
</script>