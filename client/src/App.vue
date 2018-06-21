<template>
  <div class="my-container">
    <router-view></router-view>
  </div>
</template>

<script>
import { WiredButton, WiredInput } from 'wired-elements'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    register() {},
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700');

body {
  font-family: 'Amatic SC', cursive;
}

.my-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
