<template>
  <base-card v-if="course">
    <img src="../../assets/maxresdefault.jpg" alt="" srcset="" />
    <h3 class="title">{{ title }}</h3>
    <p class="description">
      {{ description }}
    </p>
  </base-card>
  <base-card v-else>
    <h3 class="title">{{ title }}</h3>
    <p class="description">
      {{ description }}
    </p>
    <div class="person">
      <img src="../../assets/maxresdefault.jpg" alt="" srcset="" />
      <div class="person-info">
        <h4>{{ name }}</h4>
        <p>{{ profession }}</p>
      </div>
    </div>
  </base-card>
</template>



<script>
export default {
  props: {
    course: Boolean,
    title: String,
    description: String,
    name: String,
    profession: String,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  border-radius: 10px;
}

h3 {
  margin-top: 0;
}

.person img {
  width: 45%;
}

.person {
  display: flex;
  text-align: left;
  gap: 1em;
  font-size: 0.8em;
}
.person h4 {
  font-weight: 700;
}
</style>