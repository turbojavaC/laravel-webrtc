<template>
  <form action="POST" class="create-room">
    <span class="label-name">Name the room:</span>
    <wired-input placeholder="Enter name" type="text" class="room-name" :value="roomName" @input="roomName = $event.target.value" required></wired-input>
    <wired-button class="register" type="submit" @click.prevent="createRoom">create room</wired-button>
  </form>
</template>

<script>
import { WiredButton, WiredInput } from 'wired-elements'
export default {
  data() {
    return {
      roomName: '',
    }
  },
  methods: {
    createRoom() {
      const newRoom = {
        name: this.roomName,
        author: 'Jericho',
        date: Date.now(),
      }
      this.$store.dispatch('createRoom', newRoom)
    },
  },
}
</script>

<style scoped>
.create-room {
  display: flex;
  justify-content: center;
  align-items: center;
}

.room-name {
  margin: 0 1rem;
  font: inherit;
}

.label-name {
  font-weight: bold;
}
</style>
