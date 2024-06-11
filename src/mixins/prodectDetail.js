const prodectDetail = {
    
   
    methods: {
        grid(){
           this.$emit("grid2")
        },
        getImgUrl(path) {
          return require("@/assets/images/" + path);
        },
        onChangeSort(event) {
          this.$store.dispatch("products/sortProducts", event.target.value);
        },
        collapseFilter() {
          this.filtered = !this.filtered;
        },
        addToCart: function (product, qty) {
          product.quantity = qty ? qty : 1;
          this.$store.dispatch("products/addToCart", product);
        },
        quickView: function (product) {
          this.modalShow = true;
          return (this.quickViewProduct = product);
        },
        quickViewClose: function () {
          this.modalShow = false;
        },
        increment() {
          if (this.counter < this.quickViewProduct.stock) this.counter++;
        },
        decrement() {
          if (this.counter > 1) this.counter--;
        },
    }
}
  
  export default prodectDetail