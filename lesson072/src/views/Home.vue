<template>
  <div class="home">home</div>
  <p ref="p">{{ name }} - {{ age }}</p>
  <button @click="handleClick">click me</button>
  <button @click="age++">inc age</button>
  <input type="text" v-model="name">
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    const name = ref("Mario");
    const age = ref(30);

    const p = ref("hello");
    console.log(p);
    console.log(p.value);

    const handleClick = () => {
      name.value = "Luigi"
      age.value = 90
      // console.log(p, p.value);
      // p.value.classList.add("test");
      // p.value.textContent = "Hello ninjas!";
    };
    return { age, name, handleClick, p };
  },
};
</script>
