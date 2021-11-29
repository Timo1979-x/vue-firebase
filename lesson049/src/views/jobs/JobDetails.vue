<template>
  <h1>Job details page</h1>
  <p>Job id is {{ id }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  }
};
</script>

<style></style>
