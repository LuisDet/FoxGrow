<template>
  <base-card :mode="'mb-2'">
    <slot></slot>
    <base-title centered font-size="18">{{ title }}</base-title>
    <base-description font-size="1.4" centered>
      {{ desc }}
    </base-description>
  </base-card>
</template>

<script>
export default {
  props: ["title", "desc"],
};
</script>
