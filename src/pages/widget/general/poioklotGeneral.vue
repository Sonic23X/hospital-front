<template>
     <div class="box-col-12 lg-100 col-xl-4">
                <div class="row">
                  <div class="box-col-6 col-lg-6 col-xl-12">
                    <div class="card testimonial">
                      <div class="card-body">                      <img class="img-90 user-img" src="../../../assets/images/user/user-dp.png" alt="">
                        <h5>Kelvin E. Ledbetter</h5>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical Latin
                          literature from 45 BC, making it over 2000 years old.                          
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="box-col-6 col-lg-6 col-xl-12">
                    <div class="card order-widget">                    
                      <div class="card-body">
                        <div class="row heder-widget">
                          <div class="col-6"><span>New Order</span>
                            <h3 class="total-num counter"><number
                       class="total-num counter"
                       ref="number1"
                       :from="0"
                       :to="25639"
                       :duration="5"
                       :delay="0"
                       easing="Power1.easeOut" /></h3>
                          </div>
                          <div class="col-6">
                            <div class="text-end">
                              <ul>
                                <li>Profit<span class="product-stts font-primary m-l-10">8989<i class="icon-angle-up f-12 m-l-10"></i></span></li>
                                <li>Loss<span class="product-stts font-primary m-l-10">2560<i class="icon-angle-down f-12 m-l-10"></i></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="new-order">
                          <div>
                            <div class="progress sm-progress-bar">
                              <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">                                               </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>