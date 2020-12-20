<template>
  <section>
    <the-wrapper>
      <base-text
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
        <social-media
          :instagram="'https://www.instagram.com/foxgrowacademy/'"
          :facebook="'https://www.facebook.com'"
        />
      </base-card>
    </the-wrapper>
  </section>
</template>

<script>
import SocialMedia from "../layout/SocialMedia.vue";
import TheWrapper from "../layout/TheWrapper.vue";
export default {
  components: { TheWrapper, SocialMedia },
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