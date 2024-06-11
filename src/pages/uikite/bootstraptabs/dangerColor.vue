<template>
     <div class="col-sm-12 col-xl-6 xl-100">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Danger Color</h5><span>Add <code>.nav-danger</code> class with nav class</span>
                  </div>
                  <div class="card-body">
                    <ul class="nav nav-pills nav-danger" id="pills-danger-tab" role="tablist">
                      <li class="nav-item"><a class="nav-link active" id="pills-danger-home-tab" data-bs-toggle="pill" href="#pills-danger-home" role="tab" aria-controls="pills-danger-home" aria-selected="true"><i class="icofont icofont-ui-home"></i>Home</a></li>
                      <li class="nav-item"><a class="nav-link" id="pills-danger-profile-tab" data-bs-toggle="pill" href="#pills-danger-profile" role="tab" aria-controls="pills-danger-profile" aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Profile</a></li>
                      <li class="nav-item"><a class="nav-link" id="pills-danger-contact-tab" data-bs-toggle="pill" href="#pills-danger-contact" role="tab" aria-controls="pills-danger-contact" aria-selected="false"><i class="icofont icofont-contacts"></i>Contact</a></li>
                    </ul>
                    <div class="tab-content" id="pills-danger-tabContent">
                      <div class="tab-pane fade show active" id="pills-danger-home" role="tabpanel" aria-labelledby="pills-danger-home-tab">
                        <p class="mb-0 m-t-30">{{desc}}</p>
                      </div>
                      <div class="tab-pane fade" id="pills-danger-profile" role="tabpanel" aria-labelledby="pills-danger-profile-tab">
                        <p class="mb-0 m-t-30">{{desc}}</p>
                      </div>
                      <div class="tab-pane fade" id="pills-danger-contact" role="tabpanel" aria-labelledby="pills-danger-contact-tab">
                        <p class="mb-0 m-t-30">{{desc}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
export default {
     data(){
        return{
           desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
    },
    

}
</script>