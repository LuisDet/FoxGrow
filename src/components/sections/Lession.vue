<template>
  <section class="lession">
    <the-wrapper>
      <base-text mode="mb-6">
        <h2 class="title">Texto Acerca del Curso</h2>
        <p class="description">
          87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting
        </p>
      </base-text>
    </the-wrapper>
    <carrousel-list course />
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
.lession {
  background-color: var(--lighter-grey);
}
</style>