<template>
      <Breadcrumbs main="Form Widgets" title="Date Range"/>
      <div class="container-fluid">
            <div class="card">
              <div class="card-header pb-0">
                <h5>Date Range Picker</h5>
              </div>
              <div class="card-body">
                <div class="row date-range-picker">
                    <rangePicker/>
                    <singleDate/>
                    <initiallyEmpty/>
                </div>
              </div>
            </div>
      </div>
</template>
<script>
import rangePicker from "./rangePicker.vue"
import singleDate from "./singleDate.vue"
import initiallyEmpty from "./initiallyEmpty.vue"
export default {
    components:{
        rangePicker,
        singleDate,
        initiallyEmpty
    }
}
</script>