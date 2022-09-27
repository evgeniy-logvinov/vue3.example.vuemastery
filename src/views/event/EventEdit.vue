<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'EventRegister', params: { id } }"
        >Register</router-link
      >
      |
      <router-link :to="{ name: 'EventEdit', params: { id } }"
        >Edit</router-link
      >
    </div>
    <p>Edit the event here</p>
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
