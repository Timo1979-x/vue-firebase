<template>
  <div class="tag-cloud">
    <h3>Tag cloud</h3>
    <div v-for="t in tags" :key="t">
      <router-link :to="{ name: 'Tag', params: { tag: t } }"
        >#{{ t }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["posts"],
  setup(props) {
    const tags = {};
    props.posts.forEach((e) => {
      e.tags.forEach((t) => (tags[t] = 1));
    });
    return { tags: ref(Object.keys(tags)) };
  },
};
</script>

<style>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
