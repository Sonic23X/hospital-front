<template>
     <div class="col-xl-3 xl-40 box-col-5">
           <div class="job-sidebar md-sidebar">
                  <a class="btn btn-primary md-sidebar-toggle"   @click="collapseFilter()">job filter</a>
                  <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered?'open':''">
                    <div class="default-according style-1 job-accordion" id="accordionoc">
                      <div class="row">
                           <filterView/>
                           <locationView/>
                           <jobTitle/>
                           <industryView/>
                           <specificSkills/>
                      </div>
                    </div>
                  </div>
           </div>
     </div>
</template>
<script>
import filterView from "./filterView.vue"
import locationView from "./locationView.vue"
import jobTitle from "./jobTitle.vue"
import industryView from "./industryView.vue"
import specificSkills from "./specificSkills.vue"
export default {
     components:{
          filterView,
          locationView,
          jobTitle,
          industryView,
          specificSkills
     },
     data(){
          return{
      filtered: false,
          }
     },
     methods:{
           collapseFilter() {
        this.filtered = !this.filtered;
      },
     }
}
</script>