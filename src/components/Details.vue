<template>
  <div v-if="error">{{ error }}</div>
  <div class="post" v-if="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="deletePost" class="delete">Delete post</button>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute, useRouter } from "vue-router";
import { deleteDocument } from "../firebase/config";
export default {
  props: ["id"],
  components: { Spinner },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const { post, error, load } = getPost(id);
    load();
    const deletePost = async () => {
      await deleteDocument("posts", id);
      router.push("/");
    };

    return { post, error, deletePost };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
}
</style>
