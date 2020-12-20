<template>
  <footer>
    <the-wrapper>
      <fox-grow />
      <p class="description mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio animi
        odio quos quia accusantium vitae iure sequi molestiae eum officiis.
      </p>
      <p class="description">All copyright reserved @ Fox Grow 2020</p>
      <p class="description">Términos y Condiciones</p>
    </the-wrapper>
  </footer>
</template>

<script>
import FoxGrow from "../icons/FoxGrow.vue";
export default {
  components: {
    FoxGrow,
  },
};
</script>

<style scoped>
footer {
  padding-top: 6em;
  background: var(--lighter-grey);
  text-align: center;
}
</style>