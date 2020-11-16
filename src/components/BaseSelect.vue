<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select @change="updateValue" v-on="$listeners">
      <option
        v-for="opt in options"
        :key="opt"
        :value="opt"
        :selected="opt === value"
        >{{ opt }}</option
      >
    </select>
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin'

export default {
  mixins: [formFieldMixin],
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
