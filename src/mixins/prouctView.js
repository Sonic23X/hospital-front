const prouctView = {
    
   
    methods: {
        allfilter(selectedVal) {
      this.allfilters = selectedVal;
      this.$store.dispatch('products/setTags', selectedVal);
    },
    pricefilterArray(item) {
      this.$store.dispatch('products/priceFilter', item);
    },
      grid2() {
          this.$store.commit('products/grid2', true);
      },
      grid3() {
          this.$store.commit('products/grid3');
      },
      grid4() {
          this.$store.commit('products/grid4');
      },
      grid6() {
          this.$store.commit('products/grid6');
      },
      listView() {
          this.$store.commit('products/listView');
      },
      gridView() {
          this.$store.commit('products/grid6');
      },
      collapseFilter() {
      this.filtered = !this.filtered;

    },
      created() {
  this.allData = this.products;
},
   }
}
  
  export default prouctView