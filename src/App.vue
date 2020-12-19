<template>
  <nav-bar />
  <router-view />
  <the-footer />
</template>
<script>
import NavBar from "./components/nav/NavBar.vue";
import TheFooter from "./components/sections/TheFooter.vue";
export default {
  components: {
    TheFooter,
    NavBar,
  },
  methods: {
    calcMargin() {
      const resizeValueMod = window.innerWidth - 370;
      let newOffsetSize;

      if (window.innerWidth <= 370) {
        newOffsetSize = -35;
      } else {
        newOffsetSize =
          window.innerWidth / (10.7 - 0.03613 * (resizeValueMod / 10));
      }

      this.$store.dispatch("updateOffset", { offsetValue: newOffsetSize });
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.calcMargin);
    });
  },
  created() {
    this.calcMargin();
  },
};
</script>
<style>
html {
  font-size: 62.5%;
}
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  position: relative;
}

:root {
  --orange: #fa7e42;
  --grey-dark: #6f6f73;
  --lighter-grey: #f5f5f7;
  --light-grey: #bdbec8;
  --blue-dark: #063549;
  --white: #fff;
}

.mb-2 {
  margin-bottom: 2rem;
}

.mb-4 {
  margin-bottom: 4rem;
}

.mb-6 {
  margin-bottom: 6rem;
}

.mb-8 {
  margin-bottom: 8rem;
}

.title {
  font-size: 3.6rem;
  color: var(--blue-dark);
  font-weight: bold;
  line-height: 3.5rem;
  margin-bottom: 2rem;
}
.description {
  font-size: 1.6rem;
  color: var(--grey-dark);
  line-height: 2.72rem;
  text-align: left;
}

section {
  padding: 6em 0;
}

.swiper-button-prev,
.swiper-button-next {
  margin-top: 230px !important  ;
}

.swiper-pagination-current {
  color: var(--orange);
}
div.swiper-pagination-fraction {
  font-family: inherit;
  font-size: 2.4em;
  color: var(--light-grey);
  width: 30%;
  left: 1.3em;
}
.swiper-scrollbar-drag {
  background: var(--orange) !important;
  width: 33% !important;
}
.swiper-container-horizontal > div.swiper-scrollbar {
  width: 40%;
  bottom: 2.3em;
  left: 50%;
}
</style>
