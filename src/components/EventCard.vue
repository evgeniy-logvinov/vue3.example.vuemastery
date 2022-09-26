<script setup lang="ts">
import { reactive } from "vue";

interface AppInfo {
  name: string;
  slogan: string;
}
const appInfo: AppInfo = reactive({
    name: 'Counter',
    slogan: 'some slogan',
})

</script>
<template>
    <div>
      <h2>{{ appInfo.name }}</h2>
      <h2>{{ appInfo.slogan }}</h2>
    </div>
</template>
  
<style>

</style>