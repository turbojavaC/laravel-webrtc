<template>
  <form action="POST" class="create-room">
    <span class="label-name">Name the room:</span>
    <wired-input placeholder="Enter name" type="text" class="room-name"></wired-input>
    <wired-button class="register">create room</wired-button>
  </form>
</template>

<script>
import { WiredButton, WiredInput } from 'wired-elements'
export default {}
</script>

<style scoped>
.create-room {
  display: flex;
  justify-content: center;
  align-items: center;
}

.room-name {
  margin: 0 1rem;
}

.label-name {
  font-weight: bold;
}
</style>
