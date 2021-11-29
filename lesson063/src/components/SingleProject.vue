<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icon">
        <span class="material-icons">edit</span>
        <span class="material-icons" @click="deleteProject">delete</span>
        <span class="material-icons tick" @click="toggleComplete">done</span>
      </div>
    </div>
    <div class="details" v-show="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete"))
        .catch((e) => console.log(e.message));
    },
    toggleComplete() {
      let newState = !this.project.complete;
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ complete: newState }),
      })
        .then(() => (this.$emit('complete', this.project.id)))
        .catch((e) => console.log(e.message));
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
 /* completed projects */
  .project.complete {
    border-left: 4px solid #00ce89;
  }
  .project.complete .tick {
    color: #00ce89;
  }
</style>
