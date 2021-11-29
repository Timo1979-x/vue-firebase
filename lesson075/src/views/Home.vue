<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>Search term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Home",
  setup() {
    const names = ref(["mario", "Luigi", "toad", "bowser"]);
    const search = ref("");
    const matchingNames = computed(() => {
      if (search.value == "") return names.value;
      return names.value.filter((e) => e.includes(search.value));
    });
    return { names, search, matchingNames };
  },
};
</script>
