<template>
  <div class="col-xl-3 xl-40">
    <div class="job-sidebar md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
        @click="collapseFilter()">learning filter</a>
      <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered ? 'open' : ''">
        <div class="default-according style-1 job-accordion" id="accordionoc">
          <div class="row">
            <findCourse />
            <categoriesView />
            <upcomingCourses />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import findCourse from "./findCourse.vue"
import categoriesView from "./categoriesView.vue"
import upcomingCourses from "./upcomingCourses.vue"
export default {
  components: {
    findCourse,
    categoriesView,
    upcomingCourses
  },
  data() {
    return {
      filtered: false,

    }
  },
  methods: {
    collapseFilter() {
      this.filtered = !this.filtered
    },
  }
}
</script>