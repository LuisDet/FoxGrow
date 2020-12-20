<template>
  <footer>
    <v-wapper>
      <fox-grow />
      <base-description class="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio animi
        odio quos quia accusantium vitae iure sequi molestiae eum officiis.
      </base-description>
      <base-description
        >All copyright reserved @ Fox Grow 2020</base-description
      >
      <base-description>Términos y Condiciones</base-description>
    </v-wapper>
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