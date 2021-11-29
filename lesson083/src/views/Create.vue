<template>
  <div class="create">
    <form @submit.prevent="submit">
      <label>Title:</label>
      <input type="text" required v-model="title" />
      <label>Content:</label>
      <textarea required v-model="body"></textarea>
      <label>Tags (hit Enter to add a tag)</label>
      <input @keydown.enter.prevent="addTag" type="text" v-model="tag" />
      <button>Add post</button>
    </form>
    <div class="pill" v-for="t in tags" :key="t">#{{ t }}&nbsp;</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const addTag = () => {
      let t = tag.value.replace(/\s/g, "");
      if (t.length != 0 && !tags.value.includes(t)) {
        tags.value.push(t);
      }
      tag.value = "";
    };
    const submit = async () => {
      let result = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title: title.value,
          body: body.value,
          tags: tags.value,
        }),
      });
      console.log(result);
      // .then(() => this.$router.push("/"))
      // .catch((e)=> console.log(e.message));
    };
    return { title, body, tag, tags, addTag, submit };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
