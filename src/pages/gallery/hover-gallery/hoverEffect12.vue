<template>
    <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Hover Effect <span class="digits">12</span></h5>
                  </div>
                  <div class="card-body">
                    <div class="row my-gallery gallery" id="aniimated-thumbnials" itemscope="" data-pswp-uid="1">
                      <figure class="col-md-3 col-6 img-hover hover-12"  
                              v-for="(n,index) in gallery1"  :key="index" 
                               @click="() => showImg(index)"
                              itemprop="associatedMedia" itemscope="">
                              <a>
                          <div >
                              <img :src="getpath(n)" itemprop="thumbnail" alt="Image description" class="img-fluid"></div>
                              </a>
                      </figure>
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
            gallery1: [
          '08.jpg',
          '09.jpg',
          '010.jpg',
          '011.jpg'
        ],
        }
    },
     methods: {
       getpath(filename) {
        return require('@/assets/images/lightgallry/' + filename);
      },
       showImg (index) {
        this.index = index
        this.visible = true
      },
      handleHide () {
        this.visible = false
      },
    },

}
</script>