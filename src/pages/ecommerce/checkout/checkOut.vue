<template>
    <div class="col-xl-6 col-sm-12 ">
              <div class="checkout-details">
                <div class="order-box">
                  <div class="title-box">
                    <div class="checkbox-title">
                      <h4>Product</h4>
                      <span>Total</span>
                    </div>
                  </div>
                  <ul class="qty" v-if="cart.length">
                    <li v-for="(item,index) in cart" :key="index">
                      {{item.name}} × {{item.quantity}}
                      <span>${{item.price * item.quantity}}</span>
                    </li>
                  </ul>
                  <ul class="qty" v-if="!cart.length">
                    <li v-if="!cart.length">There are no products in cart</li>
                  </ul>
                  <ul class="sub-total">
                    <li> Subtotal  <span class="count">${{getAmount}}</span> </li>
                     <li class="shipping-class">Shipping<div class="shopping-checkout-option">
                      <label class="d-block" for="chk-ani"><input class="checkbox_animated" id="chk-ani" type="checkbox" checked="">Option 1 </label>
                      <label class="d-block" for="chk-ani1"><input class="checkbox_animated" id="chk-ani1" type="checkbox">Option 2 </label>
                      </div></li>
                  </ul>
                  <ul class="sub-total">
                    <li> Total <span class="count">${{getAmount}}</span> </li>
                  </ul>
                  <div class="animate-chk" v-if="cart.length">
                    <div class="row">
                      <div class="col">
                       <label class="d-block" for="edo-ani">
                                <input class="radio_animated" id="edo-ani" type="radio" name="rdo-ani" checked="" data-original-title="" title="">Check Payments
                              </label>
                              <label class="d-block" for="edo-ani1">
                                <input class="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" data-original-title="" title="">Cash On Delivery
                              </label>
                              <label>
                               <input class="radio_animated" id="edo-ani" v-model="payment" :value="false" type="radio" name="rdo-ani" checked  data-original-title title />Stripe
                              </label>
                        <label class="d-block" for="edo-ani2">
                         <input class="radio_animated" id="edo-ani2"  v-model="payment" type="radio" :value="true" name="rdo-ani"  data-original-title="" title="">PayPal 
                         <img class="img-paypal" src="../../../assets/images/checkout/paypal.png" alt />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="text-right m-t-10" v-if="cart.length && !payment"> <button class="btn btn-primary"    @click="payWithStripe" type="button">Place Order</button></div>                   
                </div>
              </div>
            </div>
</template>
<script>
 import { mapState } from 'vuex';
export default {
    data() {
      return {
        submitted: false,
        payment: false,
        complete: false,
        paypal: {
          sandbox: 'YOUR SANDBOX ID'
        },
        environment : 'sandbox',
        button_style : {
          label: 'checkout',
          size:  'large',   
          shape: 'pill',       
          color: 'blue'         
        },
        amtchar:''
      };
    },
    computed: {
      ...mapState({
        cart: state => state.products.cart,
        getAmount() {
          return (this.totalAmount = this.$store.getters[
            'products/getTotalAmount'
          ]);
        }
      })
    },
    methods: {
      getamt(){
        return this.totalAmount.toString();
      },
      removeProduct: function(product) {
        this.$store.dispatch('products/removeProduct', product);
      },
      onPaymentComplete: function (data) {
        this.$store.dispatch('products/createOrder', {
          product: this.cart,
          userDetail: this.user,
          token: data.orderID,
          amt: this.totalAmount
        });
      },
    }
}
</script>