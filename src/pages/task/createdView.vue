<template>
  <div class="card mb-0">
    <div class="card-header d-flex">
      <h5 class="mb-0">Created by me</h5><a href="#"><vue-feather class="me-2" type="printer"
          @click="printWindow()"></vue-feather>Print</a>
    </div>
    <div class="card-body p-0">
      <div class="taskadd">
        <div class="table-responsive">
          <table class="table">
            <tbody>
              <tr v-for="item in taskItem" :key="item">
                <td>
                  <h6 class="task_title_0">Task name</h6>
                  <p class="project_name_0">General</p>
                </td>
                <td>
                  <p class="task_desc_0">{{ item.title }}</p>
                </td>
                <td><a class="me-2" href="javascript:void(0)"><vue-feather type="link"></vue-feather></a><a
                    href="javascript:void(0)"><i data-feather="more-horizontal"><vue-feather
                        type="more-horizontal"></vue-feather></i></a></td>
                <td><a href="javascript:void(0)"><vue-feather type="trash-2"
                      @click='removeProduct(index)'></vue-feather></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState } from "vuex";
export default {
  components: {

  },
  computed: {
    ...mapState({
      taskItem: (state) => state.task.data,
    }),
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/user-card/" + path);
    },
    getImage(path) {
      return require("@/assets/images/avtar/" + path);
    },
    removeProduct: function (index) {
      this.taskItem.splice(index, 1)
    },
    printWindow() {
      window.print();
    }
  }
}
</script>