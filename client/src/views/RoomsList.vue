<template>
  <div class="rooms-container">
    <CreateRoom />
    <ChatRoom />
    <ChatRoom />
    <ChatRoom />
    <ChatRoom />
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
}
</script>

<style scoped>
.rooms-container {
  display: grid;
  grid-row-gap: 1rem;
  width: 70vw;
}
</style>
