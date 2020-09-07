<template>
  <div class="event-list">
    <h1>Event Listing</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <router-link v-if="page != 1" :to="{ name: 'event-list', query: { page: page - 1 } }">Prev page|</router-link>
    <router-link
      v-if="page != lastPage"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
    >Next page</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions('event', ['fetchEvents'])
  },
  components: {
    EventCard
  },
  created() {
    this.fetchEvents({
      perPage: 3,
      page: this.page
    })
    // this.$store.dispatch('event/fetchEvents', {
    //   perPage: 3,
    //   page: this.page
    // })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    lastPage() {
      return Math.round(this.event.eventTotalCount / 3)
    },
    ...mapState(['event'])
  },
  watch: {
    page() {
      this.$store.dispatch('event/fetchEvents', {
        perPage: 3,
        page: this.page
      })
    }
  }
}
</script>

<style></style>
