<template>
     <div class="col-xl-6 xl-100 box-col-12">
                <div class="widget-joins card widget-arrow">
                  <div class="card-header pb-0">
                    <div class="media">
                      <div class="media-body">
                        <h5>Sale details</h5>
                      </div>
                      <div class="icon-box onhover-dropdown"><vue-feather type="more-horizontal"></vue-feather>
                        <div class="icon-box-show onhover-show-div">
                          <ul> 
                            <li> <a> Done</a></li>
                            <li> <a> Pending</a></li>
                            <li> <a> Rejected</a></li>
                            <li> <a>In Progress</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row gy-4">
                      <div class="col-sm-6">
                        <div class="widget-card">
                          <div class="media align-self-center">
                            <div class="widget-icon bg-light-danger"><i class="icofont icofont-arrow-down font-danger"></i></div>
                            <div class="media-body">
                              <h6>Today</h6>
                              <h5>$<span class="counter"><number
                                 class="bold transition"
                                 ref="number1"
                                :from="0"
                                :to="25698"
                                :duration="5"
                                :delay="0"
                                easing="Power1.easeOut"
                            /></span><span class="font-danger">-36%($2658)</span></h5><span class="font-roboto"> Than yesterday</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="widget-card">
                          <div class="media align-self-center">
                            <div class="widget-icon bg-light-danger"><i class="icofont icofont-arrow-down font-danger"></i></div>
                            <div class="media-body">
                              <h6>Month</h6>
                              <h5>$<span class="counter">
                                  <number
                                 class="bold transition"
                                 ref="number1"
                                :from="0"
                                :to="6954"
                                :duration="5"
                                :delay="0"
                                easing="Power1.easeOut"
                                 /></span><span class="font-danger">-15%($369) </span></h5><span class="font-roboto"> Than last month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="widget-card">
                          <div class="media align-self-center">
                            <div class="widget-icon bg-light-success"><i class="icofont icofont-arrow-up font-success"></i></div>
                            <div class="media-body">
                              <h6>Week</h6>
                              <h5>$63147<span class="font-success">+65%($69)</span></h5><span class="font-roboto"> Than yesterday</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="widget-card">
                          <div class="media align-self-center">
                            <div class="widget-icon bg-light-success"><i class="icofont icofont-arrow-up font-success"></i></div>
                            <div class="media-body">
                              <h6>Year</h6>
                              <h5>$963198<span class="font-success">+90%($3654)</span></h5><span class="font-roboto">Than yesterday          </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>