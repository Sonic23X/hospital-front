<template>
     <div class="col-sm-6 col-xl-3 xl-50 col-lg-6 box-col-6">
                <div class="card social-widget-card">
                  <div class="card-body">
                    <div class="media">
                      <div class="social-font"><img src="../../../assets/images/svg-icon/6.svg" alt=""></div>
                      <div class="media-body">
                        <h4>Linkedin</h4>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="row">
                      <div class="col text-center">
                        <h6 class="font-roboto">Posts</h6>
                        <h5 class="counter mb-0 font-roboto font-primary mt-1">
                             <number class="bold counter" ref="number1" :from="0" :to="1234" :duration="5" :delay="0" easing="Power1.easeOut" />
                        </h5>
                      </div>
                      <div class="col text-center">
                        <h6 class="font-roboto">Likes</h6>
                        <h5 class="counter mb-0 font-roboto font-primary mt-1">
                             <number class="bold counter" ref="number1" :from="0" :to="4369" :duration="5" :delay="0" easing="Power1.easeOut" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>