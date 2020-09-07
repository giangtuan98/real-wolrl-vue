<template>
  <div>
    <EventCreate
      :categories="categories"
      :times="times"
      :user="user"
      :eventTotalCount="eventTotalCount"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCreate from '@/components/EventCreate.vue'

export default {
  components: {
    EventCreate
  },
  computed: {
    ...mapState(['categories', 'times', 'user', 'eventTotalCount'])
  }
}
</script>

<style></style>
