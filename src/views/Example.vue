<template>
  <form action="" @submit.prevent="submit">
    <div>
      <!-- <input type="email" v-model="email" /> -->
      <input
        type="email"
        v-model="email"
        @blur="$v.email.$touch()"
        :class="{ error: $v.email.$error }"
      />
      <div v-if="$v.email.$error">
        <p v-if="!$v.email.email" class="errorMessage">
          Please enter a valid email
        </p>
        <p v-if="!$v.email.required">
          Email is required
        </p>
      </div>
      <button type="submit" :disabled="$v.$invalid">Submit</button>
      <p v-if="$v.anyError">
        Please fill out the required fields
      </p>
    </div>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: null
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log('Form submitted', this.email)
      }
    }
  }
}
</script>

<style scoped></style>
