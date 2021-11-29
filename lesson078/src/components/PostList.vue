<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <single-post :post="post" />
    </div>
  </div>
</template>

<script>
import { onUnmounted, onMounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup() {
    onMounted(() => console.log("Component mounted"));
    onUnmounted(() => console.log("Component unmounted"));
    onUpdated(() => console.log("Component updated"));
  },
  mounted() {
    console.log("mounted (options API)");
  }
};
</script>

<style></style>
