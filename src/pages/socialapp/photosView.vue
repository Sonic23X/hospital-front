<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="my-gallery card-body row gallery-with-description" itemscope="">
          <figure v-for="(src, index) in photo" :key="index" class="col-xl-3 col-sm-6 " @click="() => showImg(index)">
            <a>
              <img :src="require('../../assets/images/lightgallry/' + src.image)" alt="Image description"
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
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      lightBoxImages: [],
      lightBoxTitle: [],
      visible: false,
      index: 0,

    }
  },
  computed: {
    ...mapState({
      photo: (state) => state.masonry.photo,

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
    this.photo.forEach(item => {
      this.lightBoxImages.push(require('@/assets/images/lightgallry/' + item.image))
      this.lightBoxTitle.push(item.title)
    })
  }
};
</script>
