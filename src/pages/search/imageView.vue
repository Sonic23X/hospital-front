<template>
  <div class="info-block m-t-30">
    <p class="pb-4 col-sm-12 digits">About 12,120 results (0.50 seconds)</p>
    <div class="my-gallery row gallery-with-description" id="aniimated-thumbnials" itemscope="">
      <figure v-for="(src, index) in search" :key="index" class="col-xl-3 col-sm-6" @click="() => showImg(index)">
        <a>
          <img :src="require('../../assets/images/big-lightgallry/' + src.image)" alt="Image description"
            class="img-fluid" />
          <div class="caption description">
            <h4> {{ src.title }}</h4>
            <p>{{ src.descr }}</p>
          </div>
        </a>
      </figure>
    </div>
    <vue-easy-lightbox :index="index" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
    </vue-easy-lightbox>

  </div>
  <paginationView />
</template>
<script>
import { mapState } from "vuex";
import paginationView from "./paginationView.vue"
export default {
  components: {
    paginationView
  },
  data() {
    return {
      lightBoxImages: [],
      visible: false,
      index: 0,

    }
  },
  computed: {
    ...mapState({
      search: (state) => state.masonry.search,

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
    this.search.forEach(item => {
      this.lightBoxImages.push(require('@/assets/images/big-lightgallry/' + item.image))
    })
  }
};
</script>
