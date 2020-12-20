<template>
  <section class="testimonial">
    <v-wapper>
      <layout-text
        title="Testimonios"
        description="87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting"
      />
    </v-wapper>
    <carrousel-list />
  </section>
</template>

<script>
import CarrouselList from "../carrousel/CarrouselList";
export default {
  components: {
    CarrouselList,
  },
};
</script>

<style scoped>
</style>