<template>
     <Breadcrumbs main="Form Widgets" title="Base Inputs"/>
      <div class="container-fluid">
            <div class="card">
              <div class="card-header pb-0">
                <h5>Date  Time Picker</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="datetime-picker">
                      <form class="theme-form">
                           <usingLocales/>
                           <timeOnly/>
                           <dateOnly/>
                           <noIcon/>
                           <viewMode/>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
      
</template>
<script>
import usingLocales from "./usingLocales.vue"
import timeOnly from "./timeOnly.vue"
import dateOnly from "./dateOnly.vue"
import noIcon from "./noIcon.vue"
import viewMode from "./viewMode.vue"
export default {
   components:{
     usingLocales,
     timeOnly,
     dateOnly,
     noIcon,
     viewMode
   }
}
</script>