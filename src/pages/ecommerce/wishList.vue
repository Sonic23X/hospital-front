<template>
    <Breadcrumbs main="Ecommerce" title="Wishlist" />
    <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Wishlist</h5>
                  </div>
                  <div class="card-body whishlist-main">
                    <div class="row">
                         <div class="col-xl-2 box-col-3 col-md-4 col-sm-6" v-for="cards in whislist" :key="cards">
                        <div class="prooduct-details-box">                                 
                          <div class="media"><router-link  to="/ecommerce/details/1"><img class="align-self-center img-fluid" src="../../assets/images/ecommerce/01.jpg" alt="#"></router-link>
                            <div class="media-body">
                              <div class="product-name"><router-link  to="/ecommerce/details/1">
                                  <h6>{{cards.name}}</h6></router-link></div>
                              <ul class="rating">
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                              </ul>
                              <div class="price">Price<span>: 210$</span></div>
                              <div class="avaiabilty">
                                <div class="text-success">In stock</div>
                              </div><a class="btn btn-primary btn-xs" href="#">Move to Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  
     computed: {
    ...mapState({
      whislist:(state)=>state.ecommerce.whislist,    
    }),
   },
    
}
</script>