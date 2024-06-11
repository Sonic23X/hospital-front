<template>
  <div class="col-sm-12 box-col-12">
    <div class="card">
      <div class="card-header pb-0">
        <h5>MASONRY GALLERY</h5>
      </div>
      <div class="card-body photoswipe-pb-responsive">
        <div v-masonry id="aniimated-thumbnials" itemscope="" class="my-gallery row grid gallery">
          <figure v-masonry-tile class="col-md-3 col-sm-6 grid-item" itemprop="associatedMedia" itemscope="" :key="index"
            v-for="(item, index) in masonryItems" @click="() => showImg(index)">
            <a><img :src="require('../../../assets/images/masonry/' + item.image)" class="img-fluid" /></a>
          </figure>
        </div>
        <vue-easy-lightbox :index="index" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
        </vue-easy-lightbox>
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

    };
  },
  computed: {
    ...mapState({
      masonryItems: (state) => state.masonry.images,

    }),
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry();
    }
    this.masonryItems.forEach(item => {
      this.lightBoxImages.push(require('../../../assets/images/masonry/' + item.image))
    })
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
}
</script>