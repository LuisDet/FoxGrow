<template>
  <footer>
    <the-wrapper>
      <fox-grow />
      <base-description class="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio animi
        odio quos quia accusantium vitae iure sequi molestiae eum officiis.
      </base-description>
      <base-description
        >All copyright reserved @ Fox Grow 2020</base-description
      >
      <base-description>Términos y Condiciones</base-description>
    </the-wrapper>
  </footer>
</template>

<script>
import BaseDescription from "../base/BaseDescription.vue";
import FoxGrow from "../icons/FoxGrow.vue";
export default {
  components: {
    FoxGrow,
    BaseDescription,
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