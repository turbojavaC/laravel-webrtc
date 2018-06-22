<template>
  <wired-card elevation="3">
    <div class="chat-room">
      <span>Room Name:
        <b>{{ room.name }}</b>
      </span>
      <span>Created By:
        <b>{{ room.author }}</b>
      </span>
      <span>Created On:
        <b>{{ new Intl.DateTimeFormat('fr-FR').format(room.date) }}</b>
      </span>
    </div>
  </wired-card>
</template>

<script>
import { WiredCard } from 'wired-card'
export default {
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.chat-room {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
