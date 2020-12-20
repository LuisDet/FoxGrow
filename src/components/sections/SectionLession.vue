<template>
  <section class="lession">
    <v-wapper>
      <layout-text
        mode="mb-6"
        title="Lecciones"
        description="
          We’ve got the solution: world-class training and development programs
          developed by top universities and companies. All on Coursera for
          Business."
      />
    </v-wapper>
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