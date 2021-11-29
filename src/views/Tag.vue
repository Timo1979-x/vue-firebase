<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <post-list :posts="filtered" />
      <tag-cloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../composables/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();

    const filtered = computed(() =>
      posts.value.filter((post) => post.tags.includes(route.params.tag))
    );
    return { posts, filtered, error };
  },
  components: { PostList, Spinner, TagCloud },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
