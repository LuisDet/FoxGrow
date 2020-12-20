<template>
  <base-card v-if="course">
    <img src="../../assets/maxresdefault.jpg" alt="" srcset="" />
    <h3>{{ title }}</h3>
    <p>
      {{ description }}
    </p>
  </base-card>
  <base-card v-else>
    <h3>{{ title }}</h3>
    <p>
      {{ description }}
    </p>
    <div class="person">
      <img
        src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
        alt=""
        srcset=""
      />
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
  margin-bottom: 0.7em;
}

h3 {
  margin-top: 0;
  text-align: left;
  font-size: 1.4em;
  font-weight: 700;
  color: var(--blue-dark);
  margin-bottom: 0.7em;
}

p {
  margin-top: 0;
  text-align: left;
  font-size: 0.8em;
  font-weight: 400;
  color: var(--grey-dark);
  margin-bottom: 2em;
}

.person img {
  max-width: 64px;
  max-height: 64px;
  margin: 0;
}

.person {
  display: flex;
  text-align: left;
  gap: 1em;
  font-size: 0.8em;
  align-items: center;
}
.person h4 {
  font-size: 1.2em;
  font-weight: 700;
  margin: 0;
}

.person p {
  margin: 0;
}
</style>