<template>
  <the-wrapper>
    <hero />
    <meta-list />
    <section>
      <base-text
        mode="mb-6"
        title="Texto Acerca del Curso"
        description="87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting"
      />
      <base-text
        mode="mb-6"
        title="129+"
        description="When using either the Polygonal Lasso or the Magnetic Lasso tools
          (both nested under the Lasso tool [L]), you can remove control points
          in the order in which they were put down by backtracking"
      />
      <base-text
        mode="mb-6"
        title="278+"
        description="(both nested under the Lasso tool [L]), you can remove control points
          in the order."
      />
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
  mounted() {
    this.$store.dispatch("closeMenu");
  },
};
</script>

<style scoped>
</style>
