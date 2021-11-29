<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="(p, i) in projects" :key="p.id">
        <single-project :project="p" @delete="deleteProject(i)" @complete="completeProject"/>
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
  methods:{
    deleteProject(i) {
      this.projects.splice(i, 1);
    },
    completeProject(id) {
      let p = this.projects.find(el => el.id === id);
      p.complete = !p.complete;
    }
  }
};
</script>
