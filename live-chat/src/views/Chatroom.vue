<template>
  <div class="container">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import { watch } from "@vue/runtime-core";

export default {
  components: { Navbar },
  setup() {
    let router = useRouter();
    let { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>
