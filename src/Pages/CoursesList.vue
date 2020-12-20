<template>
  <div class="background">
    <h1>Cursos</h1>
    <img src="../assets/maxresdefault.jpg" alt="" />
  </div>
  <v-wapper>
    <base-description>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque voluptatem
      cum ab, ut est provident dicta consequatur totam a minus beatae ad non
      amet eius expedita doloremque veniam voluptates dolore unde fuga,
      explicabo sed! Asperiores quibusdam nulla quidem rerum, laborum saepe quo
      numquam maiores, dolores explicabo a distinctio necessitatibus
      voluptatibus!
    </base-description>
    <carrousel-item
      :title="'Introduccion'"
      :description="'En esta lección trataremos Lorem ipsum dolor sit amet, ullum qualisque periculis cum ei'"
      :course="true"
    />
  </v-wapper>
</template>

<script>
import CarrouselItem from "../components/carrousel/CarrouselItem";
export default {
  components: {
    CarrouselItem,
  },
  created() {
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
  font-size: 3.6em;
  color: var(--white);
  text-align: center;
}
</style>