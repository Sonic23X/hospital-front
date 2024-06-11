<template>
     <div class="cart-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <g>
                        <path d="M5.52377 7C9.41427 5.74386 13.9724 5.45573 16 5.5C18.0276 5.54427 18.8831 6.2663 19.5 7.5C20.5 9.5 20.289 14.4881 18.5 16.0871C16.712 17.6861 9.33015 17.8381 6.87015 16.0871C4.27115 14.2361 5.629 9.192 5.544 5.743C5.595 3.813 3.5 3.5 3.5 3.5" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M13 10.5H15.773" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.26399 20.1274C7.56399 20.1274 7.80799 20.3714 7.80799 20.6714C7.80799 20.9724 7.56399 21.2164 7.26399 21.2164C6.96299 21.2164 6.71899 20.9724 6.71899 20.6714C6.71899 20.3714 6.96299 20.1274 7.26399 20.1274Z" fill="#130F26" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5954 20.1274C17.8964 20.1274 18.1404 20.3714 18.1404 20.6714C18.1404 20.9724 17.8964 21.2164 17.5954 21.2164C17.2954 21.2164 17.0514 20.9724 17.0514 20.6714C17.0514 20.3714 17.2954 20.1274 17.5954 20.1274Z" fill="#130F26" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </g>
                  </svg><span class="badge rounded-pill badge-primary">2</span>
                </div>
                <div class="cart-dropdown onhover-show-div">
                  <div class="dropdown-title">             
                    <h3>Cart</h3><router-link class="f-right" to="/ecommerce/cartView"> <i data-feather="shopping-bag"><vue-feather type="shopping-bag"></vue-feather> </i></router-link>
                  </div>
                  <ul class="custom-scrollbar">
                     <div
                  class="col-sm-12 empty-cart-cls text-center"
                  v-if="!cart.length"
                >
                  <img
                    :src="getImgUrl('ecommerce/icon-empty-cart.png')"
                    class="img-fluid mb-4"
                  />
                  <h3><strong>Your Cart is Empty</strong></h3>
                  <h4>Add something to make me happy :)</h4>
                  <router-link :to="'/ecommerce/indexProduct'" class="btn btn-primary cart-btn-transform m-t-15" >continue shopping</router-link>
                </div>
                <div >
                    <li   v-for="(item,index) in cart" :key="index">
                      <div class="media"><img class="img-fluid b-r-5 me-3 img-50" :src='getImgUrl(item.images[0])' alt="">
                        <div class="media-body">
                          <h5><router-link :to="'/ecommerce/details/'+item.sku">{{item.name}}</router-link></h5>
                          <p class="f-w-700">${{item.price }}</p>
                          <div class="cart-quantity"><span class="plus" ><i class="fa fa-plus" v-on:click="increment(item)"></i></span>
                            <input class="count" type="text" name="qty"  v-model="item.quantity"><span class="minus" ><i class="fa fa-minus" v-on:click="decrement(item)"></i></span>
                          </div>
                        </div>
                        <div class="close-circle"><a href="#"><i class="me-1" data-feather="edit"><vue-feather type="edit"></vue-feather></i></a><a href="#"><i data-feather="trash-2" @click='removeProduct(item)'><vue-feather type="trash-2"></vue-feather></i></a></div>
                      </div>
                    </li>
               
                    <li class="order-total">
                      <h4 class="mb-0 f-w-700">Total : <span>${{getAmount}}</span></h4><router-link class="btn btn-primary view-checkout" to="/ecommerce/checkout">Checkout</router-link>
                    </li> </div>
                  </ul>
                 
                </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components:{},
  data() {
    return {
      counter: 1,
    };
  },
  computed: {
    ...mapState({
      cart: (state) => state.products.cart,
      getAmount() {
        return (this.totalAmount =
          this.$store.getters["products/getTotalAmount"]);
      },
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    removeProduct: function (product) {
      this.$store.dispatch("products/removeProduct", product);
    },
    increment(product, qty = 1) {
      this.$store.dispatch("products/updateCartQuantity", {
        product: product,
        qty: qty,
      });
    },
    decrement(product, qty = -1) {
      this.$store.dispatch("products/updateCartQuantity", {
        product: product,
        qty: qty,
      });
    },
  },
};
</script>