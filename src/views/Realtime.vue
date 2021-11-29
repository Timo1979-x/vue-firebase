<template>
  <h1>Realtime data</h1>
  <div v-for="p in posts" :key="p.id">
    <div>{{ p.title }}</div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { setSnapshotListener } from "../firebase/config";
export default {
  setup() {
    const posts = ref([]);
    const snapshotListener = async (snap) => {
      let docs = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log("documents: ", docs);
      posts.value = docs;
    };
    setSnapshotListener("posts", snapshotListener, "created", "desc");

    return { posts };
  },
};
</script>

<style></style>
