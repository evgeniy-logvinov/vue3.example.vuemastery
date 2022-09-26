<script setup lang="ts">
  import EventCard from '../components/EventCard.vue'
  import EventCounter from "../components/EventCounter.vue";
</script>
<template>
    <EventCard></EventCard>
    <EventCounter
      :limit="20"
    >
    </EventCounter>
</template>

<style>
@media (min-width: 1024px) {
  .events {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
