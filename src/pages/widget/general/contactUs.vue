<template>
     <div class="col-sm-12 col-lg-6 col-xl-8 xl-50 col-md-12 box-col-6">
                <div class="card">
                  <div class="card-header">
                    <div class="media">
                      <div class="media-body">
                        <h5>Contact Us</h5>
                      </div>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul> 
                            <li> <a>
                                 Done</a></li>
                            <li> <a>
                                 Pending</a></li>
                            <li> <a>
                                 Rejected</a></li>
                            <li> <a>In Progress                   </a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="contact-form card-body">
                    <form class="theme-form">
                      <div class="form-icon"><i class="icofont icofont-envelope-open"></i></div>
                      <div class="mb-3">
                        <label for="exampleInputName">Your Name</label>
                        <input class="form-control" id="exampleInputName" type="text" placeholder="John Dio">
                      </div>
                      <div class="mb-3">
                        <label class="col-form-label" for="exampleInputEmail1">Email</label>
                        <input class="form-control" id="exampleInputEmail1" type="email" placeholder="Demo@gmail.com">
                      </div>
                      <div class="mb-3">
                        <label class="col-form-label" for="exampleInputEmail1">Message</label>
                        <textarea class="form-control textarea" rows="3" cols="50" placeholder="Your Message"></textarea>
                      </div>
                      <div class="text-sm-end">
                        <button class="btn btn-primary"  @click.prevent="_blank">SEND IT</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
</template>