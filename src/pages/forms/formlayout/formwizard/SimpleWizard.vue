<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
        <h5>Form Wizard And Validation</h5>
        <span>Validation Step Form Wizard</span>
      </div>
      <div class="card-body">
        <Wizard :custom-tabs="[]" :beforeChange="onTabBeforeChange" :nextButton="nextButtonOptions"
          @change="onChangeCurrentTab">
          <div class="col-xs-12" v-if="currentTabIndex === 0">
            <personal />
          </div>
          <div class="col-xs-12 " v-if="currentTabIndex === 1">
            <div class="col-md-12">
              <div class="mb-3">
                <label class="control-label">Email</label>
                <input class="form-control" type="text" placeholder="name@example.com" required="required">
              </div>
              <div class="mb-3">
                <label class="control-label">Password</label>
                <input class="form-control" type="password" placeholder="Password" required="required">
              </div>
            </div>
          </div>
          <div class="col-xs-12 " v-if="currentTabIndex === 2">
            <div class="col-md-12">
              <div class="mb-3">
                <label class="control-label">Birth date</label>
                <input class="form-control" type="date" required="required">
              </div>
              <div class="mb-3">
                <label class="control-label">Have Passport</label>
                <input class="form-control" type="text" placeholder="yes/No" required="required">
              </div>
            </div>
          </div>
          <div class="col-xs-12 " v-if="currentTabIndex === 3">
            <div class="col-md-12">
              <div class="mb-3">
                <label class="control-label">State</label>
                <input class="form-control mt-1" type="text" placeholder="State" required="required">
              </div>
              <div class="mb-3">
                <label class="control-label">City</label>
                <input class="form-control mt-1" type="text" placeholder="City" required="required">
              </div>
            </div>
          </div>
        </Wizard>
      </div>
    </div>
  </div>
</template>
<script>
import personal from "./formWizard2/personalView.vue";
import "form-wizard-vue3/dist/form-wizard-vue3.css";
import Wizard from "form-wizard-vue3";
export default {
  name: "App",
  components: {
    Wizard,
    personal,
  },
  data() {
    return {
      currentTabIndex: 0,
    };
  },
  methods: {
    onChangeCurrentTab(index, oldIndex) {
      this.currentTabIndex = index;
    },
    onTabBeforeChange() {
      if (this.currentTabIndex === 0) {
      }
    },
  },
  computed: {
    nextButtonOptions() {
      return this.currentTabIndex === 3
        ? {
          text: 'Submit',
          hideIcon: true,
          hideText: false,
          disabled: true,
        }
        : { disabled: false };
    },
  },
};
</script>