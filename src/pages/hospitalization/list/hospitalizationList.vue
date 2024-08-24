<template>
    <Breadcrumbs title="Hospitalizaciones" />
    <div class="container-fluid list-hospitalizations">
      <div class="row">
        <listView />
      </div>
    </div>
  </template>
  
  <script>
  import listView from "./listView.vue";
  
  export default {
    components: {
      listView,
    },
  };
  </script>
  