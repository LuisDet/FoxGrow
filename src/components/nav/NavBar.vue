<template>
  <header>
    <the-wrapper>
      <nav>
        <router-link to="/" class="logo">
          <fox-grow :width="'30'" :height="'30'" />
        </router-link>
        <div class="menu">
          <ul>
            <li><i class="fas fa-search"></i></li>
            <li><i class="fas fa-shopping-cart"></i></li>
            <li>
              <button @click="toggleNavVisible">
                <i class="fas fa-bars"></i>
              </button>
            </li>
          </ul>
        </div>
        <mobil-menu :navVisible="navVisible" />
      </nav>
    </the-wrapper>
  </header>
</template>

<script>
import FoxGrow from "../icons/FoxGrow.vue";
import TheWrapper from "../layout/TheWrapper.vue";
import MobilMenu from "./MobilMenu.vue";
export default {
  components: {
    FoxGrow,
    TheWrapper,
    MobilMenu,
  },
  data() {
    return {
      navVisible: false,
    };
  },
  methods: {
    toggleNavVisible() {
      this.$store.dispatch("toggleNavVisible");
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--blue-dark);
  position: sticky;
  top: -1px;
  z-index: 10;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
ul {
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0;
}

li {
  padding: 1.5em;
}

button,
.router-link-active {
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  position: relative;
}

button:focus,
.router-link-active:focus {
  outline: none;
}
button:focus::before,
.router-link-active:focus::before {
  content: "";
  position: absolute;
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.3);
  top: -25%;
  left: -33%;
  z-index: -1;
  border-radius: 50%;
}

i {
  font-size: 1.8em;
  color: var(--light-grey);
}
.fa-bars {
  color: var(--orange);
  transition: all 0.2s ease;
}
.fa-bars:hover {
  color: var(--light-grey);
}
</style>