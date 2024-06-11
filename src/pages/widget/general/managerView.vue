<template>
    <div class="col-xl-4 col-md-6 box-col-6 lg-50">
                <div class="card custom-profile">
                  <div class="pb-0">
                    <div class="card-profile"><img class="user-img" src="../../../assets/images/other-images/user-profile.png" alt=""></div>
                    <div class="text-center profile-details">
                      <h4>James Martin</h4>
                      <h6>Manager</h6>
                    </div>
                    <ul class="card-social">
                      <li><a class="social-link" href="https://accounts.google.com/"  target="_blank"><img class="user-img" src="../../../assets/images/svg-icon/1.svg" alt=""></a></li>
                      <li><a class="social-link" href="https://www.facebook.com/"  target="_blank"><img class="user-img" src="../../../assets/images/svg-icon/2.svg" alt=""></a></li>
                      <li><a class="social-link" href="https://twitter.com/" target="_blank"><img class="user-img" src="../../../assets/images/svg-icon/3.svg" alt=""></a></li>
                      <li><a class="social-link" href="https://www.instagram.com/" target="_blank"><img class="user-img" src="../../../assets/images/svg-icon/4.svg" alt=""></a></li>
                      <li><a class="social-link" href="https://dashboard.rss.com/auth/sign-in/" target="_blank"><img class="user-img" src="../../../assets/images/svg-icon/5.svg" alt=""></a></li>
                    </ul>
                  </div>
                  <div class="card-footer">
                    <div class="row">
                      <div class="col-4 col-sm-4">
                        <h6 class="font-roboto">Follower</h6>
                        <h5 class="counter">
                            <number
                       class="bold counter"
                       ref="number1"
                       :from="0"
                       :to="9564"
                       :duration="5"
                       :delay="0"
                       easing="Power1.easeOut"/>
                        </h5>
                      </div>
                      <div class="col-4 col-sm-4">
                        <h6 class="font-roboto">Following</h6>
                        <h5><span class="counter">
                            <number
                       class="bold counter"
                       ref="number1"
                       :from="0"
                       :to="49"
                       :duration="5"
                       :delay="0"
                       easing="Power1.easeOut" /></span>K</h5>
                      </div>
                      <div class="col-4 col-sm-4">
                        <h6 class="font-roboto">Total Post</h6>
                        <h5><span class="counter"><number
                       class="bold counter"
                       ref="number1"
                       :from="0"
                       :to="96"
                       :duration="5"
                       :delay="0"
                       easing="Power1.easeOut" /></span>M</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>