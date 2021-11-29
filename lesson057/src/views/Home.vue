<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="p in projects" :key="p.id">
        <single-project :project="p" />
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
export default {
  name: "Home",
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((r) => r.json())
      .then((r) => (this.projects = r))
      .catch((err) => console.log(err.message));
  },
  components: { SingleProject },
};
</script>
