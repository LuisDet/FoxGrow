<template>
  <div class="nav" :class="navActive">
    <button @click="closeMenu">
      <i class="fas fa-times"></i>
    </button>
    <ul>
      <li>
        <router-link to="/"> Inicio </router-link>
      </li>
      <li>
        <router-link to="/cursos"> Cursos </router-link>
      </li>
      <li>
        <router-link to="/nosotros"> Nosotros </router-link>
      </li>
      <li>
        <router-link to="preguntas-frecuentes"> FAQs </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    navActive() {
      const visible = this.$store.getters["isVisible"] ? "nav-active" : null;
      return visible;
    },
  },
  methods: {
    closeMenu() {
      this.$store.dispatch("closeMenu");
      console.log(this.$route.path);
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0;
}

li {
  padding: 1.5em;
}

i {
  font-size: 1.8em;
  color: var(--light-grey);
}

button {
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  position: relative;
}
.nav {
  background-color: #8b9ea6;
  position: fixed;
  top: 0;
  left: -102%;
  width: 100vw;
  height: 100vh;
  transition: all 0.3s cubic-bezier(0.2, 0, 1, 0.715);
  opacity: 0;
  z-index: 5;
}

.nav-active {
  left: 0;
  transition: all 0.5s cubic-bezier(0.6, 1.6, 0.7, 0.5);
  opacity: 1;
}

.nav ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -3.5em;
}

.nav a {
  font-size: 1.8em;
  display: block;
  color: var(--white);
  padding: 1em;
  text-decoration: none;
}
li .router-link-active {
  color: var(--orange);
  font-weight: 700;
  position: relative;
}

.router-link-active::after {
  content: "";
  position: absolute;
  display: block;
  width: 1.2em;
  height: 0.2em;
  border-radius: 8px;
  background-color: var(--orange);
  top: 100%;
  left: 48%;
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