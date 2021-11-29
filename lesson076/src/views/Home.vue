<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>Search term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "Luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    const stopWatch = watch(search, (current, previous, c) => {
      console.log(`watch function: ${previous} => ${current}, ${c}`);
    });

    const stopEffect = watchEffect(() => {
      console.log(`watchEffect: ${search.value}`);
      // console.log(`watchEffect: ${a}`);
    });

    const matchingNames = computed(() => {
      if (search.value == "") return names.value;
      return names.value.filter((e) => e.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    }
    return { names, search, matchingNames, handleClick};
  },
};
</script>
