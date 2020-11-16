<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        v-model="event.category"
        :options="categories"
        label="Select a category"
        class="field"
        @blur="$v.event.category.$touch()"
        :class="{ error: $v.event.category.$error }"
      ></BaseSelect>
      <template v-if="$v.event.category.$error">
        <p v-if="!$v.event.category.required">Category is required</p>
      </template>

      <h3>Name & describe your event</h3>
      <BaseInput
        label="Title"
        v-model="event.title"
        type="text"
        placeholder="Title"
        class="field"
        @blur="$v.event.title.$touch()"
        :class="{ error: $v.event.title.$error }"
      ></BaseInput>
      <template v-if="$v.event.title.$error">
        <p v-if="!$v.event.title.required">Title is required</p>
      </template>

      <BaseInput
        label="Description"
        v-model="event.description"
        type="text"
        placeholder="Add a description"
        class="field"
        @blur="$v.event.description.$touch()"
        :class="{ error: $v.event.description.$error }"
      ></BaseInput>
      <template v-if="$v.event.description.$error">
        <p v-if="!$v.event.description.required">Description is required</p>
      </template>

      <h3>Where is your event?</h3>
      <BaseInput
        label="Location"
        v-model="event.location"
        type="text"
        placeholder="Add a location"
        class="field"
        @blur="$v.event.location.$touch()"
        :class="{ error: $v.event.location.$error }"
      ></BaseInput>
      <template v-if="$v.event.location.$error">
        <p v-if="!$v.event.location.required">Location is required</p>
      </template>
      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker
          v-model="event.date"
          placeholder="Select a date"
          @opened="$v.event.date.$touch()"
        />
      </div>
      <template v-if="$v.event.date.$error">
        <p v-if="!$v.event.date.required">Date is required</p>
      </template>

      <BaseSelect
        v-model="event.time"
        :options="times"
        label="Select a time"
        class="field"
        :class="{ error: $v.event.time.$error }"
        @blur="$v.event.time.$touch()"
      ></BaseSelect>
      <template v-if="$v.event.time.$error">
        <p v-if="!$v.event.time.required">Time is required</p>
      </template>

      <BaseButton
        type="submit"
        buttonClass="-fill-gradient"
        :disabled="$v.$anyError"
      >
        Submit
      </BaseButton>
      <p v-if="$v.$anyError">
        Please fill required field
      </p>
      <!-- <input type="submit" class="button -fill-gradient" value="Submit" /> -->
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import NProgress from 'nprogress'
import BaseInput from '@/components/BaseInput'
import BaseSelect from '@/components/BaseSelect'
import BaseButton from '@/components/BaseButton'

import { required } from 'vuelidate/lib/validators'

export default {
  components: {
    Datepicker,
    BaseInput,
    BaseButton,
    BaseSelect
  },
  validations: {
    event: {
      category: { required },
      title: { required },
      description: { required },
      time: { required },
      location: { required },
      date: { required }
    }
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  methods: {
    createEvent() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        NProgress.start()
        this.$store
          .dispatch('event/createEvent', this.event)
          .then(() => {
            this.$router.push({
              name: 'event-show',
              params: { id: this.event.id }
            })
            this.event = this.createFreshEventObject()
          })
          .catch(() => {})
      }
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
