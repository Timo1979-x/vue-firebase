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
/* eslint-disable */
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";

export default {
  setup() {
    const { error, signup } = useSignup();

    // refs
    const displayName = ref("Tim");
    const email = ref("ltv@gto.by");
    const password = ref("123456");
    const submit = async () => {
      signup(email.value, password.value, displayName.value);
      console.log("User signed up");
    };
    return { displayName, email, password, submit };
  },
};
</script>

<style></style>
