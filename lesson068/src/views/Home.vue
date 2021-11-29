<template>
  <div class="home">
    <FilterNav @updateFilter="filter = $event" :filter="filter"/>
    <div v-if="projects.length">
      <div v-for="p in filteredProjects" :key="p.id">
        <single-project
          :project="p"
          @delete="deleteProject(p.id)"
          @complete="completeProject"
        />
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";
export default {
  name: "Home",
  data() {
    return {
      projects: [],
      filter: "all"
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((r) => r.json())
      .then((r) => (this.projects = r))
      .catch((err) => console.log(err.message));
  },
  components: { SingleProject, FilterNav },
  computed: {
    filteredProjects() {
      switch (this.filter) {
        case "completed":
          return this.projects.filter((el) => el.complete)
        case "ongoing":
          return this.projects.filter((el) => !el.complete)
        default:
          return this.projects;
      }
    },
  },
  methods: {
    deleteProject(id) {
      this.projects = this.projects.filter((el) => el.id != id);
      // this.projects.splice(i, 1);
    },
    completeProject(id) {
      let p = this.projects.find((el) => el.id === id);
      p.complete = !p.complete;
    }
  }
};
</script>

<style scoped>
</style>