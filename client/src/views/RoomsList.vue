<template>
  <div class="rooms-container">
    <CreateRoom />
    <ChatRoom v-for="room in rooms" :key="room.id" :room="room" />
  </div>
</template>

<script>
import ChatRoom from '@/components/ChatRoom'
import CreateRoom from '@/components/CreateRoom'
export default {
  components: {
    ChatRoom,
    CreateRoom,
  },
  data() {
    return {
      rooms: this.$store.state.roomsList,
    }
  },
}
</script>

<style scoped>
.rooms-container {
  display: grid;
  grid-row-gap: 1rem;
  width: 70vw;
}
</style>
