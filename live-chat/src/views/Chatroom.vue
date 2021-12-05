<template>
  <div class="container">
    <navbar/>
    <new-chat-form/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import { watch } from "@vue/runtime-core";
import NewChatForm from "../components/NewChatForm.vue";

export default {
  components: { Navbar, NewChatForm },
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
