<template>
  <div class="mb-6">
    <base-title>{{ title }}</base-title>
    <base-description>{{ description }}</base-description>
  </div>
</template>
<script>
export default {
  props: ["mode", "title", "description"],
};
</script>
