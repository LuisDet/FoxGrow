<template>
  <the-wrapper>
    <hero />
    <meta-list />
    <section>
      <base-text mode="mb-6">
        <h2 class="title">Texto Acerca del Curso</h2>
        <p class="description">
          87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting
        </p>
      </base-text>
      <base-text mode="mb-6">
        <h2 class="title">129+</h2>
        <p class="description">
          When using either the Polygonal Lasso or the Magnetic Lasso tools
          (both nested under the Lasso tool [L]), you can remove control points
          in the order in which they were put down by backtracking
        </p>
      </base-text>
      <base-text mode="mb-6">
        <h2 class="title">278+</h2>
        <p class="description">
          (both nested under the Lasso tool [L]), you can remove control points
          in the order.
        </p>
      </base-text>
    </section>
  </the-wrapper>
  <lession />
  <instructor />
  <ad-item />
  <testimonial />
</template>
<script>
import MetaList from "../components/metas/MetaList.vue";
import Lession from "../components/sections/Lession.vue";
import Instructor from "../components/sections/Instructor.vue";
import AdItem from "../components/ads/AdItem.vue";
import Testimonial from "../components/sections/Testimonial";
import Hero from "../components/sections/Hero";

export default {
  components: {
    MetaList,
    Lession,
    Instructor,
    AdItem,
    Testimonial,
    Hero,
  },
  methods: {},
  Instructor,
};
</script>

<style scoped>
</style>
