import { apiDetails } from "@/constants/api";

const productList = {  
  methods: {
    getImageUrl(path) {
      return require(apiDetails.url + path);
    },
    removeProduct: function (index) {
      this.productlist.splice(index,1)
    },
    num_pages() {
      return Math.ceil(this.allData.length / this.elementsPerPage);
    },
    change_page(page) {
      this.currentPage = page;
    },
  },
}
  
  export default productList