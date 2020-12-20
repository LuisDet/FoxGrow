<template>
  <div class="background">
    <h1>Preguntas Frecuentas</h1>
    <img src="../assets/maxresdefault.jpg" alt="" />
  </div>
  <v-wapper>
    <section>
      <details open>
        <summary><i class="fas fa-angle-right"></i>Pregunta 1</summary>
        <base-description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          illo. Perspiciatis necessitatibus harum aperiam, temporibus veniam non
          voluptatem quas minima eum adipisci enim neque iure rerum. Dolorem qui
          assumenda nostrum.
        </base-description>
      </details>
      <details>
        <summary><i class="fas fa-angle-right"></i>Pregunta 2</summary>
        <base-description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          illo. Perspiciatis necessitatibus harum aperiam, temporibus veniam non
          voluptatem quas minima eum adipisci enim neque iure rerum. Dolorem qui
          assumenda nostrum.
        </base-description>
      </details>
      <details>
        <summary><i class="fas fa-angle-right"></i>Pregunta 3</summary>
        <base-description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          illo. Perspiciatis necessitatibus harum aperiam, temporibus veniam non
          voluptatem quas minima eum adipisci enim neque iure rerum. Dolorem qui
          assumenda nostrum.
        </base-description>
      </details>
      <details>
        <summary><i class="fas fa-angle-right"></i>Pregunta 4</summary>
        <base-description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          illo. Perspiciatis necessitatibus harum aperiam, temporibus veniam non
          voluptatem quas minima eum adipisci enim neque iure rerum. Dolorem qui
          assumenda nostrum.
        </base-description>
      </details>
      <details>
        <summary><i class="fas fa-angle-right"></i>Pregunta 5</summary>
        <base-description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          illo. Perspiciatis necessitatibus harum aperiam, temporibus veniam non
          voluptatem quas minima eum adipisci enim neque iure rerum. Dolorem qui
          assumenda nostrum.
        </base-description>
      </details>
      <details>
        <summary><i class="fas fa-angle-right"></i>Pregunta 6</summary>
        <base-description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          illo. Perspiciatis necessitatibus harum aperiam, temporibus veniam non
          voluptatem quas minima eum adipisci enim neque iure rerum. Dolorem qui
          assumenda nostrum.
        </base-description>
      </details>
    </section>
  </v-wapper>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("closeMenu");
  },
};
</script>

<style scoped>
.background {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background img {
  width: 100%;
}

.background h1 {
  position: absolute;
  font-size: 3.6rem;
  color: var(--white);
  text-align: center;
}

details[open] i {
  transform: rotate(90deg);
  transition: all 0.5s ease;
}
details {
  margin: 3rem;
}
summary {
  display: flex;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--blue-dark);
  align-items: center;
  padding: 0.3rem 0 0.3rem 0;
  cursor: pointer;
}
summary::-webkit-details-marker {
  display: none;
}
summary:focus {
  outline: none;
}
summary:focus-visible {
  box-shadow: 0 0 1px 2px var(--blue-dark);
  border-radius: 5px;
}

i {
  margin-right: 0.5rem;
  font-size: 1.6rem;
  color: var(--orange);
  transition: all 0.5s ease;
}
</style>