<template>
  <section class="testimonial">
    <the-wrapper>
      <base-text>
        <h2 class="title">Testimonios</h2>
        <p class="description">
          87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting
        </p>
      </base-text>
    </the-wrapper>
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