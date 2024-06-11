<template>
  <div class="col-xl-9 col-md-12 box-col-9 xl-70">
    <div class="file-content">
      <div class="card">
        <div class="card-header">
          <div class="media">
            <form class="form-inline" action="#" method="get">
              <div class="form-group d-flex mb-0"> <i class="fa fa-search"></i>
                <input class="form-control-plaintext" type="text" placeholder="Search...">
              </div>
            </form>
            <div class="media-body text-end d-flex justify-content-end">
              <form class="d-inline-flex" action="#" method="POST" enctype="multipart/form-data" name="myForm">
                <div class="btn btn-primary d-flex align-items-center"><vue-feather type="plus-square"></vue-feather>Add
                  New</div>

              </form>
              <div class="btn btn-outline-primary ms-2 d-flex align-items-center"><vue-feather
                  type="upload"></vue-feather> Upload </div>
            </div>
          </div>
        </div>
        <div class="card-body file-manager">
          <h4>All Files</h4>
          <h6>Recently opened files</h6>
          <ul class="files">
            <li class="file-box">
              <div class="file-top"> <i class="fa fa-file-image-o txt-primary"></i><i
                  class="fa fa-ellipsis-v f-14 ellips"></i></div>
              <div class="file-bottom">
                <h6>Logo.psd </h6>
                <p class="mb-1">2.0 MB</p>
                <p> <b>last open : </b>1 hour ago</p>
              </div>
            </li>
            <li class="file-box">
              <div class="file-top"> <i class="fa fa-file-archive-o txt-secondary"></i><i
                  class="fa fa-ellipsis-v f-14 ellips"></i></div>
              <div class="file-bottom">
                <h6>Project.zip </h6>
                <p class="mb-1">1.90 GB</p>
                <p> <b>last open : </b>1 hour ago</p>
              </div>
            </li>
            <li class="file-box">
              <div class="file-top"> <i class="fa fa-file-excel-o txt-success"></i><i
                  class="fa fa-ellipsis-v f-14 ellips"></i></div>
              <div class="file-bottom">
                <h6>Backend.xls</h6>
                <p class="mb-1">2.00 GB</p>
                <p> <b>last open : </b>1 hour ago</p>
              </div>
            </li>
            <li class="file-box">
              <div class="file-top"> <i class="fa fa-file-text-o txt-info"></i><i
                  class="fa fa-ellipsis-v f-14 ellips"></i></div>
              <div class="file-bottom">
                <h6>requirements.txt </h6>
                <p class="mb-1">0.90 KB</p>
                <p> <b>last open : </b>1 hour ago</p>
              </div>
            </li>
          </ul>
          <foldersView />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import foldersView from "./foldersView.vue"
export default {
    components:{
        foldersView 
    }
}
</script>