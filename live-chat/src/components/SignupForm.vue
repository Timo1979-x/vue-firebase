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
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";

export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    // refs
    const displayName = ref("Tim");
    const email = ref("ltv@gto.by");
    const password = ref("123456");
    const submit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("signup");
      }
    };
    return { displayName, email, password, submit, error };
  },
};
</script>
