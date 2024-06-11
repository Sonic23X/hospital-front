<template>
  <div class="card">
    <div class="card-header pb-0">
      <h5>Responsive Example</h5>
    </div>
    <div class="card-body">
      <div class="owl-carousel owl-theme" id="owl-carousel-2">
        <swiper :autoHeight="true" :slidesPerView="4" :spaceBetween="30" :pagination="{
          clickable: true,
        }" :modules="modules" class="mySwiper">
          <swiper-slide v-for="item in owlcarousel" :key="item">
            <div class="item"><img :src="getImageUrl(item.img)"
                style="height:230px; width: 370.25px; margin-right: 10px; border-radius: 5px;" alt=""></div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";


import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper";
import { mapState } from "vuex";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      owlcarousel: (state) => state.owlcarousel.items,
    }),
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/slider/" + path);
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
}
</script>