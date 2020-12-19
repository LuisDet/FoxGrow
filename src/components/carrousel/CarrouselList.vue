<template>
  <swiper
    :slides-per-view="'auto'"
    :space-between="20"
    centered-slides
    :pagination="{ type: 'fraction', clickable: true }"
    :scrollbar="{}"
  >
    <swiper-slide>
      <carrousel-item
        :title="'Introduccion'"
        :description="'Hola'"
        :name="'Jose'"
        :profession="'Naturista'"
        :course="course"
      />
    </swiper-slide>
    <swiper-slide>
      <carrousel-item
        :title="'Introduccion'"
        :description="'Hola'"
        :name="'Jose'"
        :profession="'Naturista'"
        :course="course"
      />
    </swiper-slide>
    <swiper-slide>
      <carrousel-item
        :title="'Introduccion'"
        :description="'Hola'"
        :name="'Jose'"
        :profession="'Naturista'"
        :course="course"
      />
    </swiper-slide>
    <swiper-slide>
      <carrousel-item
        :title="'Introduccion'"
        :description="'Hola'"
        :name="'Jose'"
        :profession="'Naturista'"
        :course="course"
      />
    </swiper-slide>
    ...
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import CarrouselItem from "./CarrouselItem";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

export default {
  props: {
    course: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: { Swiper, SwiperSlide, CarrouselItem },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  padding-bottom: 70px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  width: 80%;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>