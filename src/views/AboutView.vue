<script setup lang="ts">
const props = defineProps<{
  showExtra: boolean | string
}>()
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>Show extra: {{ props.showExtra }}</h4>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
