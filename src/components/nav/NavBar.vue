<template>
  <header>
    <the-wrapper>
      <nav>
        <div class="logo">
          <fox-grow />
        </div>

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

        <div class="nav" :class="navActive">
          <button @click="toggleNavVisible">
            <i class="fas fa-times"></i>
          </button>
          <ul>
            <li class="active">Inicio</li>
            <li>Proceso</li>
            <li>Curso</li>
            <li>Blog</li>
          </ul>
        </div>
      </nav>
    </the-wrapper>
  </header>
</template>

<script>
import FoxGrow from "../icons/FoxGrow.vue";
import TheWrapper from "../layout/TheWrapper.vue";
export default {
  components: {
    FoxGrow,
    TheWrapper,
  },
  data() {
    return {
      navVisible: false,
    };
  },
  computed: {
    navActive() {
      const visible = this.navVisible ? "nav-active" : null;
      return visible;
    },
  },
  methods: {
    toggleNavVisible() {
      this.navVisible = !this.navVisible;
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--blue-dark);
  padding-top: 2em;
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
  margin-bottom: 2em;
}

button {
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
}

button:focus {
  outline: none;
}

i {
  font-size: 2.4em;
  color: var(--grey-dark);
}
.fa-bars {
  color: var(--orange);
  transition: all 0.2s ease;
}
.fa-bars:hover {
  color: var(--light-grey);
}

.nav {
  background-color: #8b9ea6;
  position: fixed;
  top: 0;
  left: -102%;
  width: 100vw;
  height: 100vh;
  /* -webkit-transition: all 0.8s cubic-bezier(0.6, 1.8, 0.7, 0.5); */
  transition: all 1s cubic-bezier(0.6, 2.3, 1, -0.1);
  opacity: 0;
  z-index: 5;
}

.nav-active {
  left: 0;
  transition: all 0.8s cubic-bezier(0.6, 1.6, 0.7, 0.5);
  opacity: 1;
}

.nav ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -3.5em;
}

.nav li {
  font-size: 1.8em;
  color: var(--white);
  margin-bottom: 0;
  position: relative;
}
.nav li.active {
  color: var(--orange);
  font-weight: 700;
}

.nav li.active::after {
  content: "";
  position: absolute;
  display: block;
  width: 1.2em;
  height: 0.2em;
  border-radius: 8px;
  background-color: var(--orange);
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
}
.nav > button {
  position: relative;
  margin: 2em;
  top: 7px;
  left: 75%;
}
.nav-active .fa-times {
  transform: rotate(-180deg);
  transition: transform 0.5s ease 0.8s;
}
.fa-times {
  color: var(--white);
}
</style>