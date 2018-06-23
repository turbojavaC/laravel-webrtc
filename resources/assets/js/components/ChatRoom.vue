<template>

  <wired-card elevation="3">
    <router-link :to="`/chatroom/${room.id}`" tag="div" class="chat-room" exact>
      <span>Room Name:
        <b>{{ room.name }}</b>
      </span>
      <span>Created by:
        <b>{{ room.author }}</b>
      </span>
      <span>Created at:
        <b>{{ room.created_at }}</b>
      </span>
    </router-link>
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
  cursor: pointer;
}
</style>
