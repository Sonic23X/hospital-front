<template>
     <div class="col-sm-12 col-xl-6 xl-100">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Success Color</h5><span>Add <code>.nav-success</code> class with nav class</span>
                  </div>
                  <div class="card-body">
                    <ul class="nav nav-pills nav-success" id="pills-clrtab" role="tablist">
                      <li class="nav-item"><a class="nav-link active" id="pills-clrhome-tab" data-bs-toggle="pill" href="#pills-clrhome" role="tab" aria-controls="pills-clrhome" aria-selected="true"><i class="icofont icofont-ui-home"></i>Home</a></li>
                      <li class="nav-item"><a class="nav-link" id="pills-clrprofile-tab" data-bs-toggle="pill" href="#pills-clrprofile" role="tab" aria-controls="pills-clrprofile" aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Profile</a></li>
                      <li class="nav-item"><a class="nav-link" id="pills-clrcontact-tab" data-bs-toggle="pill" href="#pills-clrcontact" role="tab" aria-controls="pills-clrcontact" aria-selected="false"><i class="icofont icofont-contacts"></i>Contact</a></li>
                    </ul>
                    <div class="tab-content" id="pills-clrtabContent">
                      <div class="tab-pane fade show active" id="pills-clrhome" role="tabpanel" aria-labelledby="pills-clrhome-tab">
                        <p class="mb-0 m-t-30">{{desc}}</p>
                      </div>
                      <div class="tab-pane fade" id="pills-clrprofile" role="tabpanel" aria-labelledby="pills-clrprofile-tab">
                        <p class="mb-0 m-t-30">{{desc}}</p>
                      </div>
                      <div class="tab-pane fade" id="pills-clrcontact" role="tabpanel" aria-labelledby="pills-clrcontact-tab">
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