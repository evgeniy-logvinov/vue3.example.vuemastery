<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
<script setup lang="ts">
import type { EventInfo } from '@/interfaces/EventInfo'
import EventService from '@/services/EventService.js'
import { onMounted, ref } from 'vue'

const props = defineProps<{ id: number | string }>()
const event = ref<EventInfo | null>()
onMounted(async () => {
  const response = await EventService.getEvent<EventInfo>(Number(props.id))
  event.value = response.data
})
</script>
