<template>
  <v-wapper>
    <the-hero />
    <meta-list />
    <section>
      <layout-text
        mode="mb-6"
        title="Texto Acerca del Curso"
        description="87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting"
      />
      <layout-text
        mode="mb-6"
        title="129+"
        description="When using either the Polygonal Lasso or the Magnetic Lasso tools
          (both nested under the Lasso tool [L]), you can remove control points
          in the order in which they were put down by backtracking"
      />
      <layout-text
        mode="mb-6"
        title="278+"
        description="(both nested under the Lasso tool [L]), you can remove control points
          in the order."
      />
    </section>
  </v-wapper>
  <section-lession />
  <section-instructor />
  <ad-item />
  <section-testimonial />
</template>
<script>
import MetaList from "../components/metas/MetaList.vue";
import SectionLession from "../components/sections/SectionLession.vue";
import SectionInstructor from "../components/sections/SectionInstructor.vue";
import AdItem from "../components/ads/AdItem.vue";
import SectionTestimonial from "../components/sections/SectionTestimonial";
import TheHero from "../components/header/TheHero";

export default {
  components: {
    MetaList,
    SectionLession,
    SectionInstructor,
    AdItem,
    SectionTestimonial,
    TheHero,
  },
  mounted() {
    this.$store.dispatch("closeMenu");
  },
};
</script>

<style scoped>
</style>
