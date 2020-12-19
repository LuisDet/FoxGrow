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
        <h2 class="title">Texto Acerca del Curso</h2>
        <p class="description">
          87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting
        </p>
      </base-text>
      <base-text mode="mb-6">
        <h2 class="title">Texto Acerca del Curso</h2>
        <p class="description">
          87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting
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
