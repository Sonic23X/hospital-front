<template>
    <div class="col-xl-6 xl-60 col-lg-12 col-md-7 box-col-7">
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="card">
                            <div class="card-header">
                              <h5>Pepole You May Know</h5>
                            </div>
                            <div class="card-body avatar-showcase pt-0">
                              <div class="pepole-knows">
                                <ul>
                                  <li>
                                    <div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../../../assets/images/user/2.png"><span class="d-block f-w-600">Jason Borne</span>
                                      <button class="btn btn-primary btn-xs">Add Friend</button>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../../../assets/images/user/3.png"><span class="d-block f-w-600">Anna Mull</span>
                                      <button class="btn btn-primary btn-xs">Add Friend</button>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../../../assets/images/user/3.jpg"><span class="d-block f-w-600">Dion Cast</span>
                                      <button class="btn btn-primary btn-xs">Add Friend</button>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../../../assets/images/user/4.jpg"><span class="d-block f-w-600">Karlene Lex</span>
                                      <button class="btn btn-primary btn-xs">Add Friend</button>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../../../assets/images/user/8.jpg"><span class="d-block f-w-600">Vella Chism</span>
                                      <button class="btn btn-primary btn-xs">Add Friend</button>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt="" src="../../../assets/images/user/10.jpg"><span class="d-block f-w-600">Wai Schalk</span>
                                      <button class="btn btn-primary btn-xs">Add Friend                                           </button>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hobbies/>
                        <educationView/>
                        <viewedYour/>
                        <activityLog/>
                      </div>
                    </div>
</template>

<script>
import hobbies from "./hobbiesView.vue"
import educationView from "./educationView.vue"
import viewedYour from "./viewedYour.vue"
import activityLog from "./activityLog.vue"
export default {
    components:{
        hobbies,
        educationView,
        viewedYour,
        activityLog
    }
}
</script>