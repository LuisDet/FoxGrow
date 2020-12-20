<template>
  <section class="metas">
    <meta-item
      v-for="meta in metas"
      :key="meta.id"
      :title="meta.title"
      :desc="meta.description"
    >
      <i :class="meta.icon"></i>
    </meta-item>
  </section>
</template>

<script>
import MetaItem from "./MetaItem.vue";

export default {
  props: ["meta"],
  components: {
    MetaItem,
  },
  computed: {
    metas() {
      return this.$store.getters["metas/metas"];
    },
  },
};
</script>

<style scoped>
i {
  display: block;
  font-size: 7.2rem;
  color: #fa7e42;
  text-align: center;
  margin-bottom: 3rem;
}
</style>
