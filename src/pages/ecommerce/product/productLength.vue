<template>
     <div class="col-md-9 col-sm-10 text-end">  
                <div class="select2-drpdwn-product select-options d-inline-block">
                  <select
                    class="form-control btn-square"
                    name="select"
                    @change="onChangeSort($event)"
                  >
                       <option value="opt1">Featured</option>
                        <option value="opt2">Lowest Prices</option>
                        <option value="opt3">Highest Prices</option>
                  </select>
                </div>
             
            </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
     data() {
      return {
        modalShow: false,
        quickViewProduct: [],
        counter: 1,
        priceArray: [],
        allfilters: [],
        items: [],
        filtered: false,
      
      };
    },
    computed: {
      
      ...mapGetters({
        filterProduct: 'products/filterProducts',
        tags: 'products/setTags'
      }),
    },
    methods: {
      getImgUrl(path) {
        return require('../../../assets/images/ecommerce' + path);
      },
      onChangeSort(event) {
        this.$store.dispatch('products/sortProducts', event.target.value);
      },
      allfilter(selectedVal) {
        this.allfilters = selectedVal;
        this.$store.dispatch('products/setTags', selectedVal);
      },

      collapseFilter() {
        this.filtered = !this.filtered;
      },
      pricefilterArray(item) {
        this.$store.dispatch('products/priceFilter', item);
      },
      addToCart: function(product, qty) {
        product.quantity = qty ? qty : 1;
        this.$store.dispatch('products/addToCart', product);
      },
      quickView: function(product) {
        this.modalShow = true;
        return (this.quickViewProduct = product);
      },
      quickViewClose: function() {
        this.modalShow = false;
      },
    }
}
</script>