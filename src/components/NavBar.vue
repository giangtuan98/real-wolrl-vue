<template>
  <div id="nav" class="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>|
    <router-link :to="{ name: 'About' }">About</router-link>|
    <router-link :to="{ name: 'User', params: { username: 'Giang' } }">User</router-link>|
    <router-link :to="{ name: 'event-list' }">Event List</router-link>|
    <router-link :to="{ name: 'event-create' }">Event Create</router-link>|
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
