<template>
     <div class="col-sm-12 col-xl-6 xl-100">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Secondary Color</h5><span>Add <code>.nav-secondary</code> class with nav class</span>
                  </div>
                  <div class="card-body">
                    <ul class="nav nav-pills nav-secondary" id="pills-successtab" role="tablist">
                      <li class="nav-item"><a class="nav-link active" id="pills-successhome-tab" data-bs-toggle="pill" href="#pills-successhome" role="tab" aria-controls="pills-successhome" aria-selected="true"><i class="icofont icofont-ui-home"></i>Home</a></li>
                      <li class="nav-item"><a class="nav-link" id="pills-successprofile-tab" data-bs-toggle="pill" href="#pills-successprofile" role="tab" aria-controls="pills-successprofile" aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Profile</a></li>
                      <li class="nav-item"><a class="nav-link" id="pills-successcontact-tab" data-bs-toggle="pill" href="#pills-successcontact" role="tab" aria-controls="pills-successcontact" aria-selected="false"><i class="icofont icofont-contacts"></i>Contact</a></li>
                    </ul>
                    <div class="tab-content" id="pills-successtabContent">
                      <div class="tab-pane fade show active" id="pills-successhome" role="tabpanel" aria-labelledby="pills-successhome-tab">
                        <p class="mb-0 m-t-30">{{desc}}</p>
                      </div>
                      <div class="tab-pane fade" id="pills-successprofile" role="tabpanel" aria-labelledby="pills-successprofile-tab">
                        <p class="mb-0 m-t-30">{{desc}}</p>
                      </div>
                      <div class="tab-pane fade" id="pills-successcontact" role="tabpanel" aria-labelledby="pills-successcontact-tab">
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