<template>
  <wired-card>
    <div class="log-container">
      <wired-input placeholder="Enter email" type="email" class="email"></wired-input>
      <wired-input placeholder="Enter password" type="password"></wired-input>
      <wired-input placeholder="Enter password" type="password" v-if="register"></wired-input>
      <wired-button class="register" v-if="register">register</wired-button>
      <wired-button class="register" v-else>login</wired-button>
      <span class="alternative" @click="register = !register">Or {{ register ? 'register' : 'login'}}</span>
    </div>
  </wired-card>
</template>

<script>
export default {
  data() {
    return {
      register: true,
    }
  },
}
</script>

<style scoped>
.log-container {
  margin: 2rem;
  display: flex;
  flex-direction: column;
}

.email {
  margin-bottom: 0.5rem;
}

.register {
  align-self: center;
  margin: 1rem 0 0.5rem 0;
}

.alternative {
  text-align: center;
  cursor: pointer;
}

.alternative:hover {
  text-decoration: underline;
}
</style>
