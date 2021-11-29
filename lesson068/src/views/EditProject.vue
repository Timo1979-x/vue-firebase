<template>
  <form @submit.prevent="submit">
    <label>Title</label>
    <input type="text" required v-model="project.title" />
    <label>Details</label>
    <textarea required v-model="project.details"></textarea>
    <button>Update project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      project: {
        title: "",
        details: "",
        complete: false,
        id: null,
      },
      uri: `http://localhost:3000/projects/${this.id}`
    };
  },
  methods: {
    submit() {
      let m = this.project;
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title: m.title, details: m.details }),
      })
        .then(() => this.$router.push("/"))
        .catch((e)=> console.log(e.message));
    }
  },
  mounted() {
    fetch(this.uri)
      .then((d) => d.json())
      .then((d) => (this.project = d))
      .catch((e) => console.log(e.message));
  },
};
</script>

<style></style>
