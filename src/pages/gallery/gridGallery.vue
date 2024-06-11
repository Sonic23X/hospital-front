<template>
  <Breadcrumbs main="Gallery" title="Gallery" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header pb-0">
            <h5>IMAGE GALLERY</h5>
          </div>
          <div class="my-gallery card-body row" itemscope=" ">
            <figure v-for="(src, index) in masonryItems" :key="index" class="col-xl-3 col-md-4 xl-33 "
              @click="() => showImg(index)">
              <img :src="require('../../assets/images/lightgallry/' + src.image)" alt="Image description"
                class="img-thumbnail" />
              <div class="caption">
                <h4> {{ src.title }}</h4>
                <p>{{ src.descr }}</p>
              </div>
            </figure>
          </div>
          <vue-easy-lightbox :index="index" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
          </vue-easy-lightbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      lightBoxImages: [],
      visible: false,
      index: 0,

    }
  },
  computed: {
    ...mapState({
      masonryItems: (state) => state.masonry.imags,

    }),
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
  mounted() {
    this.masonryItems.forEach(item => {
      this.lightBoxImages.push(require('@/assets/images/lightgallry/' + item.image))
    })
  }
}
</script>