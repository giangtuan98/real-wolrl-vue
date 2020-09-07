<template>
  <form action>
    <label for>select a category</label>
    <select v-model="event.category">
      <option v-for="cat in categories" :key="cat">{{ cat }}</option>
    </select>

    <h3>Name</h3>
    <div class="field">
      <label for>Title</label>
      <input v-model="event.title" type="text" />
    </div>

    <div class="field">
      <label for>Description</label>
      <input v-model="event.description" type="text" />
    </div>

    <h3>Where is your event?</h3>
    <div class="field">
      <label for>Location</label>
      <input type="text" v-model="event.location" />
    </div>

    <h3>When is your event?</h3>
    <div class="field">
      <label for>Date</label>
      <datepicker v-model="event.date" />
    </div>

    <div class="field">
      <label for>Select a time</label>
      <select name id v-model="event.time">
        <option v-for="time in times" :key="time">{{ time }}</option>
      </select>
    </div>

    <input type="submit" @click="createEvent" />
  </form>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  props: ['categories', 'times', 'user'],
  data() {
    return {
      event: this.createFreshEventObject()
    }
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-list'
          })
        })
        .catch(() => {
          console.log('error')
        })
      this.event = this.createFreshEventObject
    },
    createFreshEventObject() {
      const id = Math.floor(Math.random() * 100000)

      return {
        id,
        attendees: [this.user],
        date: '',
        time: '',
        location: '',
        title: '',
        category: '',
        description: '',
        organizer: ''
      }
    }
  },
  components: {
    Datepicker
  }
}
</script>

<style lang="scss" scoped></style>
