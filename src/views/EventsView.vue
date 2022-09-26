<script setup lang="ts">
  import { reactive, ref } from 'vue';
import EventCard from '../components/EventCard.vue'
  import EventCounter from "../components/EventCounter.vue";

  interface ReviewItem {
    name: string;
    review: string;
    rating: number | null;
  }
  const reviews = reactive<ReviewItem[]>([]);
  function reviewSubmitted(review: ReviewItem) {
    reviews.push(review);
  }
</script>
<template>
    Reviews: {{reviews}}
    <EventCard @review-submitted="reviewSubmitted"></EventCard>
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
