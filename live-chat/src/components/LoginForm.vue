<template>
  <form @submit.prevent="login">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    // refs
    const email = ref("");
    const password = ref("");
    const login = () => {
      console.log(email.value, password.value);
    };
    return { email, password, login };
  },
};
</script>

<style></style>
