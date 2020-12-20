<template>
  <div class="hero" :style="newMargin">
    <img src="../../assets/Hero-Image.jpg" alt="" />
    <div class="content">
      <layout-text>
        <h2 class="title">Texto Llamativo</h2>
        <p class="description">87% of people learning</p>
      </layout-text>
      <div class="button-group">
        <base-button link to="/nosotros" :mode="'outline'">
          Unirme
        </base-button>
        <base-button link to="/nosotros"> Aprende Mas </base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    newMargin() {
      return `margin: 0 -${this.$store.getters["offset"]}px`;
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}
img {
  height: 60em;
}
.content {
  position: absolute;
  z-index: 2;
  top: 65%;
  left: 3.5em;
  right: 3.5em;
}
.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: -3em;
}
</style>