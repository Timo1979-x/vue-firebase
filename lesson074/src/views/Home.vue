<template>
  <div class="home">
    <h1>Home</h1>
    <h2>refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>

    <h2>reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{name2}}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: "Mario", age: 30 });
    const ninjaTwo = reactive({ name: "Luigi", age: 35 });

    const name2 = reactive('Luigi')

    const updateNinjaOne = () => {
      ninjaOne.value.age = 45;
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 90;
      
      // name2 = "Mike"; // not working:
    }
    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, name2};
  },
};
</script>
