<template>
  <div>
    <div class="logo-wrapper">
      <logoView />
      <div class="back-btn" @click="toggle_sidebar">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="toggle-sidebar" @click="toggle_sidebar">
        <vue-feather class="status_toggle middle" type="grid" id="sidebar-toggle"></vue-feather>
      </div>
    </div>
    <div class="logo-icon-wrapper">
      <router-link to="/">
        <img class="img-fluid" src="../../assets/images/logo/logo-icon.png" alt="" /></router-link>
    </div>
    <navView />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import logoView from "./logoView.vue"
import navView from "./navView.vue"
export default {
  components: {
    logoView,
    navView
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.data,
      activeoverlay: (state) => state.menu.activeoverlay,
    }),
  },
  methods: {
    toggle_sidebar() {
      this.$store.dispatch('menu/opensidebar');
      this.$store.state.menu.activeoverlay = false;
    },
  },
}
</script>