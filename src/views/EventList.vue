<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EventCard from '../components/EventCard.vue'
import type { EventInfo } from '../interfaces/EventInfo'
import EventService from '@/services/EventService'

const events = ref<EventInfo[]>([])
onMounted(async () => {
  const response = await EventService.getEvents()
  events.value = response.data
})
</script>
<template>
  <div class="events">
    <h1>Events for good</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .events {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
