const orderHistory = {
    
   
    methods:{
        getStatusClass(status){
         if(status==='Shipped'){
           return 'shipped-order'
         }else if(status=='Processing')
         return ''
         else if(status ==='Cancelled')
         return 'cancel-order'
         else return ''
       },
         getImageUrl(path) {
      return require("@/assets/images/product/" + path);
    },
     removeProduct: function (index) {
      this.tableItems.splice(index,1)
    },
     num_pages() {
      return Math.ceil(this.allData.length / this.elementsPerPage);
    },
    change_page(page) {
      this.currentPage = page;
    },
    },
}
  
  export default orderHistory