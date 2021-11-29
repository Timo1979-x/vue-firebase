<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <post-list :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
export default {
  name: "Home",
  components: { PostList, Spinner },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
