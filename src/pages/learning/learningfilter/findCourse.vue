<template>
     <div class="col-xl-12">
                          <div class="card">
                            <div class="card-header">
                              <h5 class="mb-0 p-0">
                                <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="true" aria-controls="collapseicon" :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Find Course</button>
                              </h5>
                            </div>
                            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                              <div class="card-body filter-cards-view animate-chk">
                                <div class="job-filter">
                                  <div class="faq-form">
                                    <input class="form-control" type="text" placeholder="Search.."><i  data-feather="search"><vue-feather class="search-icon" type="search"></vue-feather></i>
                                  </div>
                                </div>
                                <div class="checkbox-animated">
                                  <div class="learning-header">
                                    <h5 class="f-w-600">Categories</h5>
                                  </div>
                                  <label class="d-block" for="chk-ani">
                                    <input class="checkbox_animated" id="chk-ani" type="checkbox">                      Accounting
                                  </label>
                                  <label class="d-block" for="chk-ani0">
                                    <input class="checkbox_animated" id="chk-ani0" type="checkbox">                            Design
                                  </label>
                                  <label class="d-block" for="chk-ani1">
                                    <input class="checkbox_animated" id="chk-ani1" type="checkbox">                            Development
                                  </label>
                                  <label class="d-block" for="chk-ani2">
                                    <input class="checkbox_animated" id="chk-ani2" type="checkbox">                            Management
                                  </label>
                                </div>
                                <div class="checkbox-animated mt-0">
                                  <div class="learning-header">
                                    <h5 class="f-w-600">Duration</h5>
                                  </div>
                                  <label class="d-block" for="chk-ani6">
                                    <input class="checkbox_animated" id="chk-ani6" type="checkbox">                            0-50 hours
                                  </label>
                                  <label class="d-block" for="chk-ani7">
                                    <input class="checkbox_animated" id="chk-ani7" type="checkbox">                            50-100 hours
                                  </label>
                                  <label class="d-block" for="chk-ani8">
                                    <input class="checkbox_animated" id="chk-ani8" type="checkbox">                            100+ hours
                                  </label>
                                </div>
                                <div class="checkbox-animated mt-0">
                                  <div class="learning-header">
                                    <h5 class="f-w-600">Price</h5>
                                  </div>
                                  <label class="d-block" for="edo-ani">
                                    <input class="radio_animated" id="edo-ani" type="radio" name="rdo-ani" checked="">                            All Courses
                                  </label>
                                  <label class="d-block" for="edo-ani1">
                                    <input class="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" checked="">                            Paid Courses
                                  </label>
                                  <label class="d-block" for="edo-ani2">
                                    <input class="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" checked="">                            Free Courses
                                  </label>
                                </div>
                                <div class="checkbox-animated mt-0">
                                  <div class="learning-header">
                                    <h5 class="f-w-600">Status</h5>
                                  </div>
                                  <label class="d-block" for="chk-ani3">
                                    <input class="checkbox_animated" id="chk-ani3" type="checkbox">                            Registration
                                  </label>
                                  <label class="d-block" for="chk-ani4">
                                    <input class="checkbox_animated" id="chk-ani4" type="checkbox">                            Progress
                                  </label>
                                  <label class="d-block" for="chk-ani5">
                                    <input class="checkbox_animated" id="chk-ani5" type="checkbox">                            Completed
                                  </label>
                                </div>
                                <button class="btn btn-primary text-center" type="button">Filter</button>
                              </div>
                            </div>
                          </div>
                        </div>
</template>
<script>
export default {
     data(){
    return{
     isActive: true,
      
    }
  },
  methods: {
toggle() {
      this.isActive = !this.isActive
    },
}
}
</script>