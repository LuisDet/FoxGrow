<template>
  <section>
    <v-wapper>
      <layout-text
        title="Título Acerca del Instructor"
        description="We’ve got the solution: world-class training and development programs
          developed by top universities and companies. All on Coursera for
          Business."
      />
      <base-card>
        <img
          src="https://image.freepik.com/foto-gratis/instructor-gimnasio-portapapeles_107420-30227.jpg"
          alt=""
        />
        <h3 class="instructor-name">Jesus Dorian</h3>
        <p class="instructor-info">Personal Trainer Certificado, Harvard</p>
        <layout-red-social
          :instagram="'https://www.instagram.com/foxgrowacademy/'"
          :facebook="'https://www.facebook.com'"
        />
      </base-card>
    </v-wapper>
  </section>
</template>

<script>
import LayoutRedSocial from "../layout/LayoutRedSocial.vue";
export default {
  components: { LayoutRedSocial },
};
</script>

<style scoped>
section {
  padding: 6em 0;
}
img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
}
.instructor-name {
  color: var(--blue-dark);
  font-size: 1.8em;
  font-weight: 700;
}
.instructor-info {
  font-size: 1.4em;
  font-weight: 500;
}
</style>