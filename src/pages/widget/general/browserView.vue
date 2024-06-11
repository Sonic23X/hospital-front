<template>
    <div class="col-sm-12">
                <div class="card browser-table">
                  <div class="card-header">
                    <div class="media">
                      <div class="media-body">
                        <h5>Usage in Browser</h5>
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
                            <li> <a>In Progress</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive mb-0">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Browser</th>
                            <th>Name</th>
                            <th>Daily</th>
                            <th>Weekly</th>
                            <th>Monthly</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><img src="../../../assets/images/dashboard/chrome.png" alt=""></td>
                            <td>Google Chrome</td>
                            <td>28%</td>
                            <td>76%</td>
                            <td>36%</td>
                          </tr>
                          <tr>
                            <td><img src="../../../assets/images/dashboard/firefox.png" alt=""></td>
                            <td>Mozilla Firefox</td>
                            <td>28%</td>
                            <td>76%</td>
                            <td>36%</td>
                          </tr>
                          <tr>
                            <td><img src="../../../assets/images/dashboard/safari.png" alt=""></td>
                            <td>Safari (web browser)</td>
                            <td>28%</td>
                            <td>76%</td>
                            <td>36%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
</template>