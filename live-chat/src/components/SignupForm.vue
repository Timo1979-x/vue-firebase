<template>
  <form @submit.prevent="submit">
    <input
      type="text"
      required
      placeholder="Display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const submit = () => {
      console.log(displayName.value, email.value, password.value);
    };
    return { displayName, email, password, submit };
  },
};
</script>

<style></style>
