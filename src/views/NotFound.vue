<template>
  <div>
    <h1>Oops!</h1>
    <h3>{{ resource }} Not found</h3>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
