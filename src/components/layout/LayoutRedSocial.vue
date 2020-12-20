<template>
  <div class="social-content">
    <a v-if="instagram" :href="instagram">
      <i :class="mode" class="fab fa-instagram"></i>
    </a>
    <a v-if="facebook" :href="facebook">
      <i :class="mode" class="fab fa-facebook-f"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    circle: {
      type: Boolean,
      default: false,
    },
    instagram: {
      type: String,
      default: null,
    },
    facebook: {
      type: String,
      default: null,
    },
  },
  computed: {
    mode() {
      let classes;

      if (this.circle) {
        classes = "circle";
      }

      return classes;
    },
  },
};
</script>
<style scoped>
.social-content {
  display: flex;
  align-items: center;
}
i {
  font-size: 2rem;
  color: var(--orange);
  padding: 1rem;
  text-align: center;
}

.circle {
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background-color: rgba(250, 126, 66, 0.2);
}
</style>